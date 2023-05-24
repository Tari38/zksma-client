import { Button } from "react-bootstrap";
import "./Buttons.css";


export const FreeTrialButton = () => {
    return (
        <Button className="free-trial-btn" href="https://www.smallshout.co.uk/members/register/new_registration.aspx?oid=1456145&I=0">
            Book a Free Trial
        </Button>
    )
}

export const MemberAreaButton = () => {
    return (
        <Button className="members-btn" target="__blank" href="https://www.smallshout.co.uk/members/memberslogon.aspx?oid=1456145">
            Go To Member Area
        </Button>
    )
}

export const KidsClassesButton = () => {
    return (
        <Button className="classes-btn" href="/kidsclasses">
            Childrens' Classes
        </Button>
    )
}

export const AdultsClassesButton = () => {
    return (
        <Button className="classes-btn" href="/adultsclasses">
            Adults' Classes
        </Button>
    )
}

export const BucksVenuesButton = () => {
    return (
        <Button className="bucks-btn" href="./kidsclasses#venues" >
            Buckinghamshire
        </Button>
    )
}

export const HertsVenuesButton = () => {
    return (
        <Button className="herts-btn" href="./kidsclasses#venues" >
            Hertfordshire
        </Button>
    )
}