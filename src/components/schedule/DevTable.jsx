import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import Table from "react-bootstrap/Table";

// import styles from "./DataTable.module.scss";
import "./kids/schedule.css";
import "./css/schedule_base.css";
import {rowData, columnData, venueData} from "./data/data-source.js";
import {eventsData} from "./data/data-source";

const ScheduleTable = () => {
    const [selectedVenue, setSelectedVenue] = useState('');
    
   return (
    <>

<div className="selector-wrapper">           

<div className="schedule-container">

    <h1 className="timetable-h1" key={selectedVenue}>{selectedVenue} Timetable</h1>

        <select id="venue-selector" value={selectedVenue} onChange={e => setSelectedVenue(e.target.value)} >
            {venueData.map((data, shortcode) => {
                if (!data.venueID) return <option defaultValue={null} hidden >Select a Venue</option>;
                    return (
                        <option key={shortcode} value={data.name}>{data.name}</option>
                            )
            })}
            </select>                    
    </div>    
</div>  

      <Table id="schedule-table" className="zks-shortcode-table zks-theme-mode"  data-hide_empty_row="1">
        <thead id="schedule_base_head"  >
            <tr className="zks-shortcode-row zks-shortcode-row-th">
        {columnData.map((data, name) => { 
            if (!data.column_id) 
            return  <th><FontAwesomeIcon icon={faCalendarDays} style={{color: "#ffffff"}} />
                    </th>                  
                    return (
                        <th key={name}>{data.name}</th>                                 
                        )
                    })}
                    </tr>
        {rowData.map((data, rowIndex) => {
                if (!data) return <tr />
                    return (
                        <tr className="zks-shortcode-row">
                            <td className="zks-shortcode-hours" colSpan="1" key={rowIndex}>{data.firstCell}</td>
                            <td className="zks-shortcode-event zks-event-vertical-default"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default"></td>
                        </tr>
                    )
                })}                              
        </thead> 
        <tbody>  
            
            {rowData.map((data, rowIndex) => {
                if (!rowData.rowIndex) return null;
                    return (
                    <tr className="zks-shortcode-row" key={rowIndex} >
                        {rowData.map((firstCell) => {
                            if(!rowData.firstCell) return null;
                            return (
                                <tr key={rowIndex}>
                                    <td className="zks-shortcode-hours" colSpan="1" key={firstCell}></td>
                                </tr>
                            )})}   
                        
                            {eventsData.map((data, id) =>
                            <td className="zks-inner-event-content" key={id}>
                                
                                    <h5>{data.groupName}</h5>
                                    {" "}
                                    <p>{data.details}</p>
                                    {" "}
                                    <p>{data.startTime}</p>
                                    <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                    </span>
                                    {" "}
                                    <p>{data.endTime}</p>
                                
                            </td>
                            )}
                        
                    </tr>
            )})}
        </tbody>
      </Table>      
    </>
  );
};

export default ScheduleTable;