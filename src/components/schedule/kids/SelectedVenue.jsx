import "../css/selectedVenue.css";

import { useState } from "react";
import { venueData, zksmahqData } from "../data-source";


const SelectedVenue = ({rowIndex, details, groupName, startTime, endTime}) => {
    const [selectedVenue, setSelectedVenue] = useState([]);
    
    if (selectedVenue === "zksma_hq") {
        return <tbody {...zksmahqData}>
                    <tr {...rowIndex}>
                        <td>
                            <h5>{groupName}</h5>
                            <div>
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
                            </div>
                        </td>
                    </tr>
        </tbody>
    }
    return (
        <>
        
        <div className="selector-wrapper">           

               <div className="schedule-container">
               <h1 className="timetable-h1">{selectedVenue} Timetable</h1>
                    <select className="selector" value={selectedVenue} onChange={e => setSelectedVenue(e.target.value)} >
                    {venueData.map((data) => {
                        if (!data.venueID) return <option defaultValue={null} hidden >Select a Venue</option>;
                         return (
                            <>
                            <option id="zksma_hq" value="Aylesbury HQ">Aylesbury HQ</option>
                            <option id="zksma_hq" value="Aylesbury HQ">Aylesbury HQ</option>
                            <option id="zksma_hq" value="Aylesbury HQ">Aylesbury HQ</option>
                            <option id="zksma_hq" value="Aylesbury HQ">Aylesbury HQ</option>
                            <option id="zksma_hq" value="Aylesbury HQ">Aylesbury HQ</option>
                            
                        
                        </>
                        )
                    })}
                    </select>                    
              </div>    
        </div> 

        
        {/* <tbody setSelectedVenue={selectedVenue}></tbody> */}
    </> 
    ) 
}

export default SelectedVenue;
