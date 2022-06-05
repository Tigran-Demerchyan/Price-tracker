package com.tigran.spring6pmmyExpectedPrice.entity;

import com.tigran.spring6pmmyExpectedPrice.dto.PriceDetailDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "price_detail")
@Getter
@Setter
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


    @OneToMany(mappedBy = "priceDetail")
    private List<PriceDetailHistory> priceDetailHistories;

    public PriceDetail(PriceDetailDto priceDetailDto) {
        this.price = priceDetailDto.getPrice();
        this.url = priceDetailDto.getUrl();
        this.clientEmail = priceDetailDto.getClientEmail();
        this.emailSent = false;
    }
}
