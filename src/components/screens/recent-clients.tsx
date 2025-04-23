import {
  Company1,
  Company10,
  Company2,
  Company3,
  Company4,
  Company5,
  Company6,
  Company7,
  Company8,
  Company9,
} from "../../constants";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../../../node_modules/swiper/swiper-bundle.css";

export const RecentClients = () => {
  return (
    <div className="w-full container-wrapper">
      <div className="w-full space-y-8">
        <h1 className="text-4xl text-header text-balance  leading-[1.2] font-semibold text-center">
          Our Recent Clients & Partners
        </h1>
        <Swiper
          slidesPerView={2.2}
          autoplay={true}
          loop={true}
          spaceBetween={10}
          // pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 30 },
            1024: { slidesPerView: 5.2, spaceBetween: 20 },
          }}
          modules={[Autoplay]}
          className="mySwiper "
        >
          <SwiperSlide>
            <img src={Company1} alt="" className="object-cover w-44" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Company2} alt="" className="object-cover w-44" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Company3} alt="" className="object-cover w-44" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Company4} alt="" className="object-cover w-44" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Company5} alt="" className="object-cover w-44" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Company6} alt="" className="object-cover w-44" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Company7} alt="" className="object-cover w-44" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Company8} alt="" className="object-cover w-44" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Company9} alt="" className="object-cover w-44" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Company10} alt="" className="object-cover w-44" />
          </SwiperSlide>
        </Swiper>
        <p className="font-semibold text-center text-paragraph-text">
          Join 4,000 + Companies who are already growing
        </p>
      </div>
    </div>
  );
};
