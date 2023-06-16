import "./css/AboutCards.css";
import { Card } from "react-bootstrap";
import { ZKSLogo, MAforAllLogo, SilhouetteBG, BenefitsBG } from "../../assets";

export const AboutCard1 = () => {
    return (
        <Card id="about" className="about-card"> 
            <Card.Img src={ZKSLogo} className="card-group-img"></Card.Img>                
                <Card.Header className="about-card-header">Who Are ZKS Martial Arts?</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            We are an award winning martial arts group based in and around Bucks and Herts, where we run classes at multiple locations.
                        </Card.Text>
                    </Card.Body>                    
        </Card>
    )
}

export const AboutCard2 = () => {
    return (
        <Card id="groups" className="about-card">   
            <Card.Img src={MAforAllLogo} className="card-group-img"></Card.Img>                     
                <Card.Header className="about-card-header">Who Do We Teach?</Card.Header>
                    <Card.Body>
                        Classes are available for children between 3 and 16 years of age. <br />
                        We also hold classes for adults, from 17 years+.
                    </Card.Body>                    
        </Card>
    )
}

export const AboutCard3 = () => {
    return (
        <Card id="kids-classes" className="about-card">  
            <Card.Img src={SilhouetteBG} className="card-group-img"></Card.Img>                
                <Card.Header className="about-card-header">What Styles Do We Teach?</Card.Header>
                    <Card.Body>
                        We offer over 55 martial arts classes a week which include aspects of Karate, kick-boxing, Taijutsu and Jiujitsu.
                    </Card.Body>                        
        </Card>
    )
}

export const AboutCard4 = () => {
    return (
        <Card id="benefits" className="about-card">     
            <Card.Img src={BenefitsBG} className="card-group-img"></Card.Img>               
                <Card.Header className="about-card-header">What Are The Benefits?</Card.Header>
                    <Card.Body>
                        People sign up to martial arts for different reasons: whether it's learning self-defence or just to get fit! Whatever your reason, we are open to all.
                    </Card.Body>                        
        </Card>
    )
}