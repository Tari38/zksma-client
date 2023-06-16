import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLeftRight } from '@fortawesome/free-solid-svg-icons';
import { columnData } from "../data/data-source.js";
import { Card } from 'react-bootstrap';
import "../css/";

export default function ScheduleSMSH() {
    
    return (
        <>
        <h6 id="swipe-text">Swipe to View</h6>
        <FontAwesomeIcon id="icon-showhide" icon={faLeftRight} style={{color: "#cb1010", fontSize: "30px",}} />      
        <div className="scrollbar">
            <table className="zks-shortcode-table  zks-theme-mode"
                   id="smsh"                          
                   data-hide_empty_row="1"
            >
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
                    {/* <tr className="zks-shortcode-row-8" data-index="8">
                        <td className="zks-shortcode-hours">08:00 am</td>
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
                        </td>                                   
                    </tr>
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
                        </td>   
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="sun"
                            colspan="1"
                            data-row_height="45">
                        </td>                
                    </tr>
                    <tr className="zks-shortcode-row-14" data-index="14">
                        <td className="zks-shortcode-hours">02:00 pm</td>
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
                        </td>                
                    </tr>
                    <tr className="zks-shortcode-row-15" data-index="15">
                        <td className="zks-shortcode-hours">03:00 pm</td>
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
                        </td>                
                    </tr> */}
                    <tr className="zks-shortcode-row-16" data-index="16">
                        <td className="zks-shortcode-hours">04:00 pm</td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45"
                            id="card-container">
                                <Card id="dragons" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Little Dragons
                                </Card.Header>
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="16:15"
                                    className="timeslot-start"
                                >
                                    04:15 pm
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="16:45"
                                    className="timeslot-end"
                                >
                                    04:45 pm
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
                                <Card.Body>7 - 9 year olds</Card.Body>
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
                    <tr className="zks-shortcode-row-19" data-index="19">
                        <td className="zks-shortcode-hours">07:00 pm</td>
                        <td className="zks-shortcode-event zks-event-vertical-default"
                            data-column-id="mon"
                            colspan="1"
                            data-row_height="45"
                            id="card-container">
                                {/* <Card id="juniors" className="zks-inner-event-content">
                                {" "}
                                <Card.Header className="event-title">
                                    Junior MA
                                </Card.Header>
                                <Card.Body>10 - 11 year olds</Card.Body>
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
                            </Card>         */}
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
                        </td>                
                    </tr>
                    {/* <tr className="zks-shortcode-row-20" data-index="20">
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
                    <tr className="zks-shortcode-row-22" data-index="22">
                        <td className="zks-shortcode-hours">10:00 pm</td>
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
                        </td>                
                    </tr>                 */}
                </tbody>
                <tfoot id="schedule_base_head">
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
            <section id="location">
            <Card id="smsh-map" className="location-card">
                    <Card.Header className="location-card-header">St Mary's School, Haddenham</Card.Header>
                    <Card.Body>
                    <Card.Subtitle>Term Time Only</Card.Subtitle>
                    
                    <hr />
                    <iframe title="St Mary's School location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.244825948348!2d-0.9277880487565071!3d51.76513129954734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f189a4b4c17d%3A0xf0b1b9b80ffc41df!2sHaddenham+St+Marys+C+E+School!5e0!3m2!1sen!2suk!4v1507648565105" maxWidth="400" maxHeight="300"  allowFullScreen></iframe>
                    </Card.Body>
                    <Card.Footer>
                        <address className="card-text">Aston Road, Haddenham, HP17 8AF
                        </address>
                    </Card.Footer>
                </Card>
                </section>
        </>
    )
}