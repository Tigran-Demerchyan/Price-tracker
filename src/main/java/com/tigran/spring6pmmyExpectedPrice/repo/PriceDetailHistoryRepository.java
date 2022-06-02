package com.tigran.spring6pmmyExpectedPrice.repo;

import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetailHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PriceDetailHistoryRepository extends JpaRepository<PriceDetailHistory, Integer> {
}
