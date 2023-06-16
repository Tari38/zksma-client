import { Col, Row } from "react-bootstrap";
import { AboutCard1, AboutCard2, AboutCard3, AboutCard4 } from "../components/cards/AboutCards";
import InterestedCard from "../components/cards/InterestedCard";
import HavocGrappling from "./HavocGrappling";
import ScorpionMuayThai from "./ScorpionMuayThai";
import LocationMaps from "../components/schedule/maps/LocationMaps";
import "./css/About.css";

export default function About() {
    return (
        <>
        <div id="about-hero">
            <h1>About ZKS Martial Arts</h1>
        </div>
            <Row className="about-row">
                <Col className="card-group-col">
                    <AboutCard1 />
                </Col>
                <Col className="card-group-col">
                    <AboutCard2 />
                </Col>
            </Row>
            <Row className="about-row">
                <Col className="card-group-col">
                    <AboutCard3 />
                </Col>
                <Col className="card-group-col">
                    <AboutCard4 />
                </Col>
            </Row>
            <section id="bjj">
                <Row>
                    <HavocGrappling />
                </Row>
            </section>
            <section id="muay-thai">
                <Row>    
                   <ScorpionMuayThai />
                </Row>                  
            </section>
            <section id="location-maps">
                <LocationMaps />
            </section>
            <InterestedCard />    
        </>
    )
}