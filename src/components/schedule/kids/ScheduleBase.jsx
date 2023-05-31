import "./schedule.css";
import "../css/schedule_base.css";
import TabSelector from "../TabFilter";

export default function ScheduleBase() {        
                  
    return (
        <>        

        <TabSelector />
        {/* <FilterData data={data} /> */}
        </>     
)
}    
        
        // <table id="schedule-table" className="zks-shortcode-table zks-theme-mode"  data-hide_empty_row="1" table-striped >{search(data).map((item) => (
        // <>  
        //     <thead id="schedule_base_head" key={item.column_id}>                     
        //         <tr className="zks-shortcode-row zks-shortcode-row-th">    
        //             <th><FontAwesomeIcon icon={faCalendarDays} style={{color: "#ffffff",}} />
        //             </th>
        //             <th>{item.name}</th>
        //         </tr>
        //     </thead>        

        // <tbody className="table-grid">
        //         <tr className="zks-shortcode-row" >              
        //             <td className="zks-shortcode-event zks-event-vertical-default" >
        //                 <h5 className="groupTitle">{item.groupName}</h5>
        //                 {" "}
        //                 <p>{item.details}</p>
        //                 {" "}
        //                 {item.startTime}
        //                 <span className="timeslot-delimiter">
        //                 {" "}
        //                 -{" "}
        //                 </span>
        //                 {" "}
        //                 {item.endTime}
        //             </td>
        //         </tr>
        //     </tbody>
        //     </> 
        // ))}                       
        // </table>
        
                        
                           
                
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