import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

import { Movies } from '../../data/Data';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <>
     <div className=" mt-[105px] md:mt-[69px] md:h-[650px] relative">
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    {Movies.map((movie) => (
      <SwiperSlide key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
          <img src={movie.image} alt={movie.title} className="h-full w-full object-fill" />
          
          {/* Centering the text div */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white font-extrabold md:text-6xl text-2xl shadow-2xl shadow-neutral-700 bg-black opacity-45 py-6 px-4 rounded-2xl ">
              BOOK TICKETS - 20% OFF/-
            </h1>
            {/* <h1 className="font-semibold text-6xl mt-10 text-red-600 shadow-2xl">
              {movie.title}
            </h1> */}
          </div>
          
        </Link>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </>
  )
}

export default Banner
