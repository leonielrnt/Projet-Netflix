import React from "react";
import "./header.css";
import LogoVibe from "./assets/vibe-logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-logo">
          <img src={LogoVibe} alt="logo vibe" />
        </div>
        <div className="header-links">
          <Link to="/" className="link">
            <p className="links">Home</p>
          </Link>
          <p className="links">Series</p>
          <p className="links">Movies</p>
          <p className="links">New</p>
          <p className="links">My list</p>
          <p className="links">Explore by language</p>
        </div>
        <div className="header-input">
          <input type="text" placeholder="Search a movie or series" />
          <button>Search</button>
        </div>
      </div>
    </>
  );
};

export default Header;
