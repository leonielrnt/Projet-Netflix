import React, { useEffect, useState } from "react";
import Card from "./Card";
import Header from "./Header";
import "./home.css";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const fetchData = async () => {
    const API_key = "b4302baf8209ba84d052739967ae763f";

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}`
    );

    const data = await response.json();

    const uniqueMovies = [...new Set(data.results)];

    const shuffledMovies = uniqueMovies.sort(() => 0.5 - Math.random());

    setMovies(shuffledMovies);
  };

  const fetchTopRatedMovies = async () => {
    const API_key = "b4302baf8209ba84d052739967ae763f";

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}`
    );

    const data = await response.json();

    const uniqueMovies = [...new Set(data.results)];

    const shuffledMovies = uniqueMovies.sort(() => 0.5 - Math.random());

    setTopRatedMovies(shuffledMovies);
  };

  useEffect(() => {
    fetchData();
    fetchTopRatedMovies();
  }, []);

  return (
    <>
      <Header />
      <h2 className="title">Popular right now</h2>
      <div className="cards">
        <div className="row-container">
          {movies.slice(0, 6).map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
      <h2 className="title">Users love these movies</h2>
      <div className="cards">
        <div className="row-container">
          {topRatedMovies.slice(0, 24).map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
