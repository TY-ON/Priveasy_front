import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "../components/Header";

import styles from "../styles/ErrorPage.module.css"

import warning_mark from "../assets/warning.svg"


const ErrorPage = () => {

    return (
    <>
        <Header/>
        <div id={styles.content}>
            <div className={styles.item}>
                <img src={warning_mark} id={styles["warning-mark"]}/>
                </div>

            <div className={styles.item}>
                <h2 id={styles["warning-text"]}>
                    개인정보 처리방침을 찾을 수 없습니다.
                </h2>
            </div>
        </div>
    </>
    );
}

export default ErrorPage;