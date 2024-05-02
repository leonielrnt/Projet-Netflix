import React from "react";
import Card from "./Card";
import Header from "./Header";
import "./home.css";

const Movies = () => {
  return (
    <>
      <Header />
      <h2 className="title">Tous les films</h2>
      <div className="content">
        {Array.from({ length: 6 }).map((_, i) => (
          <Card key={i} />
        ))}
      </div>
      <h2 className="title">Les films populaires</h2>
    </>
  );
};

export default Movies;
