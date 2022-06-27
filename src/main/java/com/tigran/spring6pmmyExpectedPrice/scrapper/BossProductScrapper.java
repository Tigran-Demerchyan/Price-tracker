package com.tigran.spring6pmmyExpectedPrice.scrapper;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

@Service
public class BossProductScrapper extends AbstractScraper {

    @Override
    protected String getBrand(Document document) {
        Elements select = document.select(".logo--boss-m.stage__logo--boss>title");
        return select.text();
    }

    @Override
    protected String getModel(Document document) {
        Elements select = document.select("h1.pdp-stage__header-title.font--h5.font--h4-m");
        return select.text();
    }

    @Override
    protected double getPrice(Document document) {
        Elements select = document.select("div.stage__info-price-value");
        String priceText = select.get(0).text();

        priceText = priceText.replaceAll("\\$", "");
        return Double.parseDouble(priceText);
    }


}
