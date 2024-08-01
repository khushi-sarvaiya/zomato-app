import React from 'react'
import "./Secondheader.css"
import Searchbar from '../Searchbar/Searchbar'
import Header from '../Header/Header'

const Secondheader = () => {
  return (
    <div>
        <div className="center-conainer">
      <div className="header-component">
        <div>
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            width={126}
            height={27}
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
  )
}

export default Secondheader