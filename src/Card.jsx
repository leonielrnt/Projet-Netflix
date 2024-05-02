import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  return (
    <Link to={`/movies/${movie.id}`} className="link">
      <div className="content">
        <div className="movie_description">
          <h1>{movie.title}</h1> <br />
          <span>{movie.id}</span> <br />
          <span>{movie.overview}</span>
        </div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="poster"
        />
      </div>
    </Link>
  );
};

export default Card;
