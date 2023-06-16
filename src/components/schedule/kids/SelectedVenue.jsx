import { useState } from "react";
import { ScheduleHQ, ScheduleBPCC, ScheduleFLC, SchedulePRPS, ScheduleSMSH, ScheduleWCC, ScheduleNWJS, ScheduleHCCS } from "./index";
// import MobileTimetable from "../MobileTimetable";
import "../css/selectedVenue.css";

export const SelectedVenue = () => {
    const [selectedVenue, setSelectedVenue] = useState(['']);

    const handleChange = (e) => {
        setSelectedVenue(e.target.value);
    };
    
    let timetable;
    switch (selectedVenue) {
        case "Aylesbury HQ":
            timetable = <ScheduleHQ />;         
            break;
        case "Buckingham Park Community Center":
            timetable = <ScheduleBPCC />;
            break;
        case "Fairford Leys Center":
            timetable = <ScheduleFLC />;
            break;
        // case "Long Marston School":
        //     timetable = <ScheduleLMS />;
        //     break;
        case "Halton Community Combined School":
            timetable = <ScheduleHCCS />;
            break;
        case "Nascot Wood Junior School":
            timetable = <ScheduleNWJS />;
            break;
        case "St. Mary's CE School, Haddenham":
            timetable = <ScheduleSMSH />;
            break;
        case "Princes Risborough Primary School":
            timetable = <SchedulePRPS />;
            break;
        case "Wingrave Community Center":
            timetable = <ScheduleWCC />;
            break;
        default:
            timetable = null;
    }  
    return (
        <>        
        <div className="selector-wrapper">           
            <div className="schedule-container">             
                <h1 className="timetable-h1">{selectedVenue} Timetable</h1>                
                <select id="venue-selector" value={selectedVenue} onChange={handleChange} >
                    <option defaultValue={"Select a Venue"} hidden >Select a Venue</option>
                    <option value="Aylesbury HQ">Aylesbury HQ</option>
                    <option value="Buckingham Park Community Center">Buckingham Park Community Center</option>
                    <option value="Fairford Leys Center">Fairford Leys Center</option>
                    <option value="Halton Community Combined School">Halton Community Combined School</option>
                    {/* <option value="Long Marston School">Long Marston School</option> */}
                    <option value="Nascot Wood Junior School">Nascot Wood Junior School, Watford</option>
                    <option value="Princes Risborough Primary School">Princes Risborough Primary School</option>
                    <option value="St. Mary's CE School, Haddenham">St. Mary's CE School, Haddenham</option>
                    <option value="Wingrave Community Center">Wingrave Community Center</option>
                </select>               
            </div> 
        </div>   
        <div id="chosen-venue">
            {timetable}            
        </div>          
    </>     
    ) 
}
