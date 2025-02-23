import '../styles/Header.css'
import star from '../assets/star1.svg' 

export default function Header() {
    return (
        <div id="header">
            <h1 className="item">Priveasy</h1>
            <img src={star} className="item"/>
            <div className="item">
                <img src="../assets/cross-mark.svg" id="cross-mark" className="item"/>
                <div id="help" className="item"></div>
            </div>
        </div>
    );
}; 
    