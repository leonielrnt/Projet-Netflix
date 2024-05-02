// import React, { useEffect, useState } from "react";

// const Data = () => {
//   const API_key = "b4302baf8209ba84d052739967ae763f";
//   const [movies, setMovies] = useState([]); // Initialize with an empty array

//   useEffect(() => {
//     const getMovieData = async () => {
//       const response = await fetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}`
//       );
//       const data = await response.json();
//       const all_movies = data.results;

//       // Create a set to store unique movie IDs
//       const uniqueMovieIds = new Set();

//       // Filter out duplicate movies and add them to the state
//       const uniqueMovies = all_movies.filter((movie) => {
//         if (!uniqueMovieIds.has(movie.id)) {
//           uniqueMovieIds.add(movie.id);
//           return true;
//         }
//         return false;
//       });

//       setMovies(uniqueMovies);
//     };

//     getMovieData();
//   }, []);

//   return movies; // Return the array of unique movie objects
// };

// export default Data;
