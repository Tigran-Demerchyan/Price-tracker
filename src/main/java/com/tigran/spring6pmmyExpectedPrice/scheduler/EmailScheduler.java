package com.tigran.spring6pmmyExpectedPrice.scheduler;

import com.tigran.spring6pmmyExpectedPrice.controller.PriceDetailController;
import com.tigran.spring6pmmyExpectedPrice.service.PriceDetailHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.IOException;


@Service
public class EmailScheduler {
    @Autowired
    private PriceDetailHistoryService historyService;

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


    @Scheduled(fixedRate = 500_000)
    public void savePriceDetailHistoryScheduler() throws IOException {
        boolean toBoolean = Boolean.parseBoolean(runScheduler);
        if (!toBoolean) {
            return;
        }
        historyService.checkPrice();

    }
}
