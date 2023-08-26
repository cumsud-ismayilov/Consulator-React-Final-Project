import React from "react";
import "../TestimionalSlide/TestimionalSlide.scss";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/scss";
import "swiper/scss/navigation";

const TestimionalSlide = () => {
  const [testimional, setTestimional] = useState([]);
  const BASE_URL = "http://localhost:3001/";
  useEffect(() => {
    fetch(`${BASE_URL}testimionaldata`)
      .then((response) => response.json())
      .then((data) => {
        setTestimional(data);
      });
  }, []);
  return (
    <section id="testimionalslide">
      <div className="container">
        <div className="row">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {testimional.length > 0 &&
              testimional.map((element) => (
                <SwiperSlide>
                  <div key={element.index} className="testimional-card">
                    <h6>
                      <FaQuoteLeft />
                    </h6>
                    <img src={element.image} alt="avatar" />
                    <h4>{element.tittle}</h4>
                    <h5>{element.name}</h5>
                    <h3>{element.company}</h3>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimionalSlide;
