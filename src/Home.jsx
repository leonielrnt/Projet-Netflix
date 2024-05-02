import React from "react";
import Card from "./Card";
import Header from "./Header";
import "./home.css";
import Data from "./Data";

const Movies = () => {
  const movieData = Data();

  return (
    <>
      <Header />
      <h2 className="title">Popular right now</h2>
      <div className="cards">
        <div className="row-container">
          {movieData.slice(0, 6).map((movie, i) => (
            <Card key={i} movie={movie} />
          ))}
        </div>
      </div>
      <h2 className="title">Users love these movies</h2>
      <div className="cards">
        <div className="row-container">
          {movieData.slice(6, 30).map((movie, i) => (
            <Card key={i} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Movies;
