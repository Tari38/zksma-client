import { Card, CardGroup, Row, Col } from "react-bootstrap";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import footerLogo from "../../assets/logos/footer-logo.png";
import "./css/Footer.css";

export default function Footer() {
    return (

    <div className="footer">
        <div className="footer-bar-top"></div>
            {/* <Col className="info">                
                <p>ZKS Martial arts classes can be found in various locations and we welcome anyone that wishes to try us out! We have Martial arts classes in Aylesbury, Haddenham, Hemel Hempstead, Long Marston, Princes Risborough, Watford, Wendover, Weston Turville and Wingrave.</p>
            </Col>
            <hr /> */}
            <CardGroup className="footer-card-group">
                <Row className="brand-row">
                    <Card className="footer-card">
                        <Col className="address">
                            <Card.Header className="card-header">Head Office</Card.Header>
                                <p>40 Walton Place<br />
                                    Weston Turville<br /> Aylesbury<br />
                                    HP22 5RD 
                                </p>
                        </Col>
                    </Card>
                    <Card className="footer-card">
                        <Card.Header className="card-header">Social</Card.Header>
                        <div className="social">
                                                   
                                <Col className="social-icon-col">
                                    <a href="https://www.facebook.com/zksmartial.arts">
                                        <FontAwesomeIcon className="brand-icon" icon={faFacebook} style={{color: "#ffffff",}} />
                                    </a>
                                </Col>
                                <Col className="social-icon-col">
                                    <a href="https://www.instagram.com/zks_m_a/">
                                        <FontAwesomeIcon className="brand-icon" icon={faInstagram} style={{color: "#ffffff",}} />
                                    </a>
                                </Col>
                                <Col className="social-icon-col"> 
                                    <a href="https://twitter.com/zksma">
                                        <FontAwesomeIcon className="brand-icon" icon={faTwitter} style={{color: "#ffffff",}} />
                                    </a>
                                </Col>                              
                        </div>
                    </Card>
                    {/* <Card className="footer-card">
                        <Col className="contact">
                            <h3>Contact Us</h3>
                            <a href="tel:01296 392630">01296 392630</a><br />
                            <a href="mailto:info@zksma.co.uk">info@zksma.co.uk</a>                                
                        </Col>
                    </Card> */}
                </Row>       
            </CardGroup>
         
        <Row className="bottom-row">
            <Col className="footer-logo"> 
                <img src={footerLogo} alt="footer zks logo" />
            </Col>
            <Col className="copyright">&copy; 2023 ZKS MA | Built by <a href="https://www.sdwebdevelopment.co.uk/" target="__blank">SDWebDevelopment</a> | Powered by  
                <a title="SmallShout" href="http://www.smallshout.co.uk/"> SmallShout</a>
            </Col>   
        </Row>   
        <div className="contact-bar">
            <p>
                <FontAwesomeIcon 
                icon={faPhone} 
                size="lg" 
                style={{color: "#ffffff",}} /> : 
                <a className="contact-link" href={"tel:01296392630"}>
                    01296 392630
                </a>
            </p>
            <p>
                <FontAwesomeIcon 
                icon={faEnvelope} 
                size="lg" 
                style={{color: "#ffffff",}} /> : 
                <a className="contact-link" href={"mailto: info@zksma.co.uk"}>
                    info@zksma.co.uk
                </a>
            </p>
        </div>
    </div>
    )
}