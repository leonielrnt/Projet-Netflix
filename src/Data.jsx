import React, { useEffect, useState } from "react";

const Data = () => {
  const [Data, setData] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/568?api_key=b4302baf8209ba84d052739967ae763f";
  const getData = async (url) => {
    const rawData = await fetch(url);
    const jsonData = await rawData.json();
    setData(jsonData);
  };
  useEffect(() => {
    getData(url);
  }, []);
  console.log(Data);
};

export default Data;
