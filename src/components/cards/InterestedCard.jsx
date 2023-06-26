import React from "react";
import { Card } from "react-bootstrap";
import FreeTrialModal from "../modals/FreeTrialModal";

export default function InterestedCard() {
    return (
        <>
            <Card id="interested-card">
                <Card.Header className="interested-card-header">Interested in joining a class?
                </Card.Header>
                    <Card.Subtitle className="interested-card-subtitle">Sign Up today with a Free Trial!
                    </Card.Subtitle>
                <Card.Body className="interested-card-body">
                   <FreeTrialModal />     
                </Card.Body>
            </Card>
                    
         </>
    )
}
