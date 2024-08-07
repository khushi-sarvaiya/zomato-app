import React from "react";
import "./Secondheader.css";
import Searchbar from "../Searchbar/Searchbar";
import Header from "../Header/Header";

const Secondheader: React.FC = () => {
  return (
    <div>
      <div className="center-conainer">
        <div className="header-component">
          <div>
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              className="img-size"
            ></img>
          </div>
          <div className="searchbar-component">
            <Searchbar />
          </div>
          <div className="margin-leftheader">
            <Header />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secondheader;
