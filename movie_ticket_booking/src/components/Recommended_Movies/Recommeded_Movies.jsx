import React, { useEffect, useState } from "react";
import Axios from "axios";
import Carousel from "../Carousels/Carousel";
import { Movie_Data } from "../../data/Data";
import { Link } from "react-router-dom";

const Recommeded_Movies = () => {

  const [movies, setMovies] = useState({});

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await Axios.get('http://127.0.0.1:8000/movies/');
        console.log(response.data); // Log the response
        setMovies(response.data.data); // Adjust if necessary
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  

  return (
    <>
      <section>
        <div className="px-2 py-6 md:py-10 md:px-16">
          <div className="flex items-center justify-between py-3">
            <h1 className="text-2xl font-semibold text-gray-800 md:text-4xl ">Recommended Movies</h1>
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

export default Recommeded_Movies;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const RecommendedMovies = () => {
//   const [movies, setMovies] = useState([]);

//   // Fetch movies data from the API
//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:8000/movies/');
//         console.log(response.data); // Log the response
//         setMovies(response.data.data); // Adjust if necessary
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };

//     fetchMovies();
//   }, []);

//   return (
//     <section>
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {movies.map((movie) => (
//           <div key={movie.movie_id} className="p-4 bg-white rounded-lg shadow-lg">
//             <img src={movie.image} alt={movie.title} className="object-cover w-full h-48 rounded-md" />
//             <h2 className="mt-2 text-lg font-semibold">{movie.title}</h2>
//             <p className="text-sm text-gray-600">{movie.description}</p>
//             <p className="text-sm font-medium">Director: {movie.director}</p>
//             <p className="text-sm">Rating: {movie.rating}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default RecommendedMovies;