import React from "react";
import { useEffect, useState } from "react";
import "../ExploreSlide/ExploreSlide.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Trophyimg from "../../images/icons8-trophy-64.png"
const ExploreSlide = () => {
  const [explore, setExplore] = useState([]);
  const BASE_URL = "http://localhost:3001/";
  useEffect(() => {
    fetch(`${BASE_URL}exploreslidedata`)
      .then((response) => response.json())
      .then((data) => {
        setExplore(data);
      });
  }, []);

  return (
    <main>
      <section id="exploreslide">
        <div className="container">
          <div className="row">
            
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              
                {explore.length > 0 &&
                  explore.map((element, index) => (
                    <SwiperSlide> <div key={index}  className="explore-card">
                    <h3><img src={Trophyimg} alt="trophy" /></h3>
                 <div className="card-text">
                     <p>{element.desc}</p>
                     <h2>{element.tittle}</h2>
                 </div>
                 </div></SwiperSlide>
                       
                    
                  ))}
             
            </Swiper>
            

          </div>
        </div>
      </section>
    </main>
  );
};

export default ExploreSlide;
