import React, { useEffect, useState } from "react";

const Data = () => {
  // const [Data, setData] = useState([]);

  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);

  const getData = async () => {
    const rawData = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=b4302baf8209ba84d052739967ae763f`
    );
    const jsonData = await rawData.json();
    setMovies(jsonData.results);
  };

  const getRandomMovie = () => {
    if (movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      setRandomMovie(movies[randomIndex]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getRandomMovie();
  }, [movies]);

  //   console.log(Data);

  return randomMovie;
};

export default Data;
