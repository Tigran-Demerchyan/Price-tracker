package com.tigran.spring6pmmyExpectedPrice.scrapper;

import com.tigran.spring6pmmyExpectedPrice.dto.ProductDto;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

import java.io.IOException;

public abstract class AbstractScraper {


    protected abstract  String getBrand(Document document);
    protected abstract String getModel(Document document);
    protected abstract double getPrice(Document document);

    protected abstract String getSupportedUrl();

    public ProductDto getScrappedProduct(String url) throws IOException {

        Document document = Jsoup.connect(url).get();

        ProductDto productDto = new ProductDto();

        productDto.setBrand(getBrand(document));
        productDto.setModel(getModel(document));
        productDto.setPrice(getPrice(document));

        return productDto;
    }

}
