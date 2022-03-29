import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './CountryDetails.css'

const CountryDetails = () => {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  const url = `https://restcountries.com/v3.1/name/${name}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  const data = country[0];
  return (
    <div className="details">
      <img src={data?.flags?.png} alt="" />
      <h2>official: {data?.name?.official}</h2>
      <h2>capital: {data?.capital}</h2>
    </div>
  );
};

export default CountryDetails;
