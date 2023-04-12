import NavBar from "../navigation/NavBar";
import "./css/Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="header-bar-top"></div>
            <NavBar />
            <div className="contact-bar">
                <p>Tel: 01296 392630</p>
                <p>Email: info@zksma.co.uk</p>
            </div>
        </div>
    )
}