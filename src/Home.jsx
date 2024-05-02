import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import "./home.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const API_key = "b4302baf8209ba84d052739967ae763f";
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}`
      );
      const data = await response.json();
      const all_movies = data.results;

      // Create a set to store unique movie IDs
      const uniqueMovieIds = new Set();

      // Filter out duplicate movies and add them to the state
      const uniqueMovies = all_movies.filter((movie) => {
        if (!uniqueMovieIds.has(movie.id)) {
          uniqueMovieIds.add(movie.id);
          return true;
        }
        return false;
      });

      setMovies(uniqueMovies);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <h2 className="title">Popular right now</h2>
      <div className="cards">
        <div className="row-container">
          {movies.slice(0, 6).map((movie, i) => (
            <Card key={i} movie={movie} />
          ))}
        </div>
      </div>
      <h2 className="title">Users love these movies</h2>
      <div className="cards">
        <div className="row-container">
          {movies.slice(6, 30).map((movie, i) => (
            <Card key={i} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
