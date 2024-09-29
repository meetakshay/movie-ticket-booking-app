import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Carousel.css";

// import required modules
// import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utils/Animation";


const Carousel = ({ Movies }) => {
  return (
    <>
      <motion.div
    
       className="">
        <Swiper
          // slidesPerView={4}
          breakpoints={{
            340: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          // modules={[Pagination]}
          className="mySwiper"
        >
          {Movies.map((movie) => (
            <SwiperSlide key={movie.id} className="flex flex-col overflow-hidden rounded-lg ">
              <Link to={`/movie/${movie.id}`}>
              <motion.div  variants={FadeLeft(movie.delay)}
                    initial='hidden'
                    whileInView={'visible'}
                    whileHover={{scale:1.1}}
                     className="">
              <img
                    src={movie.image}
                    alt={movie.title}
                    className="object-contain rounded-lg"
                />
                 <h2 className="mt-2 text-center">{movie.title}</h2>
              </motion.div>
               
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
};

export default Carousel;
