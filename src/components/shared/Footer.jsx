import { CardGroup, Row, Col } from "react-bootstrap";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterAddressCard, FooterSocialCard } from "../cards/FooterCards";
import { ToTopButton } from "../buttons/Button";
import footerLogo from "../../assets/logos/footer-logo.png";
import "./css/Footer.css";

export default function Footer() {
    return (
    <>
    <div className="footer">
        <div className="footer-bar-top"></div>
            
            <Row className="brand-row">
                <CardGroup className="footer-card-group">
                    <FooterAddressCard />
                    <FooterSocialCard />
            </CardGroup>
        </Row>       
        <div className="contact-bar">            
            <FontAwesomeIcon 
                icon={faPhone} 
                size="lg" 
                style={{color: "#ffffff",}} />
            <p> 
                <a className="contact-link" href={"tel:01296392630"}>
                    01296 392630
                </a>
            </p>
            
            <FontAwesomeIcon 
                icon={faEnvelope} 
                size="lg" 
                style={{color: "#ffffff",}} />
            <p> 
                <a className="contact-link" href={"mailto: info@zksma.co.uk"}>
                    info@zksma.co.uk
                </a>
            </p>
        </div>
    </div>
    <div className="footer-copyright-wrapper">     
        <Row className="bottom-row">
            <Col className="footer-logo-col"> 
                <img src={footerLogo} alt="footer zks logo" />
            </Col>
            <Col>
                <ToTopButton />     
            </Col>
            <Col className="footer-copyright-col">&copy; 2023 ZKS MA | Built by <a href="https://www.sdwebdevelopment.co.uk/" target="__blank">SDWebDevelopment</a> | Powered by  
                <a title="SmallShout" href="http://www.smallshout.co.uk/"> SmallShout</a>
            </Col>   
        </Row>   
    </div>
    </>
    )
}