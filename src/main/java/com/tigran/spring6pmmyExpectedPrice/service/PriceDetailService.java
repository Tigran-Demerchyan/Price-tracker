package com.tigran.spring6pmmyExpectedPrice.service;

import com.tigran.spring6pmmyExpectedPrice.dto.PriceDetailDto;
import com.tigran.spring6pmmyExpectedPrice.dto.ProductDto;
import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetail;
import com.tigran.spring6pmmyExpectedPrice.repo.PriceDetailRepository;
import com.tigran.spring6pmmyExpectedPrice.scrapper.GeneralScraper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;

@Service
@Transactional
@Slf4j
public class PriceDetailService {

    @Autowired
    private PriceDetailRepository priceDetailRepository;

    @Autowired
    private GeneralScraper generalScraper;

    @Autowired
    private EmailSender emailSender;

    public void addMyExpectedPrice(PriceDetailDto priceDetailDto) {
        priceDetailRepository.save(new PriceDetail(priceDetailDto));
    }

    public void processItem(PriceDetail priceDetail) throws IOException {


        String url = priceDetail.getUrl();
        ProductDto scrappedProduct = generalScraper.getScrappedProduct(url);


        if (scrappedProduct.getPrice() < priceDetail.getPrice()) {

            String to = priceDetail.getClientEmail();
            String subject = "Your price with " + scrappedProduct.getPrice() + " is good";
            String body = "Brand is " + scrappedProduct.getBrand() + ",  Model is " + scrappedProduct.getModel() + " and url is " + url;

            log.info("email sending to " + priceDetail.getClientEmail());

            emailSender.sendMyEmail(to, subject, body);

            priceDetail.setEmailSent(true);

            priceDetailRepository.save(priceDetail);
        }
    }

    public void savePriceDetailList(List<PriceDetail> priceByEmailSent) {
        for (PriceDetail curr : priceByEmailSent) {
            try {
                processItem(curr);
            } catch (Exception e) {
                log.error("problem with " + curr + e);
            }

        }
    }
}
