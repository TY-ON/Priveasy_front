import React from "react";

import styles from "../styles/Loading.module.css"

import loading_mark from "../assets/loading.png"

const Loading = () => {

    return (
    <>
        <div id={styles.content}>
            <div className={styles.item}>
                <img src={loading_mark} id={styles["loading-mark"]}/>
            </div>

            <div className={styles.item}>
                <h1>
                    Loading.
                </h1>
            </div>
        </div>
    </>
    );
}

export default Loading;