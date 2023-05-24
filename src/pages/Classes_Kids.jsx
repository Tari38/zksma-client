import { CardGroup } from "react-bootstrap";
import { DragonsCard, JuniorsMACard, MiniNinjasCard, TeensMACard, SENMACard, HomeEdMACard, SchoolsMACard } from "../components/cards/KidsClassesCards";

import "./css/Locations.css";
import ScheduleBase from "../components/schedule/kids/ScheduleBase";
import LocationMaps from "../components/schedule/maps/LocationMaps";


export default function KidsClasses() {
    return (
        <>
        <section id="kids-classes-card-groups">
            <h1>Childrens' Classes</h1>
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

        <br /> 

        <section id="kids-schedules">            
            <ScheduleBase />            
        </section>
        
        <br />

        <section id="venues">
            <h1>Class Locations</h1>
                <LocationMaps />  
        </section>   
        
        </>       
    )
}