import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";
import logo from './LogoSVGWhiteBG.svg'

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <img src={logo} alt="DevClub Logo" width="100" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://cdn.pixabay.com/photo/2014/12/21/23/53/hay-576266_960_720.png"
          atl=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
