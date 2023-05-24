import "./schedule.css";
import "../css/schedule_base.css";
import { useMemo } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

import SelectedVenue from "./SelectedVenue";
import { columnData, groupData, rowData, zksmahqData, bpccData, flcData, lmsData, smshData, prpsData, wccData } from "../data-source";


export default function ScheduleBase() {
        
        const groupEventsData = useMemo(() => [zksmahqData, bpccData, flcData, lmsData, smshData, prpsData, wccData], []);
        
        
        return (
        <>
        <div className="zks-shortcode-wrapper zks-table-responsive ">
        <br />        

        <SelectedVenue  /> 

        {/* <div className="selector-wrapper">           

               <div className="schedule-container">
               <h1 className="timetable-h1">{selectedVenue} Timetable</h1>
                    <select id="selectedVenue" className="selector table-filter" value={selectedVenue} onChange={e => setSelectedVenue(e.target.value)} >
                    {venueData.map((data) => {
                        if (!data.venueID) return <option defaultValue={null} hidden >Select a Venue</option>;
                         return (
                            <>
                            <option id={data.shortcode} value={data.name}>{data.name}</option>
                        
                        </>
                        )
                    })}
                    </select>                    
              </div>    
        </div>  */}
        
        <table className="zks-shortcode-table zks-theme-mode"  data-hide_empty_row="1">      
            <thead id="schedule_base_head"> 
                
                            
                <tr className="zks-shortcode-row zks-shortcode-row-th">    
                    {columnData.map((data) => {
                           if(!data.column_id) 
                                return <th><FontAwesomeIcon icon={faCalendarDays} style={{color: "#ffffff",}} />
                                        </th>   
                                        return (
                                        <th>{data.name}</th>
                                        )
                                })}
                </tr>
            </thead>
                                          
            {rowData.map((data) => {
                if (!rowData) return <tr />
                    return (
                        <tr className="zks-shortcode-row" data-rowIndex={data.rowIndex}>
                            <td className="zks-shortcode-hours" colSpan="1">{data.firstCell}</td>
                        </tr>
                    )
                })}
                {rowData.map( row => {
                       return( <tbody 
                                className="table-grid">
                                {[groupData].map((data) => {
                                    if(!groupData) return <tr />
                                        return (
                                        <>                         <tr className="zks-shortcode-row-8" data-index="8">              
                                            <td className="zks-shortcode-event zks-event-vertical-default"  data-column_id={groupEventsData.column_id}>
                                                <h5>{data.name}</h5>
                                                {" "}
                                                <p>{data.details}</p>
                                                {" "}
                                                {groupEventsData.startTime}
                                                <span className="timeslot-delimiter">
                                                {" "}
                                                -{" "}
                                                </span>
                                                {" "}
                                                {groupEventsData.endTime}
                                        </td>
                                </tr>                        
                                        </>
                                        )}
                                )}
                        </tbody>
                         )
                        })}
                </table>                
                
        </div>
        </>     
        )
}           
                        
                           
                
                /* <tr className="zks-shortcode-row-8" data-index="8">
                    <td className="zks-shortcode-hours" colSpan="1">08:00 am</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45">
                            </td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45">
                            </td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-9" data-index="9">
                    <td className="zks-shortcode-hours" colSpan="1">09:00 am</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-10" data-index="10">
                    <td className="zks-shortcode-hours" colSpan="1">10:00 am</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-11" data-index="11">
                    <td className="zks-shortcode-hours" colSpan="1">11:00 am</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-12" data-index="12">
                    <td className="zks-shortcode-hours" colSpan="1">12:00 pm</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-13" data-index="13">
                    <td className="zks-shortcode-hours" colSpan="1">01:00 pm</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-14" data-index="14">
                    <td className="zks-shortcode-hours" colSpan="1">02:00 pm</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-15" data-index="15">
                    <td className="zks-shortcode-hours" colSpan="1">03:00 pm</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-16" data-index="16">
                    <td className="zks-shortcode-hours" colSpan="1">04:00 pm</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-17" data-index="17">
                    <td className="zks-shortcode-hours" colSpan="1">05:00 pm</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-18" data-index="18">
                    <td className="zks-shortcode-hours" colSpan="1">06:00 pm</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-19" data-index="19">
                    <td className="zks-shortcode-hours" colSpan="1">07:00 pm</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-20" data-index="20">
                    <td className="zks-shortcode-hours" colSpan="1">08:00 pm</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
                </tr>
                <tr className="zks-shortcode-row-21" data-index="21">
                    <td className="zks-shortcode-hours" colSpan="1">09:00 pm</td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="mon"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="tue"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="wed"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="thu"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="fri"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sat"
                            colSpan="1"
                            data-row_height="45"></td>
                    <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column_id="sun"
                            colSpan="1"
                            data-row_height="45"></td>
        </tr> */     

 
