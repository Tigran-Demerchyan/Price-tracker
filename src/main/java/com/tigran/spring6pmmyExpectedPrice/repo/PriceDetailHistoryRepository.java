package com.tigran.spring6pmmyExpectedPrice.repo;

import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetailHistory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface PriceDetailHistoryRepository extends JpaRepository<PriceDetailHistory, Integer> {

    @Query("from PriceDetailHistory p where p.priceDetail.id = :id")
    Page<PriceDetailHistory> findByPriceDetailId(@Param("id") int id, Pageable pageable);
}
