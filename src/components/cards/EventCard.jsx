import { Card } from "react-bootstrap";
import { eventsData, groupData } from "../schedule/data/data-source";

let style = groupData.categoryColor;

export default function EventCard() {
    
    return (
        (eventsData.map((data, id) => {
            if(!data) return null;
            return (
                <Card style={style} key={id}>
                    <Card.Header>{data.groupName}</Card.Header>
                    <Card.Body>                        
                        <p>{data.startTime}</p>
                        <span className="timeslot-delimiter">
                        {" "}
                        -{" "}
                        </span>
                        {" "}
                        <p>{data.endTime}</p>
                    </Card.Body>                    
                </Card>
            )
        }))
    )
}