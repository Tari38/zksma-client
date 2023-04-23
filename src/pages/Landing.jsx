import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./pages.css";
import FreeTrialModal from "../components/modals/Free_Trial";
import { LandingCarousel } from "../components";
import ClassesKids from "../components/cards/Classes_Kids";
import ClassesAdults from "../components/cards/Classes_Adults";
import ContactForm from "../components/forms/Contact_Form";

export default function Landing() {
    const [modalShowFreeTrial, setModalShowFreeTrial] = React.useState(false);
    return (
        <>
        {/* <main> */}
            <section id="cta">
                <Row>
                    <Col className="hero-col">
                        <Button className="free-trial-btn" onClick={() => setModalShowFreeTrial(true)}>Book a Free Trial</Button>
                    </Col>
                    <Col className="hero-col">
                        <Button className="find-us-btn" target="__blank" href="https://www.smallshout.co.uk/members/memberslogon.aspx?oid=1456145">Members Area</Button> 
                    </Col>
                </Row>
            </section>

            <section id="hero" className="parallax">
                {/* <LandingCarousel />                 */}
                {/* get image from CMS */}
            </section>
            
            <section id="classes">
                <Row className="classes-row">
                    <ClassesKids />                
                    <ClassesAdults />
                </Row>
            </section>
            
            <section id="contact">
                <div className="contact-heading">
                    <h1>Get in Contact</h1>
                    <div className="contact-info">
                        <p>
                            <FontAwesomeIcon 
                            icon={faPhone} 
                            size="lg" 
                            style={{color: "#ffffff",}} /><br  />   
                            <a className="contact-link" href={"tel:01296392630"}>
                                01296 392630
                            </a>
                        </p>
                        <p>
                            <FontAwesomeIcon 
                            icon={faEnvelope} 
                            size="lg" 
                            style={{color: "#ffffff",}} /><br  />    
                            <a className="contact-link" href={"mailto: info@zksma.co.uk"}>
                                info@zksma.co.uk
                            </a>
                        </p>
                    </div>  
                    <br />
                    <ContactForm />
                </div>
            </section>
                <div className="venue-heading">
                    <h1>Find Your Local Dojo</h1>
                </div>
            <section id="venues">                
                    <Col className="venue-col">
                        <Card id="bucks">
                            <button className="bucks-btn"  >Buckinghamshire</button>
                        </Card>
                    </Col>
                    <Col className="venue-col">
                        <Card id="herts">
                            <button className="herts-btn" >Hertfordshire</button>
                        </Card>
                    </Col>                
            </section>
            {/* <section id="questions">
                <h1>Got Questions?</h1>
                <p>Try our FAQ's page! Our most common questions are answered there.</p>

                <h2>Still got Questions?</h2>
                <p>You can easily contact us via phone, email or filling out this quick form.</p>
            </section> */}
        {/* </main> */}
        
        <FreeTrialModal
            show={modalShowFreeTrial}
            onHide={() => setModalShowFreeTrial(false)}
        />
      </>
    )
}