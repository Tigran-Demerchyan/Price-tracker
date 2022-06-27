package com.tigran.spring6pmmyExpectedPrice.scrapper;

import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

@Service
public class RalphLaurenProductScrapper extends AbstractScraper {

    @Override
    protected String getBrand(Document document) {
        Elements select = document.select("div.brand-name");
        return select.text();
    }

    @Override
    protected String getModel(Document document) {
        Elements select = document.select("h1.product-name");
        return select.text();
    }

    @Override
    protected double getPrice(Document document) {
        String priceText = document.select("span.lowblack").text();
        priceText = priceText.replaceAll("\\$", "");
        return Double.parseDouble(priceText);
    }

    @Override
    protected String getSupportedUrl() {
        return "ralphlauren";
    }


}
