import React, { useEffect, useState } from "react";
// import Data from "./Data";
// import Card from "./Card";
import "./movies.css";
import { Link, useParams } from "react-router-dom";

const Movies = () => {
  const { id } = useParams();
  const [Data, setData] = useState([]);
  console.log(id);
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=b4302baf8209ba84d052739967ae763f`;
  const getData = async (url) => {
    const rawData = await fetch(url);
    const jsonData = await rawData.json();
    setData(jsonData);
    console.log(jsonData);
  };

  useEffect(() => {
    getData(url);
  });
  console.log(Data);

  return (
    <>
      <Link to="/" className="link">
        <div className="content">
          <div className="redirection">← Page d'accueil</div>
        </div>
      </Link>
      <h1 className="title">{Data.title}</h1>
    </>
  );
};

export default Movies;
