import NavBar from "../navigation/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./css/Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="header-bar-top"></div>
            <NavBar />
            <div className="contact-bar">
                <FontAwesomeIcon 
                    icon={faPhone} 
                    size="lg" 
                    style={{color: "#ffffff",}} />
                <p> 
                    <a className="header-contact-link" href={"tel:01296392630"}>
                        01296 392630
                    </a>
                </p>
                <FontAwesomeIcon 
                    icon={faEnvelope} 
                    size="lg" 
                    style={{color: "#ffffff",}} />
                <p> 
                    <a className="header-contact-link" href={"mailto: info@zksma.co.uk"}>
                        info@zksma.co.uk
                    </a>
                </p>
            </div>
        </div>
    )
}