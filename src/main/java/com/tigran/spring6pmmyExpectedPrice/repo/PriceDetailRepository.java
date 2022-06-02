package com.tigran.spring6pmmyExpectedPrice.repo;

import com.tigran.spring6pmmyExpectedPrice.entity.PriceDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PriceDetailRepository extends JpaRepository<PriceDetail, Integer> {
    List<PriceDetail>findMyPriceByEmailSent(boolean emailSent);

    @Query("from PriceDetail e where e.clientEmail like :email")
    List<PriceDetail>findByEmail(@Param("email")String email);
}
