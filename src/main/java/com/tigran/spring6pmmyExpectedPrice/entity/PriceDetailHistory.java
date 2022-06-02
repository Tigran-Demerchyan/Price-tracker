package com.tigran.spring6pmmyExpectedPrice.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "price_detail_history")
@Data
@NoArgsConstructor
public class PriceDetailHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "price")
    private double price;
    @Column(name = "date_time")
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name = "price_detail_id")
    private PriceDetail priceDetail;
}
