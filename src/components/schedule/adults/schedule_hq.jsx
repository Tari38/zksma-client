import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLeftRight } from '@fortawesome/free-solid-svg-icons';
import { columnData } from "../data/data-source.js";
import { Card, Row } from "react-bootstrap";
import "./schedule_hq.css";

export default function ScheduleHQ() {
    return (
        <>
        <h1>Aylesbury</h1>
        <h6 id="swipe-text">Swipe to View</h6>
        <FontAwesomeIcon id="icon-showhide" icon={faLeftRight} style={{color: "#cb1010", fontSize: "30px",}} />      
        <div className="scrollbar">        
            <table className="zks-shortcode-table  zks-theme-mode">
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
				</thead> 
                <tbody>
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
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"                         
                            data-row_height="45">
                            <Card id="bjj" className="zks-inner-event-content">
                                <Card.Header className="event-title">
                                Brazilian Jiujitsu
                                </Card.Header> 
                                <Card.Subtitle className="class-card-subtitle">
                                    <br />
                                    All Levels
                                </Card.Subtitle>
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
                                    datetime="10:30"
                                    className="timeslot-end"
                                >
                                    10:30 am
                                </time>       
                                </Card.Body> 
                            <Card.Footer>@ Aylesbury HQ</Card.Footer>  
                            </Card>
                        </td>                                   
                    </tr>
                    {/* <tr className="zks-shortcode-row-10" data-index="10">
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
                            data-row_height="45"
                            id="card-container">                
                        </td>    */}
                        {/* <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                 */}
                    {/* </tr> */}
                    {/* <tr className="zks-shortcode-row-11" data-index="11">
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
                            data-row_height="45"
                            >                         
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
                            data-row_height="45"> */}
                                {/* <Card id="bjj" className="zks-inner-event-content">
                                <Card.Header className="event-title">
                                    Brazilian Jiujitsu
                                </Card.Header> 
                                <Card.Subtitle className="class-card-subtitle">
                                    <br />
                                    No GI
                                </Card.Subtitle>
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
                                    datetime="13:00"
                                    className="timeslot-end"
                                >
                                    1:00 pm
                                </time>                        
                                </Card.Body> 
                                <Card.Footer>@ Aylesbury HQ</Card.Footer>
                            </Card> */}
                        {/* </td>    */}
                        {/* <td className="zks-shortcode-event zks-event-vertical-default"
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
                    </tr> */}
                    <br />
                    <tr className="zks-shortcode-row-19" data-index="19">
                        <td className="zks-shortcode-hours">07:00 pm</td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            rowSpan={3}
                            data-row_height="45">
                            <Card id="muay-thai" className="zks-inner-event-content">
                                <Card.Header className="event-title">
                                    Muay Thai
                                </Card.Header> 
                                <Card.Subtitle className="class-card-subtitle">
                                    <br />
                                    All Levels
                                </Card.Subtitle>     
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="19:45"
                                    className="timeslot-start"
                                >
                                    07:45 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="20:30"
                                    className="timeslot-end"
                                >
                                    8:30 pm
                                </time>    
                                
                                </Card.Body> 
                                <Card.Footer>@ Aylesbury HQ</Card.Footer>
                            </Card>
                            <Card id="muay-thai" className="zks-inner-event-content">
                                <Card.Header className="event-title">
                                    Muay Thai
                                </Card.Header> 
                                <Card.Subtitle className="class-card-subtitle">
                                    <br />
                                    invite only
                                </Card.Subtitle>     
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="20:30"
                                    className="timeslot-start"
                                >
                                    08:30 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="21:15"
                                    className="timeslot-end"
                                >
                                    9:15 pm
                                </time>    
                                
                                </Card.Body> 
                                <Card.Footer>@ Aylesbury HQ</Card.Footer>
                            </Card>
                        </td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="tue"
                            colspan="1"
                            rowSpan={3}
                            data-row_height="45">
                            <Card id="bjj" className="zks-inner-event-content">
                                <Card.Header className="event-title">
                                    Brazilian Jiujitsu
                                </Card.Header> 
                                <Card.Subtitle className="class-card-subtitle">
                                    <br />
                                    ALL LEVELS
                                </Card.Subtitle>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="19:45"
                                    className="timeslot-start"
                                >
                                    07:45 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="21:15"
                                    className="timeslot-end"
                                >
                                    9:15 pm
                                </time>                         
                                </Card.Body> 
                                <Card.Footer>@ Aylesbury HQ</Card.Footer>                    
                            </Card>
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
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                
                    </tr>
                    <tr className="zks-shortcode-row-20" data-index="20">
                        <td className="zks-shortcode-hours">08:00 pm</td>
                        {/* <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45">
                        </td> */}
                        {/* <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="tue"
                            colspan="1"
                            data-row_height="45">
                        </td>    */}
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="wed"
                            colspan="1"
                            rowSpan={2}
                            data-row_height="45">
                                <Card id="muay-thai" className="zks-inner-event-content">
                                <Card.Header className="event-title">
                                    Muay Thai
                                </Card.Header> 
                                <Card.Subtitle className="class-card-subtitle">
                                    <br />
                                    All Levels
                                </Card.Subtitle>     
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="19:45"
                                    className="timeslot-start"
                                >
                                    07:45 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="20:30"
                                    className="timeslot-end"
                                >
                                    8:30 pm
                                </time>    
                                
                                </Card.Body> 
                                <Card.Footer>@ Aylesbury HQ</Card.Footer>
                            </Card>
                            <Card id="muay-thai" className="zks-inner-event-content">
                                <Card.Header className="event-title">Muay Thai</Card.Header>
                                <Card.Subtitle className="class-card-subtitle">
                                    <br />
                                    invite only
                                </Card.Subtitle>
                                <Card.Body className="timeslot">
                                    {" "}
                                <time
                                    datetime="20:30"
                                    className="timeslot-start"
                                >
                                    08:30 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="21:30"
                                    className="timeslot-end"
                                >
                                    9:30 pm
                                </time>                           
                                </Card.Body>
                                <Card.Footer>@ Aylesbury HQ</Card.Footer>
                            </Card>
                                
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="thu"
                            colspan="1"
                            data-row_height="45">
                                <Card id="bjj" className="zks-inner-event-content">
                                <Card.Header className="event-title">
                                    Brazilian Jiujitsu
                                </Card.Header> 
                                <Card.Subtitle className="class-card-subtitle">
                                    <br />
                                    STAND UP WORK
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
                                    datetime="21:15"
                                    className="timeslot-end"
                                >
                                    9:15 pm
                                </time>                         
                                </Card.Body> 
                                <Card.Footer>@ Aylesbury HQ</Card.Footer>                    
                            </Card>
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="fri"
                            colspan="1"
                            data-row_height="45">
                                <Card id="taijitsu" className="zks-inner-event-content">
                                <Card.Header className="event-title">
                                    Traditional Taijutsu
                                </Card.Header> 
                                <Card.Subtitle className="class-card-subtitle">
                                    <br />
                                    All Levels
                                </Card.Subtitle>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="20:00"
                                    className="timeslot-start"
                                >
                                    8:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="21:15"
                                    className="timeslot-end"
                                >
                                    9:15 pm
                                </time>                           
                                </Card.Body> 
                                <Card.Footer>@ Aylesbury HQ</Card.Footer>  
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
                    <tr className="zks-shortcode-row-21" data-index="21">
                        <td className="zks-shortcode-hours">09:00 pm</td>
                        {/* <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45">
                        </td> */}
                        {/* <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="tue"
                            colspan="1"
                            data-row_height="45">
                        </td>    */}
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
                        </td>   
                        {/* <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                 */}
                    </tr>
                </tbody>
                <tfoot id="schedule_base_head"  >
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

                </tfoot>
            </table>
            </div>
            <br />
            {/* <h1>Watford</h1>
            <h6 id="swipe-text">Swipe to View</h6>
            <FontAwesomeIcon id="icon-showhide" icon={faLeftRight} style={{color: "#cb1010", fontSize: "30px",}} />      
            <div className="scrollbar">
            <table className="zks-shortcode-table  zks-theme-mode">
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
				</thead> 
                <tbody>
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
                            rowSpan={2}
                            data-row_height="45">
                                <Card id="bjj" className="zks-inner-event-content">
                                <Card.Header className="event-title">
                                Brazilian Jiujitsu
                                </Card.Header> 
                                <Card.Subtitle className="class-card-subtitle">
                                    <br />
                                    12 years+
                                </Card.Subtitle>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="20:00"
                                    className="timeslot-start"
                                >
                                    8:00 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="21:30"
                                    className="timeslot-end"
                                >
                                    9:30 pm
                                </time>       
                                </Card.Body> 
                            <Card.Footer>@  Nascot Wood Junior School </Card.Footer>  
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
                    <tr className="zks-shortcode-row-21" data-index="21">
                        <td className="zks-shortcode-hours">09:00 pm</td>
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
                        {/* <td className="zks-shortcode-event zks-event-vertical-default"
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
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                
                    </tr>
                </tbody>
            </table>
            </div>
            */}
            <section id="location">
            <Row>
                <Card id="zksma_hq-map" className="location-card">
                    <Card.Header className="location-card-header">Aylesbury HQ
                            </Card.Header>
                        <Card.Body>
                            <Card.Subtitle>Term Time Only</Card.Subtitle>
                                <hr />                        
                                    <iframe title="Aylesbury HQ location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.5706715664278!2d-0.809643570722919!3d51.81926629873045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f7a6471bebad%3A0xbfaf2e31469c0d08!2s111%20Cambridge%20St%2C%20Aylesbury%20HP20%201BT!5e0!3m2!1sen!2suk!4v1629312733977!5m2!1sen!2suk"  maxwidth="400" maxheight="300"  allowFullScreen>
                                    </iframe>                       
                        </Card.Body>
                            <Card.Footer>
                                <address className="card-text">
                                    111 - 113 Cambridge Street, Aylesbury, HP20 1BT
                                </address>
                            </Card.Footer>
                </Card>
                <Card id="zksma_hq-map" className="location-card">
                    <Card.Header className="location-card-header">Nascot Wood Junior School
                            </Card.Header>
                        <Card.Body>
                            <Card.Subtitle>Term Time Only</Card.Subtitle>
                                <hr />                        
                                <iframe title="Watford location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.4271564485907!2d-0.4128556487597391!3d51.670323806499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766a9abf6f3dbb%3A0xb7256bd52c10dfbd!2sNascot+Wood+Junior+School!5e0!3m2!1sen!2suk!4v1507649333516" maxwidth="400" maxheight="300" allowfullscreen></iframe>                       
                        </Card.Body>
                            <Card.Footer>
                                <address className="card-text">
                                    Nascot Wood Rd, Watford, Hertfordshire, WD17 4YS
                                </address>
                            </Card.Footer>
                </Card>
                </Row>
            </section> 
        </>
    )
}