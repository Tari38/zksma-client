import { Card, CardGroup, CardImg } from "react-bootstrap";
import LilDragons from "../assets/logos/dragonlogo.png";
import MiniNinjas from "../assets/logos/mininjalogo.png";
import JuniorMA from "../assets/logos/kidlogo.png";
import TeenMA from "../assets/logos/footer-logo.png";
import KidsScheduler from "../components/schedule/kids/Class_Schedule";

export default function KidsClasses() {
    return (
        <div>
            <h1>Childrens' Classes</h1>
            <CardGroup>
                <Card id="card-dragon">
                    <Card.Header>Lil Dragons</Card.Header>
                    <CardImg className="card-logo" src={LilDragons}></CardImg>
                    <Card.Footer>3 - 4 year olds</Card.Footer>
                </Card>
                
                <Card id="card-mini">
                <Card.Header>Mini Ninjas</Card.Header>
                    <CardImg className="card-logo" src={MiniNinjas}></CardImg>
                    <Card.Footer>5 - 7 year olds</Card.Footer>
                </Card>
                <Card id="card-junior">
                <Card.Header>Junior MA</Card.Header>
                    <CardImg className="card-logo" src={JuniorMA}></CardImg>
                    <Card.Footer>8 - 11 year olds</Card.Footer>
                </Card>
                <Card id="card-teen">
                <Card.Header>Teen MA</Card.Header>
                    <CardImg className="card-logo" src={TeenMA}></CardImg>
                    <Card.Footer>12 - 17 year olds</Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card>
                <Card.Header>S.E.N MA</Card.Header>
                    <CardImg className="card-logo" src={TeenMA}></CardImg>
                    <Card.Subtitle className="card-subtitle">Special Educational Needs</Card.Subtitle>
                    <Card.Text className="card-text">It’s no secret that a martial arts program is one of the best extracurricular activities a child can participate in. For children with special educational needs the benefits are invaluable because of the inherit structure and discipline that ZKS MA bring to a child’s daily life.</Card.Text>
                    
                </Card>
                <Card>
                    <Card.Header>Home Ed MA</Card.Header>
                    <CardImg className="card-logo" src={TeenMA}></CardImg>
                    <Card.Subtitle className="card-subtitle">Home Schooled Children</Card.Subtitle>
                    <Card.Text className="card-text">Our class for home educated children is a great place to socialise and meet other children. We have noticed that some parents take children out of main stream education due to childhood anxiety. ZKS MA Home Ed has been a great vehicle to deal with their anxiety and plus they become great friends in class.</Card.Text>
                    
                </Card>
                <Card>
                    <Card.Header>Schools MA</Card.Header>
                    <CardImg className="card-logo" src={TeenMA}></CardImg>
                    <Card.Subtitle className="card-subtitle">Before and After School Clubs</Card.Subtitle>
                    <Card.Text className="card-text">We have been running classes at schools in and around Aylesbury for a number of years now. We use a format that is effective to run a 45 minute class for just the school pupils.</Card.Text>                
                </Card>
            </CardGroup>
            <br />

            <KidsScheduler />
            </div>
    )
}