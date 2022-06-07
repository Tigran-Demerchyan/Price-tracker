import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper";

import TabletImage from '../../../assets/images/tabletsliderImage.png';
import mapMobileImg from '../../../assets/images/map-slide-mobile.png';

const TabletSlideshow = () => {

    return (
        <Swiper
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="sliderTablet"
        >
            <SwiperSlide>
                <div className="tabletSliderWrapp">
                    <img className="tabletSliderImg" src={TabletImage} />
                    {/* <img className="mobileSliderImg"src={mapMobileImg}/> */}
                    <div className="tabletSlideItem">
                        <p className="tabletTitle">The only city guide that show Popular location</p>
                        <p className="tabletDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <button className="tabletBtn">Try now</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="tabletSliderWrapp">
                    <img className="tabletSliderImg" src={TabletImage} />
                    <img className="mobileSliderImg"src={mapMobileImg}/>
                    <div className="tabletSlideItem">
                        <p className="tabletTitle">The only city guide that show Popular location</p>
                        <p className="tabletDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <button className="tabletBtn">Try now</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="tabletSliderWrapp">
                    <img className="tabletSliderImg" src={TabletImage} />
                    <img className="mobileSliderImg"src={mapMobileImg}/>
                    <div className="tabletSlideItem">
                        <p className="tabletTitle">The only city guide that show Popular location</p>
                        <p className="tabletDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
                        <button className="tabletBtn">Try now</button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

export default TabletSlideshow;
