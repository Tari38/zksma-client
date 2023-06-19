import { Card, Row } from "react-bootstrap";
import "./LocationMaps.css";

export default function LocationMaps() {
    return (
        <>
        <div id="locations">
            <h1>Our Venues</h1>
            <h2>Buckinghamshire</h2>
        </div>
        <Row>                 
            <Card id="zksma_hq-map" className="location-card">
                    <Card.Header className="location-card-header">Aylesbury HQ
                            </Card.Header>
                        <Card.Body>
                            <Card.Subtitle>Term Time Only</Card.Subtitle>
                                <hr />                        
                                    <iframe title="Aylesbury HQ location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.5706715664278!2d-0.809643570722919!3d51.81926629873045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f7a6471bebad%3A0xbfaf2e31469c0d08!2s111%20Cambridge%20St%2C%20Aylesbury%20HP20%201BT!5e0!3m2!1sen!2suk!4v1629312733977!5m2!1sen!2suk" >
                                    </iframe>                       
                        </Card.Body>
                            <Card.Footer>
                                <address className="card-text">111 - 113 Cambridge Street, Aylesbury,                     HP20 1BT</address>
                            </Card.Footer>
                </Card>
                <Card id="bpcc-map" className="location-card">
                    <Card.Header className="location-card-header">Buckingham Park Community Center</Card.Header>
                        <Card.Body>
                            <Card.Subtitle>Term Time Only</Card.Subtitle>
                        <hr />
                        <iframe title="Buckingham Park location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.4219865821738!2d-0.8219951487541558!3d51.83498859441945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f77130553d09%3A0xc63b78f74ccdd47d!2sBuckingham+Park+Community+Centre!5e0!3m2!1sen!2suk!4v1507648870272"></iframe>
                        </Card.Body>
                        <Card.Footer>
                            <address className="card-text">Jubilee Square, Aylesbury, HP19 9AP
                            </address>
                        </Card.Footer>
                </Card>
                <Card id="flc-map" className="location-card">
                <Card.Header className="location-card-header">Fairford Leys Community Center</Card.Header>
                <Card.Body>
                    <Card.Subtitle>Term Time Only</Card.Subtitle>
                        <hr />
                        <iframe title="Fairford Leys location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.404328806237!2d-0.8419580487547518!3d51.81704399573713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f722d436908f%3A0x5b6d0c2202adbf42!2sColdharbour+Parish+Council!5e0!3m2!1sen!2suk!4v1507649043860"></iframe>
                        </Card.Body>
                        <Card.Footer>
                            <address className="card-text">Hampden Square, Fairford Leys, HP19 7HT
                            </address>
                        </Card.Footer>
                </Card>
        </Row>

        <Row>   
            <Card id="prps-map" className="location-card">
                    <Card.Header className="location-card-header">Princes Risborough Primary School</Card.Header>
                    <Card.Body>
                    <Card.Subtitle>Term Time Only</Card.Subtitle>
                    
                    <hr />
                    <iframe  title="Princes Risborough School location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2471.200095827856!2d-0.8325785494275032!3d51.7293754021711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f45c16c29a61%3A0x77ed32b762b808b5!2sPrinces+Risborough+Primary+and+Nursery+School!5e0!3m2!1sen!2suk!4v1507718519665"></iframe>
                    </Card.Body>
                    <Card.Footer>
                        <address className="card-text"> Wellington Ave, Princes Risborough,  HP23 4QS
                        </address>
                    </Card.Footer>
                </Card>
                <Card id="smsh-map" className="location-card">
                    <Card.Header className="location-card-header">St Mary's School, Haddenham</Card.Header>
                    <Card.Body>
                    <Card.Subtitle>Term Time Only</Card.Subtitle>
                    
                    <hr />
                    <iframe title="St Mary's School location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.244825948348!2d-0.9277880487565071!3d51.76513129954734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876f189a4b4c17d%3A0xf0b1b9b80ffc41df!2sHaddenham+St+Marys+C+E+School!5e0!3m2!1sen!2suk!4v1507648565105"></iframe>
                    </Card.Body>
                    <Card.Footer>
                        <address className="card-text">Aston Road, Haddenham, HP17 8AF
                        </address>
                    </Card.Footer>
                </Card>
                <Card id="wcc-map" className="location-card">
                    <Card.Header className="location-card-header">Wingrave Community Center</Card.Header>
                    <Card.Body>
                    <Card.Subtitle>Term Time Only</Card.Subtitle>
                    
                    <hr />
                    <iframe title="Wingrave Community Center location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.885647275419!2d-0.7410060489673148!3d51.863044292359085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876579255683397%3A0x2fd2469f9c71ccac!2sWingrave+Community+Centre!5e0!3m2!1sen!2suk!4v1507720012964"></iframe>
                    </Card.Body>
                    <Card.Footer>
                        <address className="card-text">Church Street, Wingrave, HP22 4PE
                        </address>
                    </Card.Footer>
                </Card>
        </Row>

        <hr />
        <h2 id="herts-locations">Hertfordshire</h2>
        <Card id="zksma_hq-map" className="location-card">
                    <Card.Header className="location-card-header">Nascot Wood Junior School
                            </Card.Header>
                        <Card.Body>
                            <Card.Subtitle>Term Time Only</Card.Subtitle>
                                <hr />                        
                                <iframe title="Watford venue location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.4271564485907!2d-0.4128556487597391!3d51.670323806499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766a9abf6f3dbb%3A0xb7256bd52c10dfbd!2sNascot+Wood+Junior+School!5e0!3m2!1sen!2suk!4v1507649333516"></iframe>                      
                        </Card.Body>
                            <Card.Footer>
                                <address className="card-text">Nascot Wood Rd, Watford, Hertfordshire,
                                WD17 4YS</address>

                            </Card.Footer>
                </Card>
    </>
    )
}