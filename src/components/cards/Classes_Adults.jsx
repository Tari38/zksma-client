import { Card } from "react-bootstrap";
import { AdultClasses } from "../../pages";
import "./css/Cards.css";
import "../buttons/Buttons.css";

export default function ClassesAdults() {

    return (
        <>
            <Card className="adults-classes-card">
                <button id="btn-adults-classes" to={AdultClasses}>Adults' Classes</button>
            </Card>
        </>
    )
} 