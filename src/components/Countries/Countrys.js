import React, { useEffect, useState } from "react";
import "./Countrys.css";
import { Link } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>this is the country's Component</h1>
      <div>
        <ul>
          {countries.map((country) => (
            <li>
              <Link
                className="link"
                to={`/Countries/${country.name.common}`}
                key={country.cca3}
              >
                {" "}
                {country.name.common}{" "}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Countries;
