import { Card, Col, Row } from "react-bootstrap";
import "./css/FooterCards.css";

export const FooterAddressCard = () => {
    return (
        <Card id="footer-card">
            <Card.Header className="footer-card-header">
                Head Office
            </Card.Header>
                <Card.Body>
                    <p>40 Walton Place<br />
                    Weston Turville<br /> 
                    Aylesbury<br />
                    HP22 5RD 
                    </p>
                </Card.Body>                        
        </Card>
    )
}

export const FooterSocialCard = () => {
    return (
        <Card id="footer-card">
            <Card.Header className="footer-card-header">
                Social
            </Card.Header>
                <Card.Body className="social">
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
                </Card.Body>
            </Card>
    )
}