package com.tigran.spring6pmmyExpectedPrice.controller;

import com.tigran.spring6pmmyExpectedPrice.dto.PriceDetailPageDto;
import com.tigran.spring6pmmyExpectedPrice.dto.PriceDetailByEmailDto;
import com.tigran.spring6pmmyExpectedPrice.dto.PriceDetailDto;
import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetail;
import com.tigran.spring6pmmyExpectedPrice.repo.PriceDetailRepository;
import com.tigran.spring6pmmyExpectedPrice.service.PriceDetailService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/products")
@Slf4j
@RequiredArgsConstructor
public class PriceDetailController {

    public static final int ITEM_PER_PAGE = 10;
    private final PriceDetailRepository priceDetailRepository;
    private final PriceDetailService priceDetailService;

    @PostMapping()
    public void addMyPriceToData(@RequestBody PriceDetailDto priceDetailDto) {
        priceDetailService.addMyExpectedPrice(priceDetailDto);
    }


    @PostMapping("/send")
    public void sendEmail() {
        List<PriceDetail> priceByEmailSent = priceDetailRepository.findMyPriceByEmailSent(false);
        priceDetailService.savePriceDetailList(priceByEmailSent);

    }


    @GetMapping()
    public PriceDetailPageDto getDataByEmail(@RequestParam("email") String email, @RequestParam("pageNumber") int pageNumber) {
        Pageable pageRequest = PageRequest.of(pageNumber, ITEM_PER_PAGE);

        Page<PriceDetail> priceDetailPage = priceDetailRepository.findAllByEmail("%" + email + "%", pageRequest);



        List<PriceDetailByEmailDto> priceDetailByEmailDtos = priceDetailPage.stream()
                .map(myPrice -> new PriceDetailByEmailDto(myPrice))
                .collect(Collectors.toList());

        PriceDetailPageDto priceDetailPageDto = new PriceDetailPageDto(priceDetailByEmailDtos, (int) priceDetailPage.getTotalElements(),
                priceDetailPage.getTotalPages());
        return priceDetailPageDto;

    }

    @DeleteMapping("/{id}")

    public void deleteDetailsById(@PathVariable int id) {
        priceDetailRepository.deleteById(id);
    }

}
