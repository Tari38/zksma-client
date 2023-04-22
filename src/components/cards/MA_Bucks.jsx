import { Button, Card, CardGroup } from "react-bootstrap";
import { BuckinghamParkCC, FairfordLeys, HaddenhamStMarysSchool, HaltonSchool, LongMarstonSchool, PrincesRisboroughSchool, WilliamHardingSchool, WingraveCommunityCenter, ZKSMAHQ } from "../../assets/maps";
import "./css/Cards.css";

export default function MABucksVenues() {
    return (
        <>
            <CardGroup className="venue-card-group">
                <Card className="card venue-card" id="venue-aylesbury">
                    <Card.Header className="venue-card-header">Aylesbury HQ</Card.Header>
                    <Card.Img className="venue-card-img" src={ZKSMAHQ}></Card.Img>
                    <Card.Body className="venue-card-body">
                        111 Cambridge St, Aylesbury HP20 1BT
                    </Card.Body>
                    <Card.Footer>
                        <Button>Get Directions</Button>
                    </Card.Footer>
                </Card>
                <Card className="card venue-card" id="venue-buckingham-park">
                    <Card.Header className="venue-card-header">Buckingham Park Community Center</Card.Header>
                    <Card.Img className="venue-card-img" src={BuckinghamParkCC}></Card.Img>
                    <Card.Body className="venue-card-body">
                        Community Centre, Aylesbury HP19 9DZ
                    </Card.Body>
                    <Card.Footer>
                        <Button>Get Directions</Button>
                    </Card.Footer>
                </Card>
                <Card className="card venue-card" id="venue-fairford-leys">
                    <Card.Header className="venue-card-header">Fairford Leys Center</Card.Header>
                    <Card.Img className="venue-card-img" src={FairfordLeys}></Card.Img>
                    <Card.Body className="venue-card-body">
                        Hampden Square, Aylesbury HP19 7HT
                    </Card.Body>
                    <Card.Footer>
                        <Button>Get Directions</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup className="venue-card-group">
                <Card className="card venue-card" id="venue-haddenham">
                    <Card.Header className="venue-card-header">Haddenham St Mary's School</Card.Header>
                    <Card.Img className="venue-card-img" src={HaddenhamStMarysSchool}></Card.Img>
                    <Card.Body className="venue-card-body">
                        Aston Rd, Haddenham, Aylesbury HP17 8AF
                    </Card.Body>
                    <Card.Footer>
                        <Button>Get Directions</Button>
                    </Card.Footer>
                </Card>
                <Card className="card venue-card" id="venue-halton">
                    <Card.Header className="venue-card-header">Halton Community Combined School</Card.Header>
                    <Card.Img className="venue-card-img" src={HaltonSchool}></Card.Img>
                    <Card.Body className="venue-card-body">
                        Tring Rd, Halton, Aylesbury HP22 5PN
                    </Card.Body>
                    <Card.Footer>
                        <Button>Get Directions</Button>
                    </Card.Footer>
                </Card>
                <Card className="card venue-card" id="venue-longmarston">
                    <Card.Header className="venue-card-header">Long Marston School</Card.Header>
                    <Card.Img className="venue-card-img" src={LongMarstonSchool}></Card.Img>
                    <Card.Body className="venue-card-body">
                        24 Station Rd, Long Marston, Tring HP23 4QS
                    </Card.Body>
                    <Card.Footer>
                        <Button>Get Directions</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
            <CardGroup className="venue-card-group">
                <Card className="card venue-card" id="venue-princes-risborough">
                    <Card.Header className="venue-card-header">Princes Risborough Primary School</Card.Header>
                    <Card.Img className="venue-card-img" src={PrincesRisboroughSchool}></Card.Img>
                    <Card.Body className="venue-card-body">
                        Wellington Ave, Princes Risborough HP27 9HY
                    </Card.Body>
                    <Card.Footer>
                        <Button>Get Directions</Button>
                    </Card.Footer>
                </Card>
                <Card className="card venue-card" id="venue-william-harding">
                    <Card.Header className="venue-card-header">William Harding Combined School</Card.Header>
                    <Card.Img className="venue-card-img" src={WilliamHardingSchool}></Card.Img>
                    <Card.Body className="venue-card-body">
                        Hazelhurst Dr, Aylesbury HP21 9TJ
                    </Card.Body>
                    <Card.Footer>
                        <Button>Get Directions</Button>
                    </Card.Footer>
                </Card>
                <Card className="card venue-card" id="venue-wingrave">
                    <Card.Header className="venue-card-header">Wingrave Community Center</Card.Header>
                    <Card.Img className="venue-card-img" src={WingraveCommunityCenter}></Card.Img>
                    <Card.Body className="venue-card-body">
                        Church St, Wingrave, Aylesbury HP22 4PE
                    </Card.Body>
                    <Card.Footer>
                        <Button>Get Directions</Button>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </>
    )
}