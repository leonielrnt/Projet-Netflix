import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import "../styles/home.css";

const Movies = () => {
  const [popularMovies, setMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const API_key = "b4302baf8209ba84d052739967ae763f";
  const totalPages = 5;
  // nombre de pages de films populaires à chercher. Nombre arbitraire.

  const fetchData = async () => {
    // films populaires, en ce moment
    const popularMovies = [];

    for (let page = 1; page <= totalPages; page++) {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_key}&page=${page}`
      );
      const data = await response.json();
      popularMovies.push(...data.results);
    }

    const shuffledMovies = popularMovies.sort(() => 0.5 - Math.random());
    setMovies(shuffledMovies.slice(0, 6));
  };

  const fetchTopRatedMovies = async () => {
    // films les mieux notés parmi tous
    const topRatedMovies = [];

    for (let page = 1; page <= totalPages; page++) {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&page=${page}`
      );
      const data = await response.json();
      topRatedMovies.push(...data.results);
    }

    const shuffledTopRatedMovies = topRatedMovies.sort(
      () => 0.5 - Math.random()
    );
    setTopRatedMovies(shuffledTopRatedMovies.slice(0, 28));
  };

  useEffect(() => {
    fetchData();
    fetchTopRatedMovies();
  }, []);

  return (
    <>
      <Header />
      <div className="all-content">
        <h2 className="title">Popular right now</h2>
        <div className="cards">
          {popularMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
        <h2 className="title">Users love these movies</h2>
        <div className="cards">
          {topRatedMovies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
