import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import './Country.css'

const Country = () => {
  const { name } = useParams();
  const [country, setCountry] = useState([]);
  const url = `https://restcountries.com/v3.1/name/${name}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  const countryObject = country[0];
  return (
    <div>
      <h1>Country: {countryObject?.name?.common}</h1>
      <Link className="details-btn" to={`/Countries/${name}/details`}>About This Country</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default Country;
