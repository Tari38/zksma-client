import { Col, Row } from "react-bootstrap";
import "./pages.css";
import "./css/Home.css";
import Contact from "./Contact";
import { MemberAreaButton, KidsClassesButton, AdultsClassesButton } from "../components/buttons/Button";
import FreeTrialModal from "../components/modals/FreeTrialModal";
import { BucksCard, HertsCard } from "../components/cards/Card";
import InterestedCard from "../components/cards/InterestedCard";


export default function Home() {
    
    return (
        <>
        <main>
            <section id="cta">
                <Row className="home-hero">
                    <Col id="home-hero-col">
                        <FreeTrialModal />
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
            <section id="free-trial-promo">
            <InterestedCard />
        </section>
        </main>
        
        
      </>
    )
}