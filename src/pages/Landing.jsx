import React from "react";
import { Button, Card, CardGroup, Col, Row } from "react-bootstrap";
import LogoWithText from "../assets/ZKS Martial Arts.png";
import ZKSLogo from "../assets/zks.jpg";
import MAStyles from "../assets/silhouette-icons.png";
import MA4Kids from "../assets/ma-for-kids.jpg";
import MABenefits from "../assets/benefits.jpg";
import BucksVenuesModal from "../components/modals/Venue_Bucks";
import HertsVenuesModal from "../components/modals/Venue_Herts";
import "./pages.css";
import FreeTrialModal from "../components/modals/Free_Trial";
import { LandingCarousel } from "../components";
import ClassesKids from "../components/cards/Classes_Kids";
import ClassesAdults from "../components/cards/Classes_Adults";

export default function Landing() {
    const [modalShowFreeTrial, setModalShowFreeTrial] = React.useState(false);
    const [modalShowBucks, setModalShowBucks] = React.useState(false);
    const [modalShowHerts, setModalShowHerts] = React.useState(false);
    return (
        <>
        <main>
            <section id="cta">
                <Row>
                    <Col className="hero-col">
                        <Button className="free-trial-btn" onClick={() => setModalShowFreeTrial(true)}>Book a Free Trial</Button>
                    </Col>
                    <Col className="hero-col">
                        <Button className="find-us-btn" href="#venues">Members Area</Button> 
                    </Col>
                </Row>
            </section>
            <section id="hero">
                <LandingCarousel />
                    {/* <Col className="hero-col">
                        <img className="logo-with-text" 
                        src={ LogoWithText } 
                        alt="main zks martial arts logo with text that reads 'for the whole family'">            
                        </img>
                    </Col> */}
                
            </section>
            <section id="classes">
                <Row className="classes-row">
                    <ClassesKids />                
                    <ClassesAdults />
                </Row>
            </section>
            <section>
            <CardGroup className="landing-card-group">
                <Col className="card-group-col">
                    <Card id="about" className="landing-card"> 
                    <Card.Img src={ZKSLogo} className="card-group-img"></Card.Img>                
                        <Card.Header className="card-header">Who Are ZKS Martial Arts?</Card.Header>
                            <Card.Body>
                                We are an award winning martial arts group that specialise in children's martial arts.
                            </Card.Body>                    
                    </Card>
                </Col>
                <Col className="card-group-col">
                    <Card id="groups" className="landing-card">   
                    <Card.Img src={MA4Kids} className="card-group-img"></Card.Img>                     
                        <Card.Header className="card-header">Who Do We Teach?</Card.Header>
                            <Card.Body>
                                Classes are available for children between 3 and 16 years of age.
                            </Card.Body>                    
                    </Card>
                </Col>
                <Col className="card-group-col">
                    <Card id="classes" className="landing-card">  
                    <Card.Img src={MAStyles} className="card-group-img"></Card.Img>                
                        <Card.Header className="card-header">What Styles Do We Teach?</Card.Header>
                            <Card.Body>
                                We offer over 55 martial arts classes a week which include aspects of Karate, kick-boxing and Jiu-jitsu.
                            </Card.Body>                        
                    </Card>
                </Col>
                <Col className="card-group-col">
                    <Card id="benefits" className="landing-card">     
                    <Card.Img src={MABenefits} className="card-group-img"></Card.Img>               
                        <Card.Header className="card-header">What Are The Benefits?</Card.Header>
                            <Card.Body>
                                People sign up to martial arts for different reasons: whether it's learning self-defence or just to get fit! Whatever your reason, we are open to all.
                            </Card.Body>                        
                    </Card>
                </Col>
            </CardGroup>
            </section>
                <div className="venue-heading">
                    <h1>Find Your Local Dojo</h1>
                </div>
            <section id="venues">                
                    <Col className="venue-col">
                        <Card id="bucks">
                            <button className="bucks-btn"  onClick={() => setModalShowBucks(true)}>Buckinghamshire</button>
                        </Card>
                    </Col>
                    <Col className="venue-col">
                        <Card id="herts">
                            <button className="herts-btn" onClick={() => setModalShowHerts(true)}>Hertfordshire</button>
                        </Card>
                    </Col>                
            </section>
            <section id="questions">
                <h1>Got Questions?</h1>
                <p>Try our FAQ's page! Our most common questions are answered there.</p>

                <h2>Still got Questions?</h2>
                <p>You can easily contact us via phone, email or filling out this quick form.</p>
            </section>
        </main>
        <BucksVenuesModal
        show={modalShowBucks}
        onHide={() => setModalShowBucks(false)}
        />
        <HertsVenuesModal
            show={modalShowHerts}
            onHide={() => setModalShowHerts(false)}
        />
        <FreeTrialModal
            show={modalShowFreeTrial}
            onHide={() => setModalShowFreeTrial(false)}
        />
      </>
    )
}