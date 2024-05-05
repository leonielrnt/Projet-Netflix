import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./movies.css";
import { useParams } from "react-router-dom";
import StarIcon from "./assets/star-icon.svg";

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
  }, []);
  console.log(Data);

  return (
    <>
      <Header />
      <div className="movie-container">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${Data.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="movie-details">
          <h1 className="title">{Data.title}</h1>
          <div className="info">
            <span>
              {Data.release_date} | {Data.runtime} min |{" "}
              {Data.original_language}
            </span>
          </div>
          <div className="tags">
            <span>
              {Data.adult ? "Adult" : "All audiences"} |{" "}
              {Data && Data.genres
                ? Data.genres.map((genre) => genre.name).join(", ")
                : ""}{" "}
            </span>
          </div>
          {/* <div className="movie-directors">
              <span>
                De 
              </span>
            </div> */}
          <div className="movie-rating">
            <span className="rating-star">
              <img src={StarIcon} alt="star" /> {Data.vote_average} / 10
            </span>
          </div>
          <div className="movie-synopsis">
            <h2>Synopsis</h2>
            <p>{Data.overview}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movies;
