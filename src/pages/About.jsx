import { Col, Row } from "react-bootstrap";
import { AboutCard1, AboutCard2, AboutCard3, AboutCard4 } from "../components/cards/AboutCards";
import "./css/About.css";

export default function About() {
    return (
        <>
        <div id="about-hero">
            <h1>About ZKS Martial Arts</h1>
        </div>
            <Row class="about-row">
                <Col className="card-group-col">
                    <AboutCard1 />
                </Col>
                <Col className="card-group-col">
                    <AboutCard2 />
                </Col>
            </Row>
            <Row class="about-row">
                <Col className="card-group-col">
                    <AboutCard3 />
                </Col>
                <Col className="card-group-col">
                    <AboutCard4 />
                </Col>
            </Row>
        </>
    )
}