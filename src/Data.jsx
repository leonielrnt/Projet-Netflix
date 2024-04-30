import React, { useEffect, useState } from "react";

const Data = () => {
  const [Data, setData] = useState([]);
  let movie_id = Math.random() * 700;
  movie_id = Math.round(movie_id) + 200;
  const url = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=b4302baf8209ba84d052739967ae763f`;
  const getData = async (url) => {
    const rawData = await fetch(url);
    const jsonData = await rawData.json();
    setData(jsonData);
  };
  useEffect(() => {
    getData(url);
  }, []);
  console.log(Data);

  return Data;
  
};

export default Data;
