import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";

import "../styles/Search.css"

import search_mark from "../assets/search-mark.png"

const Result = () => {
    const location = useLocation();
    const { data } = location.state;

    return (
    <>
        <Header/>
        <div id="content">
            <div className="title">
                <img src={search_mark} id="search-mark"/>
                <h2>요약 결과</h2>
                <h2 className="link">www.link.com</h2>
            </div>
            <p className="data">{ data }</p>
            <Link to="/">go to home</Link>
        </div>
    </>
    );
}

export default Result;