import { Card, CardGroup, Row, Col } from "react-bootstrap";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import footerLogo from "../../assets/logos/footer-logo.png";
import "./css/Footer.css";

export default function Footer() {
    return (

    <div className="footer">
        <div className="footer-bar-top"></div>
            
            <Row className="brand-row">
                <CardGroup className="footer-card-group">
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
                            <Row>                      
                                <Col className="social-icon-col">
                                    <a href="https://www.facebook.com/zksmartial.arts" aria-label="facebook link">
                                        <i className="fa-brands fa-facebook" style={{"color": "#1077F0"}}></i>
                                    </a>
                                </Col>
                                <Col className="social-icon-col">
                                    <a href="https://www.instagram.com/zks_m_a/" aria-label="instagram link">
                                        <i className="fa-brands fa-instagram" style={{"color": "#FDD568"}}></i>
                                    </a>
                                </Col>
                                <Col className="social-icon-col"> 
                                    <a href="https://twitter.com/zksma" aria-label="twitter link">
                                        <i className="fa-brands fa-twitter" style={{"color": "#229AF0"}}></i>
                                    </a>
                                </Col> 
                            </Row>                              
                        </div>
                    </Card>
            </CardGroup>
        </Row>       
         
        <Row className="bottom-row">
            <Col className="footer-logo"> 
                <img src={footerLogo} alt="footer zks logo" />
            </Col>
            <Col className="copyright">&copy; 2023 ZKS MA | Built by <a href="https://www.sdwebdevelopment.co.uk/" target="__blank">SDWebDevelopment</a> | Powered by  
                <a title="SmallShout" href="http://www.smallshout.co.uk/"> SmallShout</a>
            </Col>   
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
    )
}