import React, { useEffect, useState } from "react";
import Header from "./Header";
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
      <Header />
      <Link to="/" className="link">
        <div className="content">
          <div className="redirection">← Page d'accueil</div>
        </div>
      </Link>
      <div className="movie-container">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${Data.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="movie-details">
          <h1 className="title">{Data.title}</h1>
          <div className="movie-info">
            <div className="info">
              <span>
                {Data.release_date} | {Data.runtime} min |
                {Data.original_language}
              </span>
            </div>
            <div className="tags">
              <span>
                {Data.adult ? "Interdit aux moins de 18 ans" : "Tout public"} |
                {Data.genres.name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
