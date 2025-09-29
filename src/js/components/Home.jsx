import React from "react";
import Digit from "./Digit.jsx";

const Home = ({ seconds }) => {
  return (
    <div className="container py-5">
      <div className="d-flex justify-content-center align-items-center gap-2 bg-dark text-white p-3 rounded">
        <Digit value={seconds} />
      </div>
    </div>
  );
};

export default Home;