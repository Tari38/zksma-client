import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import "./Buttons.css";

export const ToTopButton = () => {
    return (        
        <Button className="to-top-btn" href="#top">
            <FontAwesomeIcon className='to-top-btn-icon' icon={faCircleChevronUp} size="xs" style={{color: "#e61924",}} />            
        </Button>
    )
}

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
        <Button className="classes-btn" href="/Classes_Kids">
            Childrens' Classes
        </Button>
    )
}

export const AdultsClassesButton = () => {
    return (
        <Button className="classes-btn" href="/Classes_Adults">
            Adults' Classes
        </Button>
    )
}

export const BucksVenuesButton = () => {
    return (
        <Button className="bucks-btn" href="./about#location-maps" >
            Buckinghamshire
        </Button>
    )
}

export const HertsVenuesButton = () => {
    return (
        <Button className="herts-btn" href="./about#location-maps" >
            Hertfordshire
        </Button>
    )
}