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
          <h2>{movie.title}</h2>
          <span className="overview">{movie.overview}</span>
          <span>Released on : {movie.release_date}</span>
          <span>Vote average : {movie.vote_average} /10</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
