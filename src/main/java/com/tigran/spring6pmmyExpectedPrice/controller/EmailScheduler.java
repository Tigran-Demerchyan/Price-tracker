package com.tigran.spring6pmmyExpectedPrice.controller;

import org.apache.commons.lang3.BooleanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class EmailScheduler {

    @Autowired
    private PriceDetailController priceDetailController;

    @Value("run.scheduler")
    private String runScheduler;

    @Scheduled(fixedRate = 120_000)
    public void sendEmail() throws IOException {
        boolean toBoolean = Boolean.parseBoolean(runScheduler);
        if (!toBoolean) {
            return;
        }


        priceDetailController.sendEmail();
    }
}
