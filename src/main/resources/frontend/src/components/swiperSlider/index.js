import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import {  Navigation, Autoplay } from "swiper";

const SwiperSlider = () =>  {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
       
        autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
        navigation={false}
        modules={[ Navigation, Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className="sliderImage" src="https://m.media-amazon.com/images/G/01/6pm/promos/220505/tryptic-dresses.jpg"/>
            <p>UP TO 50% OFF MSRP!</p>
            <a  className="sliderLink" href="https://www.6pm.com/dresses/CKvXARDE1wHiAgIBAg.zso?s=isNew%2Fdesc%2FgoLiveDate%2Fdesc%2FrecentSalesStyle%2Fdesc%2F&si=5740654%2C5847356%2C6039206%2C6004872%2C6039207%2C6015476%2C5761676%2C5823576%2C5406267%2C5387716%2C6015482%2C5761688%2C5761671%2C5445687%2C5373169%2C5410601%2C5483983&sy=1&pf_rd_r=A4B756E3910041D6B792&pf_rd_p=1b8ececd-cebb-40b9-a3c5-fed1f2fe1bf3" target="_blank"> Shop Radiant Summer Dresses</a>
        </SwiperSlide>
        <SwiperSlide>
            <img className="sliderImage" src="https://m.media-amazon.com/images/I/61vabhkkeBL._AC_SR736,920_.jpg"/>
            <p>Free People</p>
            <a className="sliderLink" href="https://www.zappos.com/women-dresses/CKvXARDE1wHAAQHiAgMBAhg.zso" target="_blank"> Gia Long Vest</a>
        </SwiperSlide>
        <SwiperSlide>
            <img className="sliderImage" src="https://images.hugoboss.com/is/image/boss/hbeu50486233_001_300?$large$=&fit=crop,1&align=1,1&wid=462&qlt=80&fmt=webp"/>
            <p>BOSS X KHABY RELAXED-FIT T-SHIRT IN MERCERIZED COTTON</p>
            <a className="sliderLink" href="https://www.zappos.com/" target="_blank">Zappos</a>   
        </SwiperSlide>
        <SwiperSlide>
            <img className="sliderImage" src="https://m.media-amazon.com/images/I/813F44P2jSL._AC_SR736,920_.jpg"/>
            <p>Lost + Wander</p>
            <a className="sliderLink" href="https://www.6pm.com/" target="_blank"> Southern Bell Maxi Dress</a>  
        </SwiperSlide>
        <SwiperSlide>
            <img className="sliderImage" src="https://m.media-amazon.com/images/G/01/6pm/promos/220505/tryptic-dresses.jpg"/>
            <p>UP TO 50% OFF MSRP!</p>
            <a className="sliderLink"  href="https://www.6pm.com/dresses/CKvXARDE1wHiAgIBAg.zso?s=isNew%2Fdesc%2FgoLiveDate%2Fdesc%2FrecentSalesStyle%2Fdesc%2F&si=5740654%2C5847356%2C6039206%2C6004872%2C6039207%2C6015476%2C5761676%2C5823576%2C5406267%2C5387716%2C6015482%2C5761688%2C5761671%2C5445687%2C5373169%2C5410601%2C5483983&sy=1&pf_rd_r=A4B756E3910041D6B792&pf_rd_p=1b8ececd-cebb-40b9-a3c5-fed1f2fe1bf3" target="_blank"> Shop Radiant Summer Dresses</a>
        </SwiperSlide>
        <SwiperSlide>
            <img className="sliderImage" src="https://m.media-amazon.com/images/I/61vabhkkeBL._AC_SR736,920_.jpg"/>
            <p>Free People</p>
            <a className="sliderLink" href="https://www.zappos.com/women-dresses/CKvXARDE1wHAAQHiAgMBAhg.zso" target="_blank"> Gia Long Vest</a>
        </SwiperSlide>
        <SwiperSlide>
            <img className="sliderImage" src="https://images.hugoboss.com/is/image/boss/hbeu50486233_001_300?$large$=&fit=crop,1&align=1,1&wid=462&qlt=80&fmt=webp"/>
            <p>BOSS X KHABY RELAXED-FIT T-SHIRT IN MERCERIZED COTTON</p>
            <a  className="sliderLink" href="https://www.zappos.com/" target="_blank">Zappos</a>  
        </SwiperSlide>
        <SwiperSlide>
            <img className="sliderImage" src="https://m.media-amazon.com/images/I/813F44P2jSL._AC_SR736,920_.jpg"/>
            <p>Lost + Wander</p>
            <a  className="sliderLink" href="https://www.6pm.com/" target="_blank"> Southern Bell Maxi Dress</a>  
        </SwiperSlide>
      </Swiper>
    </>
  );
}


export default SwiperSlider;
