import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banners/Banner";
import Recommeded_Movies from "../components/Recommended_Movies/Recommeded_Movies";
import UpComing_Movies from "../components/UpComing_Movies/UpComing_Movies";
import AllMovies from "../components/AllMovies/AllMovies";
import Footer from "../components/Footer/Footer";


const HomePage = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Navbar/>
        <Banner/>
        <Recommeded_Movies />
        <UpComing_Movies />
        <AllMovies />
        <Footer/>
      </main>
    </>
  );
};

export default HomePage;
