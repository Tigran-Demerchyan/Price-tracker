import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ImgPm from '../../assets/img/6pmImg.png';
import ImgHugoboss from '../../assets/img/hugoboss.png';
import ImgZappos from '../../assets/img/zapposImg.png';
import ImgRalphLauren from '../../assets/img/logoRalphLauren.png';

import "./styles.css";

import { Navigation, Autoplay } from "swiper";

const SwiperSlider = () => {
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
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href='https://www.6pm.com/' target="_blank">
            <img className="sliderImage" src={ImgPm} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.hugoboss.com/us/men/' target="_blank">
            <img className="sliderImage" src={ImgHugoboss} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.ralphlauren.com/' target="_blank">
            <img className="sliderImage" src={ImgRalphLauren} />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href='https://www.zappos.com/' target="_blank">
            <img className="sliderImage" src={ImgZappos} />
          </a>
        </SwiperSlide>

      </Swiper>

    </>
  );
}


export default SwiperSlider;
