package com.tigran.spring6pmmyExpectedPrice.dto;

import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetail;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PriceDetailByEmailDto {

    private int id;
    private double price;
    private String url;
    private String clientEmail;
    private Double newPrice;

    public PriceDetailByEmailDto(PriceDetail priceDetail) {
        this.id = priceDetail.getId();
        this.price = priceDetail.getPrice();
        this.url= priceDetail.getUrl();
        this.clientEmail= priceDetail.getClientEmail();

    }
}
