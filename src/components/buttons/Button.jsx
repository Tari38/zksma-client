import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
        <Button className="free-trial-btn">
            Book a Free Trial
        </Button>
    )
}

export const MemberAreaButton = () => {
    return (
        <Button className="members-btn" target="__blank" href="https://www.smallshout.co.uk/members/">
            Go To Member Area
        </Button>
    )
}

export const KidsClassesButton = () => {
    return (
        <Button as={NavLink} className="classes-btn" to="/kidsclasses">
            Childrens' Classes
        </Button>
    )
}

export const AdultsClassesButton = () => {
    return (
        <Button as={NavLink} className="classes-btn" to="/adultsclasses">
            Adults' Classes
        </Button>
    )
}

export const BucksVenuesButton = () => {
    return (
        <Button as={NavLink} className="bucks-btn" to="/about">
            Buckinghamshire
        </Button>
    )
}

export const HertsVenuesButton = () => {
    return (
        <Button as={NavLink} className="herts-btn" to="/about">
            Hertfordshire
        </Button>
    )
}

export const PoliciesButton = () => {
    return (
        <Button as={NavLink} className="policies-btn" to="/policies">
            Policies    
        </Button>
    )
}