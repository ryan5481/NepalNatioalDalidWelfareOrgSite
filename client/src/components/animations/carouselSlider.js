import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function CarouselSlider() {

  const images = [
    {
      carouselImage: "1620773284__DSC1504.jpeg"
    },
    {
      carouselImage: "1620773375_156535571_173074424430273_6724579981847438847_n.jpg"
    },
    {
      carouselImage: "1620773393_fjdlaj.jpg"
    }
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((photo, index) => (
          <SwiperSlide
           key={index}>
            <img
              src={require(`../../uploads/carouselImages/${photo?.carouselImage}`)}
              alt={photo.alternativeText}
              style={{ width: "full" }}
            />
          </SwiperSlide>
        ))} 
      </Swiper>
    </>
  );
}
