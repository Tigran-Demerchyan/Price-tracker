package com.tigran.spring6pmmyExpectedPrice.controller;

import com.tigran.spring6pmmyExpectedPrice.dto.PriceDetailHistoryDto;
import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetailHistory;
import com.tigran.spring6pmmyExpectedPrice.repo.PriceDetailHistoryRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/history")
@RequiredArgsConstructor
public class PriceDetailHistoryController {

    private final PriceDetailHistoryRepository historyRepository;

    @GetMapping("/{id}")
    public List<PriceDetailHistoryDto> getHistory(@PathVariable("id") int id) {


        List<PriceDetailHistory> priceDetailHistories = historyRepository.findByPriceDetailId(id);
        return priceDetailHistories.stream()
                .map(PriceDetailHistoryDto::new)
                .collect(Collectors.toList());
    }

}
