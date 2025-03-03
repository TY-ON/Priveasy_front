import { Link } from "react-router-dom";

import '../styles/Header.css'
import star from '../assets/star1.svg' 
import home from '../assets/home.svg'
import star_big from "../assets/star2.svg"
import star_small from "../assets/star3.svg"

export default function Header() {
    return (
        <div id="header">
            <h1 className="item">Priveasy</h1>
            <img src={star} className="item"/>
            <div className="item">
                <div id="help__wrap" className="item">
                    <div id="help__box">?</div>
                    <div id="help__tooltip">
                        <div id="help__tooltip__wrapper">
                            <div id="help__tooltip__icon">
                                <img src={star_big} id="star_big"/>
                                <img src={star_small} id="star_small"/>
                            </div>
                            <div id="help__tooltip__text">
                                <h2>Welcome to Priveasy!</h2>

                                <h3>
                                    원하는 사이트에 접속한 다음에<br/>
                                    start search 버튼을 누르세요.<br/>
                                    여러분의 간편한 개인정보보호 생활을 응원합니다.
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/search" className="item">
                    <div className="home">
                        <img src={home} id="home"/>
                    </div>
                </Link>
            </div>
        </div>
    );
};
    