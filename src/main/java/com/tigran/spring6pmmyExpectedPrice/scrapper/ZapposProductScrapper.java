package com.tigran.spring6pmmyExpectedPrice.scrapper;

import com.tigran.spring6pmmyExpectedPrice.dto.ProductDto;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class ZapposProductScrapper {


    private String getBrand(Document document) {
        return document.select("span.zx-z span").text();
    }

    private String getModel(Document document) {
        return document.select("span.Ax-z").text();
    }

    private double getPrice(Document document) {
        String priceText = document.select("span").attr("aria-label");
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
