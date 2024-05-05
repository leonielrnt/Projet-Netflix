import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "../styles/movies.css";
import { useParams } from "react-router-dom";
import StarIcon from "../assets/star-icon.svg";
import Card from "../components/Card";

const Movies = () => {
  const { id } = useParams();

  const [Data, setData] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=b4302baf8209ba84d052739967ae763f`;
  const similarUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=b4302baf8209ba84d052739967ae763f`;

  const getData = async (url) => {
    const rawData = await fetch(url);
    const jsonData = await rawData.json();
    setData(jsonData);
  };

  const getSimilarMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    const allSimilarMovies = data.results;
    const similarMovies = allSimilarMovies.slice(0, 6);
    setSimilarMovies(similarMovies);
  };

  useEffect(() => {
    getData(url);
    getSimilarMovies(similarUrl);
  }, []);

  return (
    <>
      <Header />
      <div
        className="full-screen-container"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${Data.poster_path})`,
          backgroundSize: "cover",
        }}
      />
      <div className="movie-container">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${Data.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="movie-details">
          <div className="genres">
            {Data && Data.genres
              ? Data.genres.map((genre) => (
                  <span key={genre.id} className="genre-span">
                    {genre.name}
                  </span>
                ))
              : ""}
          </div>
          <h1 className="title">{Data.title}</h1>
          <div className="info">
            <span>{Data.release_date} </span>
            <span>{Data.runtime} min</span>
            <span>{Data.original_language}</span>
          </div>
          <div className="audience">
            <span>{Data.adult ? "Adult" : "All audiences"} </span>
          </div>
          <div className="movie-rating">
            <span className="rating-star">
              <img src={StarIcon} alt="star" /> {Data.vote_average} / 10
            </span>
          </div>
          <div className="movie-synopsis">
            <span className="tagline">{Data.tagline}</span>
            <p>{Data.overview}</p>
          </div>
        </div>
      </div>
      {similarMovies.length > 0 && (
        <div className="similar-movies">
          <h2>Similar Movies</h2>
          <div className="similar-movies-cards">
            {similarMovies.map((similarMovie) => (
              <Card key={similarMovie.id} movie={similarMovie} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Movies;
