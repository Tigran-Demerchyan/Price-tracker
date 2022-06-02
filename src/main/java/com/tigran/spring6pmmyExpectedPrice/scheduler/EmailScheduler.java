package com.tigran.spring6pmmyExpectedPrice.scheduler;

import com.tigran.spring6pmmyExpectedPrice.controller.PriceDetailController;
import com.tigran.spring6pmmyExpectedPrice.service.PriceDetailHistoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.concurrent.TimeUnit;


@Service
@Slf4j
public class EmailScheduler {
    @Autowired
    private PriceDetailHistoryService historyService;

    @Autowired
    private PriceDetailController priceDetailController;

    @Value("run.scheduler")
    private String runScheduler;

    @Scheduled(fixedRate = 120, timeUnit = TimeUnit.SECONDS)
    public void sendEmail() throws IOException {
        boolean toBoolean = Boolean.parseBoolean(runScheduler);
        if (!toBoolean) {
            return;
        }
        log.info("worked scheduler sendEmail");
        priceDetailController.sendEmail();
    }


    @Scheduled(fixedRate = 120, timeUnit = TimeUnit.SECONDS)
    public void savePriceDetailHistoryScheduler() throws IOException {
        boolean toBoolean = Boolean.parseBoolean(runScheduler);
        if (!toBoolean) {
            return;
        }
        log.info("worked scheduler savePriceDetailHistoryScheduler");
        historyService.checkPrice();

    }
}
