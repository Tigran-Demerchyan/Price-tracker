package com.tigran.spring6pmmyExpectedPrice.controller;

import com.tigran.spring6pmmyExpectedPrice.dto.PriceDetailByEmailDto;
import com.tigran.spring6pmmyExpectedPrice.dto.PriceDetailDto;
import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetail;
import com.tigran.spring6pmmyExpectedPrice.repo.PriceDetailRepository;
import com.tigran.spring6pmmyExpectedPrice.service.PriceDetailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/products")
@Slf4j
@RequiredArgsConstructor
public class PriceDetailController {

    private final PriceDetailRepository priceDetailRepository;
    private final PriceDetailService priceDetailService;

    @PostMapping("/create")
    public void addMyPriceToData(@RequestBody PriceDetailDto priceDetailDto) {
        priceDetailService.addMyExpectedPrice(priceDetailDto);
    }


    @PostMapping("/send")
    public void sendEmail() throws IOException {
        List<PriceDetail> priceByEmailSent = priceDetailRepository.findMyPriceByEmailSent(false);
        priceDetailService.savePriceDetailList(priceByEmailSent);

    }


    @GetMapping("/{email}")
    public List<PriceDetailByEmailDto> getDataByEmail(@PathVariable String email) {
        List<PriceDetail> byEmail = priceDetailRepository.findByEmail("%" + email + "%");
        return byEmail.stream()
                .map(myPrice -> new PriceDetailByEmailDto(myPrice))
                .collect(Collectors.toList());
    }

}
