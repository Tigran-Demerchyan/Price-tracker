package com.tigran.spring6pmmyExpectedPrice.scrapper;

import com.tigran.spring6pmmyExpectedPrice.dto.ProductDto;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;
import java.io.IOException;

@Service
public class BossProductScrapper {


    private String getBrand(Document document) {
        Elements select = document.select(".logo--boss-m.stage__logo--boss>title");
        return select.text();
    }

    private String getModel(Document document) {
        Elements select = document.select("h1.pdp-stage__header-title.font--h5.font--h4-m");
        return select.text();
    }

    private double getPrice(Document document) {
        Elements select = document.select("div.stage__info-price-value");
        String priceText = select.get(0).text();

        priceText = priceText.replaceAll("\\$", "");
        return Double.parseDouble(priceText);
    }

    public ProductDto getScrappedProduct(String url) throws IOException {
        Document document = Jsoup.connect(url).get();

        ProductDto productDto = new ProductDto();
        productDto.setBrand(getBrand(document));
        productDto.setModel(getModel(document));
        productDto.setPrice(getPrice(document));

        return productDto;

    }


}
