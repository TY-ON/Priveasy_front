import React, { useState, Dispatch, SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import Loading from "../components/Loading";

import styles from "../styles/Search.module.css"

import search_mark from "../assets/search-mark.png"
import star_big from "../assets/star2.svg"
import star_small from "../assets/star3.svg"

import getPageInfo from "../utils/info";
import { BACKEND_PRIVACY_URL } from "../utils/consts";

type SearchButtonProps = {
    setUrl: Dispatch<SetStateAction<string>>;
}

const SearchButton = ({ setUrl }: SearchButtonProps) => {
    const navigate = useNavigate();
    const invokeSummarize = async () => {
        try {
            const url: string = await getPageInfo();
            setUrl(url);
        } catch (error) {
            console.error(error);
            navigate("/error");
        }
    }

    return (        
        <div id={styles.content}>
            <div className={styles.item}>
                <img src={search_mark} id={styles["search-mark"]}/>
                <img src={star_big} id={styles["star_big"]} className={styles["item"]}/>
                <img src={star_small} id={styles["star_small"]} className={styles["item"]}/>
            </div>

            <div className={styles.item} onClick={ () => { invokeSummarize();} }>
                <p id={styles.p}>
                    Start Searching
                </p>
            </div>
        </div>
    );
}

const Search = () => {
    const navigate = useNavigate();
    const summarizePrivacy = async (url: string) => {
        axios({
            method: 'GET',
            url: BACKEND_PRIVACY_URL,
            params: {
                url: url
            }
        })
        .then((res) => {
            if (res.data){
                console.log(res.data);
                navigate("/result", {
                    state: { data: res.data, url: url },
                });
            }
            else{
                navigate("/error");
            }
        })
        .catch((err) => {
            navigate("/error");
            console.error(err);
        });
    }
    
    const [url, setUrl] = useState("");

    if (url) {
        summarizePrivacy(url);
    }

    return (
    <>
        <Header/>
        { url ? <Loading /> : <SearchButton setUrl={setUrl}/> }
    </>
    );
}

export default Search;