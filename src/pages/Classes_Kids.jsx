import { CardGroup } from "react-bootstrap";
import { DragonsCard, JuniorsMACard, MiniNinjasCard, TeensMACard, SENMACard, HomeEdMACard, SchoolsMACard } from "../components/cards/KidsClassesCards";
import { SelectedVenue } from "../components/schedule/kids/SelectedVenue";
import InterestedCard from "../components/cards/InterestedCard";
import "./css/Locations.css";


export default function KidsClasses() {
    return (
        <>
        <section id="kids-classes-card-groups">
            <br />
                <h1>Childrens' Classes</h1>
            <br />
            <CardGroup className="classes-card-group">
                <DragonsCard />    
                <MiniNinjasCard />
                <JuniorsMACard />
                <TeensMACard />                
            </CardGroup>
            <CardGroup className="classes-card-group">
                <SENMACard />
                <HomeEdMACard />
                <SchoolsMACard />             
            </CardGroup>
            <br />
        </section>
        <section id="kids-schedules">            
            <SelectedVenue />            
        </section>
        <section id="free-trial-promo">
            <InterestedCard />
        </section>
        </>       
    )
}