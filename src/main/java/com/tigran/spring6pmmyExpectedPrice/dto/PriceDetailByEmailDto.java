package com.tigran.spring6pmmyExpectedPrice.dto;

import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetail;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PriceDetailByEmailDto {
    private double price;
    private String url;
    private String clientEmail;
    private Double newPrice;

    public PriceDetailByEmailDto(PriceDetail priceDetail) {
        this.price = priceDetail.getPrice();
        this.url= priceDetail.getUrl();
        this.clientEmail= priceDetail.getClientEmail();
        

    }
}
