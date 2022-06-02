package com.tigran.spring6pmmyExpectedPrice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class scheduler {

    @Autowired
    private PriceDetailController priceDetailController;

    @Value("run.scheduler")
    private boolean runScheduler;

    @Scheduled(fixedRate = 120_000)
    public void sendEmail() throws IOException {

        if (!runScheduler) {
            return;
        }


        priceDetailController.sendEmail();
    }
}
