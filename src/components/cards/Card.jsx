import "./css/Cards.css";

import { Card } from "react-bootstrap";
import { BucksVenuesButton, HertsVenuesButton } from "../buttons/Button";

export const BucksCard = () => {
    return (
        <Card id="bucks">
            <BucksVenuesButton />
        </Card>
    )
}

export const HertsCard = () => {
    return (
        <Card id="herts">
            <HertsVenuesButton />
        </Card>
    )
}

