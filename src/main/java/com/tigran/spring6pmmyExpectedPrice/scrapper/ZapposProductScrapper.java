package com.tigran.spring6pmmyExpectedPrice.scrapper;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;


@Service
public class ZapposProductScrapper  extends AbstractScraper{


    @Override
    protected String getBrand(Document document) {
        return document.select("span.zx-z span").text();
    }

    @Override
    protected String getModel(Document document) {
        return document.select("span.Ax-z").text();
    }

    @Override
    protected double getPrice(Document document) {
        String priceText = document.select("span").attr("aria-label");
        priceText = priceText.replaceAll("\\$", "");
        return Double.parseDouble(priceText);
    }



}
