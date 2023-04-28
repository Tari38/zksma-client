import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function KidsScheduler(props) {
  

    return (
        <div>
            <section id="zks-kids-timetable">

                <Container className="zks-shortcode">
                    <div className="zks-shortcode-wrapper zks-table-responsive table-init">
                        <select className="zks-menu zks-navigation-select">
                            <option value="all">All Venues</option>
                            <option value="zksma-hq">Aylesbury HQ</option>
                            <option value="bpcc">Buckingham Park Community Centre</option>
                            <option value="smsh">St. Mary's School, Haddenham</option>
                            <option value="wcc">Wingrave Community Centre</option>
                            <option value="lms">Long Marston School</option>
                            <option value="flc">Fairford Leys Centre</option>
                            <option value="prps">Princes Risborough Primary School</option>
                        </select>
                    </div>
                </Container>

                <table className="zks-shortcode-table zks-schedule-kids timetable zks-theme-mode"  id="#all" data-hide_empty_row="1" >
                    <thead>
                        <tr className="zks-shortcode-row">
                            <th data-index="0" data-column-id>
                                <FontAwesomeIcon icon={faCalendarDays} style={{color: "#ffffff",}} />
                            </th>
                            <th data-index="1" data-column-id="mon">Monday</th>
                            <th data-index="2" data-column-id="tue">Tuesday</th>
                            <th data-index="3" data-column-id="wed">Wednesday</th>
                            <th data-index="4" data-column-id="thu">Thursday</th>
                            <th data-index="5" data-column-id="fri">Friday</th>
                            <th data-index="6" data-column-id="sat">Saturday</th>
                            <th data-index="7" data-column-id="sun">Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="zks-shortcode-row-8am" data-index="8">
                            <td className="zks-shortcode-hours">08:00 am</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45">
                                {props.scheduleEvent}
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45">

                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="wed" colspan="1" data-row_height="45">

                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45">
                                <div data-event-id="schools-ma" data-start="8" data-start-item="8" data-end="8:45" className="zks-event-container id-60 zks-colorized" data-type="event">
                                    <div className="zks-inner-event-content" data-venue-id="lms">
                                        <a title="School Pupils Only" href="/" className="event-title">School Pupils Only</a>
                                        <p className="timeslot">
                                            <time dateTime="8:00" className="timeslot-start">08:00 am</time>
                                            <span className="timeslot-delimiter"> - </span>
                                            <time dateTime="8:45" className="timeslot-end">08:45am</time>
                                        </p>
                                    </div>

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-9am" data-index="9">
                            <td className="zks-shortcode-hours">09:00 am</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-10am" data-index="10">
                            <td className="zks-shortcode-hours">10:00 am</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-11am" data-index="11">
                            <td className="zks-shortcode-hours">11:00 am</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-12pm" data-index="12">
                            <td className="zks-shortcode-hours">12:00 pm</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-1pm" data-index="13">
                            <td className="zks-shortcode-hours">01:00 pm</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-2pm" data-index="14">
                            <td className="zks-shortcode-hours">02:00 pm</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-3pm" data-index="15">
                            <td className="zks-shortcode-hours">03:00 pm</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-4pm" data-index="16">
                            <td className="zks-shortcode-hours">04:00 pm</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-5pm" data-index="17">
                            <td className="zks-shortcode-hours">05:00 pm</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-6pm" data-index="18">
                            <td className="zks-shortcode-hours">06:00 pm</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-7pm" data-index="19">
                            <td className="zks-shortcode-hours">07:00 pm</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-8pm" data-index="20">
                            <td className="zks-shortcode-hours">08:00 pm</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-9pm" data-index="21">
                            <td className="zks-shortcode-hours">09:00 pm</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                        <tr className="zks-shortcode-row-10pm" data-index="22">
                            <td className="zks-shortcode-hours">10:00 pm</td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="mon" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="tue" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default event" data-column-id="wed" colspan="1" data-row-height="45" rowspan="1">
                                <div data-event-id="">

                                </div>
                            </td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="thu" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="fri" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sat" colspan="1" data-row_height="45"></td>
                            <td className="zks-shortcode-event zks-event-vertical-default" data-column-id="sun" colspan="1" data-row_height="45"></td>
                        </tr>
                    </tbody>
                </table>
            </section>

        </div>
    )
}