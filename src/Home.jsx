import React from "react";
import Card from "./Card";
import Header from "./Header";
import "./home.css";

const Movies = () => {
  return (
    <>
      <Header />
      <h2 className="title">Tous les films</h2>
      <div className="cards">
        <div className="row-container">
          {Array.from({ length: 100 }).map((_, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
      <h2 className="title">Les films populaires</h2>
    </>
  );
};

export default Movies;
