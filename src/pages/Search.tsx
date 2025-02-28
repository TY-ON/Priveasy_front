import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";

import styles from "../styles/Search.module.css"

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
            if (res.data){
                navigate("/result", {
                    state: { data: res.data },
                });
            }
            else{
                navigate("/error");
            }
        })
        .catch((err) => {
            console.error(err);
        });
    }

    return (        
        <div id={styles.content}>
            <div className={styles.item}>
                <img src={search_mark} id={styles["search-mark"]}/>
                <img src={star_big} id={styles["star_big"]} className={styles["item"]}/>
                <img src={star_small} id={styles["star_small"]} className={styles["item"]}/>
            </div>

            <div className={styles.item} onClick={ () => { summarizePrivacy();} }>
                <p id={styles.p}>
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