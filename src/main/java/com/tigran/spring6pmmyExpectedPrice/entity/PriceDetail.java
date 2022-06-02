package com.tigran.spring6pmmyExpectedPrice.entity;

import com.tigran.spring6pmmyExpectedPrice.dto.PriceDetailDto;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "my_price")
@Data
@NoArgsConstructor
public class PriceDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "price")
    private double price;
    @Column(name = "url")
    private String url;
    @Column(name = "client_email")
    private String clientEmail;
    @Column(name = "email_sent")
    private boolean emailSent;
    @Column(name = "new_price")
    private Double newPrice;

    public PriceDetail(PriceDetailDto priceDetailDto) {
        this.price = priceDetailDto.getPrice();
        this.url = priceDetailDto.getUrl();
        this.clientEmail = priceDetailDto.getClientEmail();
        this.emailSent=false;
    }
}
