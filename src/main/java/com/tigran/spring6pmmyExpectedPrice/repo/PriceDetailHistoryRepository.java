package com.tigran.spring6pmmyExpectedPrice.repo;

import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetailHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PriceDetailHistoryRepository extends JpaRepository<PriceDetailHistory, Integer> {

    @Query("from PriceDetailHistory p where p.priceDetail.id = :id")
    List<PriceDetailHistory> findByPriceDetailId(@Param("id") int id);
}
