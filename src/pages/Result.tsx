import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Header from "../components/Header";

import styles from "../styles/Result.module.css"

import search_mark from "../assets/search-mark.png"
import commission_img from "../assets/result/commission.png"
import subject_img from "../assets/result/subject.png"
import object_img from "../assets/result/object.png"
import deletion_img from "../assets/result/deletion.png"
import term_img from "../assets/result/term.png"
import third_party_img from "../assets/result/third_party.png"

const Result = () => {
    const location = useLocation();
    const { data } = location.state;

    if (data["개인정보 처리 목적"]) {

    }

    return (
    <>
        <Header/>
        <div id={styles.content}>
            <div className={styles.title}>
                <img src={search_mark} id={styles["search-mark"]}/>
                <h2>요약 결과</h2>
                <h2 className={styles.link}>www.link.com</h2>
            </div>
            <div className={styles["summary-grid"]}>
                <SummaryItem img={object_img} subject="개인정보 처리목적" data="내용"/>
                <SummaryItem img={object_img} subject="개인정보 처리목적" data="내용"/>
                <SummaryItem img={object_img} subject="개인정보 처리목적" data="내용"/>
                <SummaryItem img={object_img} subject="개인정보 처리목적" data="내용"/>
                <SummaryItem img={object_img} subject="개인정보 처리목적" data="내용"/>
                <SummaryItem img={object_img} subject="개인정보 처리목적" data="내용"/>
            </div>
            <p className={styles.data}>{ data }</p>
            <Link to="/">go to home</Link>
        </div>
    </>
    );
}

type SummaryItemProps = {
    img: string
    subject: string
    data: string
}

const SummaryItem = ({ img, subject, data }: SummaryItemProps) => {

    return (
        <div className={styles["summary-item"]}>
            <img src={img} className={styles["summary-item__img"]}/>
            <div className={styles["summary-item__wrapper"]}>
                <h3>{ subject }</h3>
                <p> { data } </p>
            </div>
        </div>
    );
}

export default Result;