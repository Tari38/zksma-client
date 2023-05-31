import "../css/selectedVenue.css";
import { useState } from "react";
import { venueData } from "../data-source";

const SelectedVenue = () => {
    const [selectedVenue, setSelectedVenue] = useState('');
    
    return (
        <>        
        <div className="selector-wrapper">           
            <div className="schedule-container">
                <h1 className="timetable-h1">{selectedVenue} Timetable</h1>
                    <select id="venue-selector" value={selectedVenue} onChange={e => setSelectedVenue(e.target.value)} >
                        {venueData.map((data, key) => {
                            if (!data.venueID) return <option defaultValue={null} hidden >Select a Venue</option>;
                                return (
                                    <option key={data.shortcode} value={data.name}>{data.name}</option>
                                        )
                        })}
                    </select>                    
            </div>    
        </div>  
    </> 
    ) 
}

export default SelectedVenue;
