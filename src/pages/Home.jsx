import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import "./pages.css";
import "./css/Home.css";
import FreeTrialModal from "../components/modals/Free_Trial";
import Contact from "./Contact";


export default function Home() {
    const [modalShowFreeTrial, setModalShowFreeTrial] = React.useState(false);
    return (
        <>
        <main>
            <section id="cta">
                <Row id="hero">
                    <Col className="hero-col">
                        <Button className="free-trial-btn" onClick={() => setModalShowFreeTrial(true)}>Book a Free Trial</Button>
                    </Col>
                    <Col className="hero-col">
                        <Button className="members-btn" target="__blank" href="https://www.smallshout.co.uk/members/memberslogon.aspx?oid=1456145">Go To Member Area</Button> 
                    </Col>
                </Row>
            </section>

            <section id="classes" className="parallax">
                <Row className="classes-row">
                    <div className="classes-heading-container">
                        <h1 className="classes-heading">Class Timetables</h1>
                    </div>
                    <br />
                    <Button className="classes-btn" href="/kidsclasses">
                        Childrens' Classes
                    </Button>
                    <Button className="classes-btn" href="/adultsclasses">
                        Adults' Classes
                    </Button>
                </Row>              
            </section>
            
            <section id="contact">
                <Contact />
            </section>
                <div className="venue-heading">
                    <h1>Find Your Local Dojo</h1>
                </div>
            <section id="venues">                
                    <Col className="venue-col">
                        <Card id="bucks">
                            <button className="bucks-btn" href="#venues" >Buckinghamshire</button>
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
        </main>
        
        <FreeTrialModal
            show={modalShowFreeTrial}
            onHide={() => setModalShowFreeTrial(false)}
        />
      </>
    )
}