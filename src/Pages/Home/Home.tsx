import React from "react";
import "./Home.css";
import Searchbar from "../../Components/Searchbar/Searchbar";

const Home:React.FC = () => {
  return (
    <div className="main-container">
      <div className="background">
        <div className="container">
          <div className="static-header-container">
            <div>Login</div>
            <div>Logout</div>
          </div>
          <div>
            <img
              src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
              className="center-title"
            ></img>
          </div>
          <div className="description">
            Discover the best food & drinks in Ahmedabad
          </div>
          <div className="search-container">
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
