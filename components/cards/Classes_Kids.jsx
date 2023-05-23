import {Card, CardGroup, Button} from "react-bootstrap";
import { KidsClasses } from "../../pages";
import "./css/Cards.css";
import "../buttons/Buttons.css";

export default function ClassesCards() {

    return (
        <>
            <Card className="kids-classes-card">
                <Button id="btn-kids-classes" to={KidsClasses}>Childrens' Classes</Button>
            </Card>
        </>
    )
} 