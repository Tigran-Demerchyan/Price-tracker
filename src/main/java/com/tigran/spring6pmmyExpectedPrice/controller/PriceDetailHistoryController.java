package com.tigran.spring6pmmyExpectedPrice.controller;

import com.tigran.spring6pmmyExpectedPrice.dto.PriceDetailHistoryDto;
import com.tigran.spring6pmmyExpectedPrice.dto.PriceDetailHistoryPageDto;
import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetailHistory;
import com.tigran.spring6pmmyExpectedPrice.repo.PriceDetailHistoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/history")
@RequiredArgsConstructor
public class PriceDetailHistoryController {


    private final PriceDetailHistoryRepository historyRepository;

    @GetMapping("/{id}")
    public PriceDetailHistoryPageDto getHistory(@PathVariable("id") int id, @RequestParam(value = "pageNumber", required = false, defaultValue = "0") int pageNumber) {
        Pageable pageRequest = PageRequest.of(pageNumber, PriceDetailController.ITEM_PER_PAGE);


        Page<PriceDetailHistory> priceDetailHistories = historyRepository.findByPriceDetailId(id, pageRequest);

        List<PriceDetailHistoryDto> priceDetailHistoryDtos = priceDetailHistories.stream()
                .map(PriceDetailHistoryDto::new)
                .collect(Collectors.toList());

        PriceDetailHistoryPageDto priceDetailHistoryPageDto = new PriceDetailHistoryPageDto(priceDetailHistoryDtos, priceDetailHistories.getNumberOfElements(), priceDetailHistories.getTotalPages());
        return priceDetailHistoryPageDto;
    }

}
