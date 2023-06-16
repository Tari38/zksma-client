import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLeftRight } from '@fortawesome/free-solid-svg-icons';
import { columnData } from "../data/data-source.js";
import { Card } from 'react-bootstrap';
import "../css/";

export default function ScheduleNWJS() {
    
    return (
        <>
        <h6 id="swipe-text">Swipe to View</h6>
        <FontAwesomeIcon id="icon-showhide" icon={faLeftRight} style={{color: "#cb1010", fontSize: "30px",}} />      
        <div className="scrollbar">        
        <table className="zks-shortcode-table  zks-theme-mode"
        id="flc"                          
        data-hide_empty_row="1">
            <thead id="schedule_base_head">
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
            </thead> 
            <tr className="zks-shortcode-row-9" data-index="9">
                        <td className="zks-shortcode-hours">09:00 am</td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45">
                        </td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="tue"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="wed"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="thu"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="fri"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sat"
                            colspan="1"
                            data-row_height="45">
                                <Card id="dragons" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Little Dragons
                                </Card.Header>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="09:00"
                                    className="timeslot-start"
                                >
                                    09:00 am
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="09:30"
                                    className="timeslot-end"
                                >
                                    09:30 am
                                </time>
                                </Card.Body>
                            </Card> 
                            <Card id="dragons" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Little Dragons
                                </Card.Header>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="09:30"
                                    className="timeslot-start"
                                >
                                    09:30 am
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="10:00"
                                    className="timeslot-end"
                                >
                                    10:00 am
                                </time>
                                </Card.Body>
                            </Card>        
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                
                    </tr>
                    <tr className="zks-shortcode-row-10" data-index="10">
                        <td className="zks-shortcode-hours">10:00 am</td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45">
                        </td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="tue"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="wed"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="thu"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="fri"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sat"
                            colspan="1"
                            data-row_height="45">
                                <Card id="ninjas" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Mini Ninjas
                                </Card.Header>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="10:00"
                                    className="timeslot-start"
                                >
                                    10:00 am
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="10:45"
                                    className="timeslot-end"
                                >
                                    10:45 am
                                </time>
                                </Card.Body>
                            </Card>
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                
                    </tr>
                    <tr className="zks-shortcode-row-11" data-index="11">
                        <td className="zks-shortcode-hours">11:00 am</td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45">
                        </td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="tue"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="wed"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="thu"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="fri"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sat"
                            colspan="1"
                            data-row_height="45">
                                <Card id="bbelts-teens" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Black Belts
                                </Card.Header>
                                <Card.Subtitle className="class-card-subtitle">invite only</Card.Subtitle>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="11:00"
                                    className="timeslot-start"
                                >
                                    11:00 am
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="11:45"
                                    className="timeslot-end"
                                >
                                    11:45 am
                                </time>
                                </Card.Body>
                            </Card>
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                
                    </tr>
                    <tr className="zks-shortcode-row-12" data-index="12">
                        <td className="zks-shortcode-hours">12:00 pm</td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45">
                        </td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="tue"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="wed"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="thu"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="fri"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sat"
                            colspan="1"
                            data-row_height="45">
                                <Card id="juniors" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Junior MA
                                </Card.Header>
                                <Card.Subtitle>7 - 9 years</Card.Subtitle>                  
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="12:00"
                                    className="timeslot-start"
                                >
                                    12:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="12:45"
                                    className="timeslot-end"
                                >
                                    12:45 pm
                                </time>
                                </Card.Body>
                            </Card>
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                
                    </tr>
                    <tr className="zks-shortcode-row-13" data-index="13">
                        <td className="zks-shortcode-hours">01:00 pm</td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45">
                        </td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="tue"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="wed"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="thu"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="fri"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sat"
                            colspan="1"
                            data-row_height="45">
                                <Card id="juniors" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Junior MA
                                </Card.Header>
                                <Card.Subtitle>9 - 11 years</Card.Subtitle>                  
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="13:00"
                                    className="timeslot-start"
                                >
                                    1:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="13:45"
                                    className="timeslot-end"
                                >
                                    1:45 pm
                                </time>
                                </Card.Body>
                            </Card>
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                
                    </tr>
            <tr className="zks-shortcode-row-17" data-index="17">
                        <td className="zks-shortcode-hours">05:00 pm</td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45"
                            id="card-container">
                                <Card id="ninjas" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Mini Ninjas
                                </Card.Header>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="17:00"
                                    className="timeslot-start"
                                >
                                    05:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="17:45"
                                    className="timeslot-end"
                                >
                                    05:45 pm
                                </time>
                                </Card.Body>
                            </Card>        
                        </td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="tue"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="wed"
                            colspan="1"
                            data-row_height="45">
                                <Card id="ninjas" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Mini Ninjas
                                </Card.Header>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="17:00"
                                    className="timeslot-start"
                                >
                                    05:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="17:45"
                                    className="timeslot-end"
                                >
                                    05:45 pm
                                </time>
                                </Card.Body>
                            </Card>
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="thu"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="fri"
                            colspan="1"
                            data-row_height="45">
                                <Card id="ninjas" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Mini Ninjas
                                </Card.Header>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="17:00"
                                    className="timeslot-start"
                                >
                                    05:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="17:45"
                                    className="timeslot-end"
                                >
                                    05:45 pm
                                </time>
                                </Card.Body>
                            </Card>
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sat"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                
                    </tr>
                    <tr className="zks-shortcode-row-18" data-index="18">
                        <td className="zks-shortcode-hours">06:00 pm</td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45"
                            id="card-container">
                                <Card id="juniors" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Junior MA
                                </Card.Header>                  
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="18:00"
                                    className="timeslot-start"
                                >
                                    06:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="18:45"
                                    className="timeslot-end"
                                >
                                    06:45 pm
                                </time>
                                </Card.Body>
                            </Card>        
                        </td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="tue"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="wed"
                            colspan="1"
                            data-row_height="45">
                                <Card id="juniors" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Junior MA
                                </Card.Header>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="18:00"
                                    className="timeslot-start"
                                >
                                    06:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="18:45"
                                    className="timeslot-end"
                                >
                                    06:45 pm
                                </time>
                                </Card.Body>
                            </Card>     
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="thu"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="fri"
                            colspan="1"
                            data-row_height="45">
                                <Card id="juniors" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Junior MA
                                </Card.Header>                        
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="18:00"
                                    className="timeslot-start"
                                >
                                    06:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="18:45"
                                    className="timeslot-end"
                                >
                                    06:45 pm
                                </time>
                                </Card.Body>
                            </Card>
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sat"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                
                    </tr>
                    <tr className="zks-shortcode-row-19" data-index="19">
                        <td className="zks-shortcode-hours">07:00 pm</td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45"
                            id="card-container">
                                <Card id="teens" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Teen MA
                                </Card.Header>                  
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="19:00"
                                    className="timeslot-start"
                                >
                                    07:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="19:45"
                                    className="timeslot-end"
                                >
                                    07:45 pm
                                </time>
                                </Card.Body>
                            </Card>        
                        </td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="tue"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="wed"
                            colspan="1"
                            data-row_height="45">
                                <Card id="teens" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Teen MA
                                </Card.Header>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="19:00"
                                    className="timeslot-start"
                                >
                                    07:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="19:45"
                                    className="timeslot-end"
                                >
                                    07:45 pm
                                </time>
                                </Card.Body>
                            </Card>       
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="thu"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="fri"
                            colspan="1"
                            data-row_height="45">
                                <Card id="teens" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Teen MA
                                </Card.Header>                  
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="19:00"
                                    className="timeslot-start"
                                >
                                    07:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="19:45"
                                    className="timeslot-end"
                                >
                                    07:45 pm
                                </time>
                                </Card.Body>
                            </Card>
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sat"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                
                    </tr>
                    <tr className="zks-shortcode-row-20" data-index="20">
                        <td className="zks-shortcode-hours">08:00 pm</td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45">
                        </td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="tue"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="wed"
                            colspan="1"
                            data-row_height="45">
                                <Card id="bjj-teens" className="zks-inner-event-content">
                                    <Card.Header className="event-title">
                                        Brazilian Jiujitsu
                                    </Card.Header>
                                    <Card.Subtitle className="class-card-subtitle">
                                        <br />
                                        For 12 years+
                                    </Card.Subtitle>
                                    <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="20:00"
                                    className="timeslot-start"
                                >
                                    08:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="20:45"
                                    className="timeslot-end"
                                >
                                    08:45 pm
                                </time>

                                    </Card.Body>
                                </Card>
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="thu"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="fri"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sat"
                            colspan="1"
                            data-row_height="45">
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                
                    </tr>
            <tbody>

            </tbody>

            <tfoot>

            </tfoot>
        </table>
        </div>
        <section id="location">
                <Card id="zksma_hq-map" className="location-card">
                    <Card.Header className="location-card-header">Nascot Wood Junior School
                            </Card.Header>
                        <Card.Body>
                            <Card.Subtitle>Term Time Only</Card.Subtitle>
                                <hr />                        
                                <iframe title="Watford venue location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.4271564485907!2d-0.4128556487597391!3d51.670323806499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766a9abf6f3dbb%3A0xb7256bd52c10dfbd!2sNascot+Wood+Junior+School!5e0!3m2!1sen!2suk!4v1507649333516" maxwidth="400" maxheight="300" allowfullscreen></iframe>                      
                        </Card.Body>
                            <Card.Footer>
                                <address className="card-text">Nascot Wood Rd, Watford, Hertfordshire,
                                WD17 4YS</address>

                            </Card.Footer>
                </Card>
            </section>
     </>
    )
}