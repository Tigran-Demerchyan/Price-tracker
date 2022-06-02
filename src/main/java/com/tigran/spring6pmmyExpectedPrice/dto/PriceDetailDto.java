package com.tigran.spring6pmmyExpectedPrice.dto;

import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetail;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PriceDetailDto {
    private double price;
    private String url;
    private String clientEmail;


    public PriceDetailDto(PriceDetail priceDetail) {
        this.price= priceDetail.getPrice();
        this.url= priceDetail.getUrl();
    }
}
