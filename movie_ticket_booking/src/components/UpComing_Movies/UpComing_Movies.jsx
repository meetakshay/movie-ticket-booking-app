import React from "react";
import Carousel from "../Carousels/Carousel";
import { Movie_Data } from "../../data/Data";
import { Link } from "react-router-dom";

const UpComing_Movies = () => {
  return (
    <>
      <section>
        <div className=" px-2 md:px-16">
          <div className="py-3 flex justify-between items-center">
            <h1 className="text-2xl md:text-4xl text-gray-800 font-semibold">Upcoming Movies</h1>
            <Link to='#' className="text-red-600">See All...</Link>
          </div>
          <div className="">
            <Carousel Movies={Movie_Data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default UpComing_Movies;
