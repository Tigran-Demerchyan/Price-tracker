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
    public static void main(String[] args) {

    }

    @Autowired
    private PriceDetailHistoryService historyService;

    @Autowired
    private PriceDetailController priceDetailController;

    @Value("${run.scheduler}")
    private Boolean runScheduler;

    @Scheduled(fixedRate = 2, timeUnit = TimeUnit.MINUTES)
    public void sendEmail() throws IOException {

        if (!runScheduler) {
            return;
        }
        log.info("worked scheduler sendEmail");
        priceDetailController.sendEmail();
    }


    @Scheduled(fixedRate = 2, timeUnit = TimeUnit.MINUTES)
    public void savePriceDetailHistoryScheduler() throws IOException {
        if (!runScheduler) {
            return;
        }
        log.info("worked scheduler savePriceDetailHistoryScheduler");
        historyService.checkPrice();

    }
}
