import { Card } from "react-bootstrap";
import { groupEventsData, groupData } from "./data-source";
import { groupData, columnData } from "../schedule/data-source";

const EventCard = ({ columnID,  groupName, details, startTime, endTime}) => {    
    
        if (!groupEventsData) return null; 
        return (
        <div {...columnData.index}>
            <Card {...columnID}>
                <h5>{groupData.groupName}</h5>
                <td>{groupName}
                {" "}
                {details}
                {" "}
                {startTime}
                <span className="timeslot-delimiter">
                    {" "}
                       -{" "}
                </span>
                {" "}
                {endTime}
            </td>
            </Card>
        </div>
    )
}

export default EventCard;