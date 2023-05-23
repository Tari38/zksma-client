import { Card, CardGroup, CardImg } from "react-bootstrap";
import LilDragons from "../assets/logos/dragonlogo.png";
import MiniNinjas from "../assets/logos/mininjalogo.png";
import JuniorMA from "../assets/logos/kidlogo.png";
import TeenMA from "../assets/logos/footer-logo.png";
import "./css/Locations.css";
import ScheduleBase from "../components/schedule/kids/ScheduleBase";
import LocationMaps from "../components/schedule/maps/LocationMaps";


export default function KidsClasses() {
    return (
        <>
        <section>
            <h1>Childrens' Classes</h1>
            <CardGroup className="classes-card-group">
                <Card id="card-dragon">
                    <Card.Header className="class-card-header">Little Dragons</Card.Header>
                    <CardImg className="card-logo" src={LilDragons}></CardImg>
                    <Card.Footer className="class-card-subtitle">3 - 4 year olds</Card.Footer>
                </Card>
                
                <Card id="card-mini">
                <Card.Header className="class-card-header">Mini Ninjas</Card.Header>
                    <CardImg className="card-logo" src={MiniNinjas}></CardImg>
                    <Card.Footer className="class-card-subtitle">5 - 7 year olds</Card.Footer>
                </Card>
                <Card id="card-junior">
                <Card.Header className="class-card-header">Junior MA</Card.Header>
                    <CardImg className="card-logo" src={JuniorMA}></CardImg>
                    <Card.Footer className="class-card-subtitle">8 - 11 year olds</Card.Footer>
                </Card>
                <Card id="card-teen">
                <Card.Header className="class-card-header">Teen MA</Card.Header>
                    <CardImg className="card-logo" src={TeenMA}></CardImg>
                    <Card.Footer className="class-card-subtitle">12 - 17 year olds</Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup className="classes-card-group">
                <Card id="card-sen">
                <Card.Header className="class-card-header">S.E.N MA</Card.Header>
                    <Card.Body>
                        <CardImg className="card-logo" src={TeenMA}></CardImg>
                        <Card.Text className="card-text">It’s no secret that a martial arts program is one of the best extracurricular activities a child can participate in. For children with special educational needs the benefits are invaluable because of the inherit structure and discipline that ZKS MA bring to a child’s daily life.</Card.Text>
                    </Card.Body>
                <Card.Footer className="class-card-subtitle">Special Educational Needs</Card.Footer>
                </Card>
                <Card id="card-homeed">
                <Card.Header className="class-card-header">Home Ed MA</Card.Header>
                    <Card.Body>
                        <CardImg className="card-logo" src={TeenMA}></CardImg>
                        <Card.Text className="card-text">Our class for home educated children is a great place to socialise and meet other children. We have noticed that some parents take children out of main stream education due to childhood anxiety. ZKS MA Home Ed has been a great vehicle to deal with their anxiety and plus they become great friends in class.</Card.Text>
                    </Card.Body>
                    <Card.Footer className="class-card-subtitle">Home Schooled Children</Card.Footer>
                </Card>
                <Card id="card-schools">
                    <Card.Header className="class-card-header">Schools MA</Card.Header>
                    <Card.Body>
                        <CardImg className="card-logo" src={TeenMA}></CardImg>
                        <Card.Text className="card-text">We have been running classes at schools in and around Aylesbury for a number of years now. We use a format that is effective to run a 45 minute class for just the school pupils.</Card.Text>  
                    </Card.Body>
                    <Card.Footer className="class-card-subtitle">Before and After School Clubs</Card.Footer>              
                </Card>
            </CardGroup>
            <br />
        </section>

        <br /> 

        <section>            
            <ScheduleBase />            
        </section>
        
        <br />

        <section id="location-maps">
            <h1>Class Locations</h1>
                <LocationMaps />  
        </section>   
        
        </>       
    )
}