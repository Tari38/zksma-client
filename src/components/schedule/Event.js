const Event = ({ groupEvent, rowIndex, firstCell, details, startTime, endTime }) => {
        if (!groupEvent) return <td />;        
        return (
    

        <tr data-index={rowIndex}>
            <td>{firstCell}</td>
            <td>{groupEvent}
                {" "}
                {details}
                {" "}
                {startTime}
                <span className="timeslot-delimiter">
                    {" "}
                       -{" "}
                </span>
                {" "}
                {endTime}
            </td>
        </tr>
    )
}
export default Event;