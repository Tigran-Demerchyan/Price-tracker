package com.tigran.spring6pmmyExpectedPrice.repo;

import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PriceDetailRepository extends JpaRepository<PriceDetail, Integer> {
    List<PriceDetail> findMyPriceByEmailSent(boolean emailSent);

    @Query("from PriceDetail e where e.clientEmail like :email")
    Page<PriceDetail> findAllByEmail(@Param("email") String email, Pageable pageable);
}
