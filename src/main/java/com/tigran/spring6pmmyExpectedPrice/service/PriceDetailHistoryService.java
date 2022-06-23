package com.tigran.spring6pmmyExpectedPrice.service;

import com.tigran.spring6pmmyExpectedPrice.dto.ProductDto;
import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetail;
import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetailHistory;
import com.tigran.spring6pmmyExpectedPrice.repo.PriceDetailHistoryRepository;
import com.tigran.spring6pmmyExpectedPrice.repo.PriceDetailRepository;
import com.tigran.spring6pmmyExpectedPrice.scrapper.GeneralScraper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class PriceDetailHistoryService {

    private final PriceDetailHistoryRepository historyRepository;
    private final PriceDetailRepository priceDetailRepository;
    private final GeneralScraper generalScraper;


    public void checkPrice() throws IOException {
        List<PriceDetail> allPriceDetails = priceDetailRepository.findAll();

        for (PriceDetail curr : allPriceDetails) {
            String url = curr.getUrl();
            ProductDto scrappedProduct = generalScraper.getScrappedProduct(url);


            List<PriceDetailHistory> priceDetailHistories = curr.getPriceDetailHistories();
            List<Double> priceHistoryList = priceDetailHistories.stream()
                    .map(m -> m.getPrice())
                    .collect(Collectors.toList());

            if (!priceHistoryList.contains(scrappedProduct.getPrice()) || priceDetailHistories.isEmpty()) {

                PriceDetailHistory priceDetailHistory = new PriceDetailHistory();
                priceDetailHistory.setPrice(scrappedProduct.getPrice());
                priceDetailHistory.setDate(LocalDateTime.now());
                priceDetailHistory.setPriceDetail(curr);

                log.info("add new history " + priceDetailHistory);
                historyRepository.save(priceDetailHistory);
            }

        }

    }


}
