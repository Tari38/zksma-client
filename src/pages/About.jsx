import { Card, CardGroup, Col } from "react-bootstrap";
// import LogoWithText from "../assets/ZKS Martial Arts.png";
import ZKSLogo from "../assets/logos/zks.jpg";
import MAStyles from "../assets/backgrounds/silhouette-icons.png";
import MA4Kids from "../assets/logos/ma-for-kids.jpg";
import MABenefits from "../assets/backgrounds/benefits.jpg";
import MABucksVenues from "../components/cards/MA_Bucks";

export default function About() {
    return (
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
                    <Card id="kids-classes" className="landing-card">  
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
            <h2>Buckinghamshire Venues</h2>
            <MABucksVenues />
        </section>
    )
}