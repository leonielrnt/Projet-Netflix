import React from "react";
import Data from "./Data";
import "./card.css";
import { Link } from "react-router-dom";

const Card = () => {
  const movieData = Data();

  return (
    <Link to={`/movies/${movieData.id}`} className="link">
      <div className="content">
        <div className="movie_description">
          <h1>{movieData.title}</h1> <br />
          <span>{movieData.id}</span> <br />
          <span>{movieData.overview}</span>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt={movieData.title}
          className="poster"
        />
      </div>
    </Link>
  );
};

export default Card;
