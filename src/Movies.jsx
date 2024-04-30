import React from "react";
import Data from "./Data";
import "./movies.css";
import { Link } from "react-router-dom";

const Movies = () => {
  const movieData = Data();
  return (
    <Link to="/" className="link">
      <div className="content">
        <div className="redirection">← Page d'accueil</div>
      </div>
    </Link>
  );
};

export default Movies;
