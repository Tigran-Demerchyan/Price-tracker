package com.tigran.spring6pmmyExpectedPrice.scrapper;

import com.tigran.spring6pmmyExpectedPrice.dto.ProductDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@RequiredArgsConstructor
public class GeneralScraper {

    private final SixPmProductScrapper sixPmProductScrapper;
    private final ZapposProductScrapper zapposProductScrapper;
    private final BossProductScrapper bossProductScrapper;

    public ProductDto getScrappedProduct(String url) throws IOException {

        if (url.contains("6pm")) {
            return sixPmProductScrapper.getScrappedProduct(url);
        }
        if (url.contains("zappos")) {
            return zapposProductScrapper.getScrappedProduct(url);
        }
        if (url.contains("hugoboss")){
            return bossProductScrapper.getScrappedProduct(url);
        }

        return null;

    }


}
