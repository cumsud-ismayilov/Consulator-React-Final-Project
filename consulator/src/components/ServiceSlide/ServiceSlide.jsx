import React from "react";
import "../ServiceSlide/ServicesSlide.scss";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
const ServiceSlide = () => {
  const [service, setService] = useState([]);
  const BASE_URL = "http://localhost:3001/";
  useEffect(() => {
    fetch(`${BASE_URL}serviceslidedata`)
      .then((response) => response.json())
      .then((data) => {
        setService(data);
      });
  }, []);
  return (
    <section id="serviceslide">
      <div className="container">
        <div className="row">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
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
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {service.length > 0 &&
              service.map((element, index) => (
                <SwiperSlide>
                  {" "}
                  <div key={index} className="explore-card">
                    <h3>
                      <img src={element.images} alt="trophy" />
                    </h3>
                    <div className="card-text">
                      <p>{element.desc}</p>
                      <h2>{element.tittle}</h2>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlide;
