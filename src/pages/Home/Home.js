import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("login");
  };

  const handleaddbutton = () =>{
    navigate("data");
  }

  return (
    <div>
      <div>
        <nav className="navigation-bar-bg-light">
          <header className="brand-logo-name">Generic Tiles</header>
          <span className="navigation-bar-child-elements">
              <input className="searchbox" name='Sname' placeholder='Search Bar'  />
          </span>
          <div>
          <button
            className="button-navigation-login-signup-page" onClick={handleButtonClick}>
            Login/Register
          </button>
          </div>
        </nav>
      </div>
      <div className="button">
        <button className="add" onClick={handleaddbutton}>➕</button>
      </div>
    </div>
  );
};
export default Home;