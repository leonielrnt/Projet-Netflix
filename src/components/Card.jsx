import React from "react";
import "../styles/card.css";
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
          <div
            className="full-screen-container"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
              backgroundSize: "cover",
              height: "100%",
              width: "100%",
              position: "absolute",
              zIndex: -1,
              top: 0,
              left: 0,
              opacity: 0.2,
              filter: "blur(5px)",
            }}
          />
          <span>
            <h2>{movie.title}</h2>
            <span className="italic">Click to see more </span>
          </span>
          <span className="overview">{movie.overview}</span>
          <span>Released on : {movie.release_date}</span>
          <span>Vote average : {movie.vote_average} /10</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
