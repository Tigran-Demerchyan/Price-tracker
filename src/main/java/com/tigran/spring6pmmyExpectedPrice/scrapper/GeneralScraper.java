package com.tigran.spring6pmmyExpectedPrice.scrapper;

import com.tigran.spring6pmmyExpectedPrice.dto.ProductDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GeneralScraper {

//    private final SixPmProductScrapper sixPmProductScrapper;
//    private final ZapposProductScrapper zapposProductScrapper;
//    private final BossProductScrapper bossProductScrapper;
//    private final RalphLaurenProductScrapper ralphLaurenProductScrapper;

    private final List<AbstractScraper> abstractScraperList;

    public ProductDto getScrappedProduct(String url) throws IOException {

        for (AbstractScraper cur : abstractScraperList) {

            if(url.contains(cur.getSupportedUrl())){
                return cur.getScrappedProduct(url);
            }
        }

//
//        if (url.contains("6pm")) {
//            return sixPmProductScrapper.getScrappedProduct(url);
//        }
//        if (url.contains("zappos")) {
//            return zapposProductScrapper.getScrappedProduct(url);
//        }
//        if (url.contains("hugoboss")) {
//            return bossProductScrapper.getScrappedProduct(url);
//        }
//        if (url.contains("ralphlauren")) {
//            return ralphLaurenProductScrapper.getScrappedProduct(url);
//        }

        throw new IllegalArgumentException("Could not found scraper for url=" + url);

    }


}
