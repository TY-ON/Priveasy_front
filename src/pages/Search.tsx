import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";

import "../styles/Search.css"

import search_mark from "../assets/search-mark.png"
import star_big from "../assets/star2.svg"
import star_small from "../assets/star3.svg"

import getPageInfo from "../utils/info";
import { BACKEND_PRIVACY_URL } from "../utils/consts";

const SearchButton = () => {
    let navigate = useNavigate();

    const summarizePrivacy = async () => {
        const url = await getPageInfo();
        console.log(url);
        
        axios({
            method: 'GET',
            url: BACKEND_PRIVACY_URL,
            params: {
                url: url
            }
        })
        .then((res) => {
            console.log(res.data);
            if (res.data.privacyText){
                navigate("/Result", {
                    state: { data: res.data.privacyText },
                });
            }
            else{
                navigate("/Error");
            }
        })
        .catch((err) => {
            console.error(err);
        });
    }

    return (        
        <div id="content">
            <div className="item">
                <img src={search_mark} id="search-mark"/>
                <img src={star_big} id="star_big" className="item"/>
                <img src={star_small} id="star_small" className="item"/>
            </div>

            <div className="item" onClick={ () => { summarizePrivacy();} }>
                <p>
                    Start Searching
                </p>
            </div>
        </div>
    );
}

const Search = () => {

    return (
    <>
        <Header/>
        <SearchButton/>
    </>
    );
}

export default Search;