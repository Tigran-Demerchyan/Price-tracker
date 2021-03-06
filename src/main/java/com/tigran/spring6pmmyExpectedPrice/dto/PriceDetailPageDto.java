package com.tigran.spring6pmmyExpectedPrice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class PriceDetailPageDto {

    private List<PriceDetailByEmailDto> items;
    private int totalElements;
    private int totalPages;
}
