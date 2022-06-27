package com.tigran.spring6pmmyExpectedPrice.scrapper;

import lombok.extern.slf4j.Slf4j;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;


@Service
@Slf4j
public class SixPmProductScrapper extends AbstractScraper {

    @Override
    protected String getBrand(Document document) {
        return document.select("span.jt-z span").text();
    }

    @Override
    protected String getModel(Document document) {
        return document.select("span.kt-z").text();
    }

    @Override
    protected double getPrice(Document document) {
        String priceText = document.select("span").attr("aria-label");
        priceText = priceText.replaceAll("\\$", "");
        double price = Double.parseDouble(priceText);

        return price;
    }

    @Override
    protected String getSupportedUrl() {
        return "6pm";
    }


}
