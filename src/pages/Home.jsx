import React from "react";
import { Col, Row } from "react-bootstrap";
import "./pages.css";
import "./css/Home.css";
import FreeTrialModal from "../components/modals/Free_Trial";
import Contact from "./Contact";
import { FreeTrialButton, MemberAreaButton, KidsClassesButton, AdultsClassesButton } from "../components/buttons/Button";
import { BucksCard, HertsCard } from "../components/cards/Card";


export default function Home() {
    const [modalShowFreeTrial, setModalShowFreeTrial] = React.useState(false);
    return (
        <>
        <main>
            <section id="cta">
                <Row className="home-hero">
                    <Col id="home-hero-col">
                        <FreeTrialButton />
                    </Col>
                    <Col id="home-hero-col">
                        <MemberAreaButton /> 
                    </Col>
                </Row>
            </section>

            <section id="classes" className="parallax">
                <Row className="classes-row">
                    <div className="classes-heading-container">
                        <h1 className="classes-heading">Class Timetables</h1>
                    </div>
                    <br />
                    <KidsClassesButton />
                    <AdultsClassesButton />
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
                        <BucksCard />
                    </Col>
                    <Col className="venue-col">
                        <HertsCard />
                    </Col>                
            </section>
        </main>
        
        <FreeTrialModal
            show={modalShowFreeTrial}
            onHide={() => setModalShowFreeTrial(false)}
        />
      </>
    )
}