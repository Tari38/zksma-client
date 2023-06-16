import "./css/AdultsClassesCards.css";
import { HavocGrappling, ScorpionMuayThai, ZKSNewLogo } from "../../assets";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export const HavocCard = () => {
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/about")
    }
    return (
        <Card id="card-havoc">
            <Card.Header id="class-card-header">Havoc Grappling BJJ</Card.Header>
            <Card.Img id="class-card-logo" src={HavocGrappling}></Card.Img>
            <Card.Footer className="class-card-footer">
                <Button className="class-card-button" onClick={handleClick}>Find Out More</Button>
            </Card.Footer>
        </Card>
    )
}

export const TaijutsuCard = () => {
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/about")
    }
    return (
        <Card id="card-taijutsu">
            <Card.Header id="class-card-header">Zen Kyo Shin Taijutsu</Card.Header>
            <Card.Img id="class-card-logo" src={ZKSNewLogo}></Card.Img>
            <Card.Footer className="class-card-footer">
                <Button className="class-card-button" onClick={handleClick}>Find Out More</Button>
            </Card.Footer>
        </Card>
    )
}

export const ScorpionCard = () => {
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/about")
    }
    return (
        <Card id="card-scorpion">
            <Card.Header id="class-card-header">Scorpion Muay Thai</Card.Header>
            <Card.Img id="class-card-logo" src={ScorpionMuayThai}></Card.Img>
            <Card.Footer className="class-card-footer">
                <Button className="class-card-button" onClick={handleClick}>Find Out More</Button>
            </Card.Footer>
        </Card>
    )
}

