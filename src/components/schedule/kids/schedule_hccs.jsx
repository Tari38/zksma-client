import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLeftRight } from '@fortawesome/free-solid-svg-icons';
import { columnData } from "../data/data-source.js";
import { Card } from 'react-bootstrap';
import "../css/";

export default function ScheduleHCCS() {
    return (
    <>
        <h6 id="swipe-text">Swipe to View</h6>
        <FontAwesomeIcon id="icon-showhide" icon={faLeftRight} style={{color: "#cb1010", fontSize: "30px",}} />      
        <div className="scrollbar">        
            <table className="zks-shortcode-table  zks-theme-mode"
                   id="flc"                          
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
            <tr className="zks-shortcode-row-8" data-index="8">
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
                                <Card id="schools" className="zks-inner-event-content">
                                <Card.Header className="event-title">
                                    Halton Morning Club
                                </Card.Header>                       
                                <Card.Body className="timeslot">
                                {" "}
                                <time
                                    datetime="08:00"
                                    className="timeslot-start"
                                >
                                    8:00 am
                                </time>{" "}
                                <span className="timeslot-delimiter">
                                    {" "}
                                    -{" "}
                                </span>{" "}
                                <time
                                    datetime="08:45"
                                    className="timeslot-end"
                                >
                                    8:45 am
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
                </tbody>
            <tfoot>
            </tfoot>
        </table>
        </div>
        </>
    )
}