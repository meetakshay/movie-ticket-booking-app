import React from "react";
import Movie_Detail from "../components/Movie_details/Movie_Detail";
import Navbar from "../components/Navbar/Navbar";

const MovieDetailsPage = () => {
  return (
    <>
      <div className="">
      <Navbar/>
        <Movie_Detail />
      </div>
    </>
  );
};

export default MovieDetailsPage;
