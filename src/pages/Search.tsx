import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";

import "../styles/Search.css"

import search_mark from "../assets/search-mark.png"
import star_big from "../assets/star2.svg"
import star_small from "../assets/star3.svg"

const Search = () => {

    const summarizePrivacy = () => {
        
    }

    return (
    <>
        <Header/>
        <div id="content">
            <div className="item">
                <img src={search_mark} id="search-mark"/>
                <img src={star_big} id="star_big" className="item"/>
                <img src={star_small} id="star_small" className="item"/>
            </div>

            <div className="item">
                <p onClick={ summarizePrivacy }>
                    Start Searching
                </p>
            </div>
        </div>
    </>
    );
}

export default Search;