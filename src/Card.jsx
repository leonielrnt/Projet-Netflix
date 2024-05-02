import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="link">
      <div className="content">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="poster"
        />
        <div className="movie-description">
          <h1>{movie.title}</h1>
          <span>{movie.runtime}</span>
          <span>{movie.tagline}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
