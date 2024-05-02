import React from "react";
import "./header.css";
import LogoVibe from "./assets/vibe-logo.svg";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-logo">
          <img src={LogoVibe} alt="logo vibe" />
        </div>
        <div className="header-links">
          <p className="links">Accueil</p>
          <p className="links">Séries</p>
          <p className="links">Films</p>
          <p className="links">Nouveautés</p>
          <p className="links">Ma liste</p>
          <p className="links">Explorer par langue</p>
        </div>
        <div className="header-input">
          <input type="text" placeholder="Rechercher un film ou une série" />
          <button>Rechercher</button>
        </div>
      </div>
    </>
  );
};

export default Header;
