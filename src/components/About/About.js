import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { country } = useParams();
  console.log(country);
  return (
    <div>
      <h1>this is About page</h1>
    </div>
  );
};

export default About;
