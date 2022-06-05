package com.tigran.spring6pmmyExpectedPrice.dto;

import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetailHistory;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class PriceDetailHistoryDto {
    private double price;
    private LocalDateTime time;

    public PriceDetailHistoryDto(PriceDetailHistory history) {
        this.price = history.getPrice();
        this.time=history.getDate();
    }
}
