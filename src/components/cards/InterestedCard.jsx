import { Card } from "react-bootstrap";
import { FreeTrialButton } from "../buttons/Button";

export default function InterestedCard() {
    return (
        <>
            <Card>
                <Card.Header>Interested in joining a class?</Card.Header>
                <Card.Subtitle>Sign Up today with a Free Trial!</Card.Subtitle>
                <Card.Body>
                    <FreeTrialButton />
                </Card.Body>
            </Card>
        </>
    )
}