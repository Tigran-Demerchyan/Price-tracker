package com.tigran.spring6pmmyExpectedPrice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class PriceDetailHistoryPageDto {
    private List<PriceDetailHistoryDto> items;
    private int totalCount;
    private int pageCount;
}
