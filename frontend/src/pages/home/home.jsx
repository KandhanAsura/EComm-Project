import React from "react";
import "./Hom.css";

const HomeContent = () => {
  return (
    <div className="content">
      <h1>Welcome To Book Shop</h1>
      <br />
      <br />
      <p>"Hello, My friend! Dive into a world of ideas and inspiration"</p>
      <br />
      <p id="para">
        Embark on a journey through the world of stories and knowledge. Whether
        you're reading for leisure or expanding your horizons, there's always
        something new to discover. Every page holds an adventure waiting for
        you.
        <br />
        <br />
        <span className="highlight">
          Happy reading and enjoy every chapter!
        </span>
      </p>
    </div>
  );
};

export default HomeContent;
