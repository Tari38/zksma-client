import { Card, CardGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon, faStar, faTrophy, faUserNinja } from "@fortawesome/free-solid-svg-icons";
import "./Fees.css";

export default function FeesCards() {
    return (
        <>
        <CardGroup>
                <Card id="standard" className="fees-card">
                    <Card.Header className="card-header-fees">
                        <FontAwesomeIcon 
                        icon={faStar} 
                        style={{color: "#eeff00",}} />
                        Standard Pack
                    </Card.Header>
                    <Card.Body className="fees-body">
                        <h6>Prices from:</h6>
                        <h5>£30 per month</h5>
                        <hr />
                        <h6>What's included?</h6>
                        <ul className="fees-list">
                            <li>One class per week.</li>
                            <li>Family discounts available.</li>
                        </ul>
                    </Card.Body>
                </Card>

                <Card id="premium" className="fees-card">
                    <Card.Header className="card-header-fees">
                        <FontAwesomeIcon 
                        icon={faTrophy} 
                        style={{color: "#ffea00",}} />
                        Premium Pack
                    </Card.Header>
                    <Card.Body className="fees-body">
                        <h6>Prices from:</h6>
                        <h5>£45 per month</h5>
                        <hr />
                        <h6>What's included?</h6>
                        <ul className="fees-list">
                            <li>Two classes per week.</li>
                        </ul>
                    </Card.Body>
                </Card>

                <Card id="dragons" className="fees-card">
                    <Card.Header className="card-header-fees">
                        <FontAwesomeIcon 
                        icon={faDragon} 
                        style={{color: "#0cd448",}} />
                        Dragons Joiners
                    </Card.Header>
                    <Card.Body className="fees-body">
                        <h6>One-Off Joining Fee:</h6>
                        <h5>£25</h5>
                        <hr />
                        <h6>What's included?</h6>
                        <ul className="fees-list">
                            <li>ZKS Kit Bag.</li>
                            <li>ZKS Water Bottle.</li>
                            <li>ZKS T-Shirt.</li>
                            <li>Dragons Sticker Chart.</li>
                            <li>Class Information Pack.</li>
                            <li>Membership Setup Fee</li>
                        </ul>
                    </Card.Body>
                </Card>
                
                <Card id="juniors" className="fees-card">
                    <Card.Header className="card-header-fees">
                        <FontAwesomeIcon 
                        icon={faUserNinja} 
                        style={{color: "#a33030",}} />
                        Juniors Joiners
                    </Card.Header>
                    <Card.Body className="fees-body">
                        <h6>One-Off Joining Fee:</h6>
                        <h5>£30</h5>
                        <hr />
                        <h6>What's included?</h6>
                        <ul className="fees-list">
                            <li>ZKS Kit Bag.</li>
                            <li>ZKS Water Bottle.</li>
                            <li>ZKS T-Shirt.</li>
                            <li>Sparring Gloves.</li>
                            <li>Class Information Pack.</li>
                            <li>Membership Setup Fee</li>
                        </ul>
                    </Card.Body>
                </Card>
            </CardGroup>
            </>
    )
}