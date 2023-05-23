import "./css/FaQGradings.css";
import { Col, Row, Card, CardGroup } from "react-bootstrap";
import CalendarIcon from "../assets/icons/calendar-icon.png";

export default function GradingsExams() {
    return (
        <>
            <div className="hero">
                <h1>Grading & Exams FAQ's</h1>
            </div>
        <div className="page">
            {/* <Container fluid > */}
                <Row className="row">
                    <Col auto>
                        <article className="article">
                            <h3>What are mini assessments?</h3>
                                <ul className="faq-list">
                                    <li>Mini assessments are a means of testing our young members and giving them feedback on their progression.</li>
                                    <li>We follow the academic year and run 3 assessments at the end of each school term.</li>
                                    <li>We hold assessments that both our online members and normal class members can attend.
                                    <li>Those that attend our normal classes will be awarded the tag at the next class and the opportunity to work on the feedback from the mini grading.</li> 
                                    <li>Online members will get the tag posted to them.</li>
                                    </li>
                                </ul>                            
                        </article>
                    
                        <CardGroup className="tag-group">
                            <Card className="winter-tag">
                                    <Card.Title>Winter Tag</Card.Title>
                                    <Card.Text>Lesson structure from September to December.</Card.Text>
                                </Card>
                                <Card className="spring-tag">
                                    <Card.Title>Spring Tag</Card.Title> 
                                    <Card.Text> Lesson structure from January to March.</Card.Text>
                                </Card>
                                <Card className="summer-tag">
                                    <Card.Title>Summer Tag</Card.Title> 
                                    <Card.Text> Lesson structure from April to June.</Card.Text>
                                </Card>
                            </CardGroup>
                    </Col>
                    <Col auto className="img-col"></Col>
                </Row>

                <Row className="row">
                    <Col auto className="img2-col"></Col>            
                    <Col auto>
                        <Card className="faq-card">
                            <h3>How much do the assessments cost?</h3>
                                <ul>
                                    <li>The three mini assessments can take about an hour each and costs approximately <strong>£15</strong> for in-class members.</li>
                                    <li>A student’s mini assessment results are then combined for the <strong>annual Grading Award</strong> or the <strong>Grading Competition</strong> which are held in July.
                                    <br /> 
                                    <em>This entitles the member to receive the next belt at the end of the academic year.</em></li>  
                                </ul>
                            </Card>
                    </Col>
                </Row>
        
                <Row className="row-mid">
                    <Col auto>
                        <Card className="faq-card">
                                <h3>Where are the assessments held?</h3>
                                <ul>
                                    <li>In-class mini assessments are held in <strong>Aylesbury</strong> and <strong>Watford</strong> to ensure everyone can make them. You can opt to attend at another venue if you cannot make your local one.</li>                                    
                                    <li>We also offer online content via <a href="https://online.zksma.club/"> <strong>ZKSMA Online</strong></a> where we offer both prerecorded material and live online classes.</li>                               
                                    <li>If members are not able to make the dates we have available then we now offer the chance for the mini assessment to be completed at home via our <a href="https://online.zksma.club/"><strong>ZKSMA Online</strong></a>.</li>
                                </ul>
                        </Card>
                    </Col>
                    <Col auto>
                        <Card className="faq-card">
                            <h3>What should we expect there?</h3>
                                <ul>
                                    <li>Students are asked to grade in groups in front of a panel and will not be expected to grade on their own.</li>
                                    <li>Lower belt students will be given demonstrations on what to do before they are graded. <em>We feel this is important, to help alleviate any anxieties the student may be having before the event.</em></li> 
                                </ul>
                        </Card>
                        
                    </Col>
                    
                    <Col auto >
                    <Card className="faq-card">
                            <h3>What is achieved at a mini assessment?</h3>
                            <ul>
                                <li>At the end of their mini grading, students will be given 'tags' to iron onto their belts showing the tag they have completed.</li>
                                <li>The result of each grading, with comments for improvement and/or praise can be found by logging onto your child’s student page via your <a href="https://www.smallshout.co.uk/members/memberslogon.aspx?oid=1456145" target="new"><strong>members account</strong></a>.</li>
                                <li>You can then print off the certificate for the event. If your child receives a distinction, this means they have done exceptionally well and will be given the opportunity to <em>double grade</em> at the Grading Competition in July if they decide to attend.</li>
                            </ul>
                        </Card>
                    </Col>
                </Row>

                <Row className="row">
                    <Col auto>            
                        <Card className="faq-card">
                            <h3>Does my child need to do a mini assessment?</h3>
                            <ul>
                                <li>Our junior members (age 5+) enrol with us all through the year. We have a <em>mandatory requirement</em> for the student to do <strong>at least ONE mini assessment in the <span className="span-belt">white belt</span> stage</strong> if they want to aim for <span className="span-belt">yellow belt</span>.</li>
                                <li>After the grading award is attended in July, we insist on <span className="span-belt">yellow belt</span> and above <strong>attending ALL mini assessments</strong>.</li>
                                <li>The fact that some children (who enrol from September to November) will attend all mini assessments in the <span className="span-belt">white belt</span> stage is fantastic, as this is what we always encourage for overall success, and of course for a stronger martial artist!</li>
                                <li><strong>Failure to attend any mini assessments means your child will be unable to qualify for the grading award.</strong></li> 
                                <li>Failure to attend the grading award each year means your child will always be recognised as a <span className="span-belt">white belt</span> and may not progress through their martial arts. <em>This may result in your child becoming unenthusiastic, as they will not be able to learn anything new.</em>
                                </li>
                            </ul>
                        </Card>
                    </Col>
                    <Col className="img3-col" auto></Col>
                </Row>
        
                <Row className="row-mid">
                    <Col auto>
                        <Card className="faq-card">
                            <h3>What if I need to reschedule a mini assessment?</h3>
                            <ul>
                                <li>If you need to reschedule a mini assessment then we need you to do the following. We are unable to do this for you and it is a simple process to do online.
                                    <ol>
                                        <li>Go to our Events page and select the booking that you wish to reschedule to.</li>
                                        <li>Inform us by clicking on the message icon in the members area and let us know which event you wish to cancel and which event you wish to leave booked.<br /><strong>IMPORTANT:</strong> If you try and book the event that you wish to attend after the booking deadline, we will be unable to move you. You need to attend the original event that you booked, and if you need to cancel please see the following FAQ.</li>
                                    </ol>
                                </li>
                            </ul>
                            
                        </Card>
                    </Col>
                    <Col  auto>                        
                        <Card className="faq-card"> 
                            <Card.Img className="card-img" src={CalendarIcon} />
                            <h3>When are the assessments?</h3>
                                <li>You will receive a document after enrolling online, titled <strong>Save The Date</strong>.</li>
                                <li>This lists all future grading dates running in December, March, June and July.</li>
                                <li>Catch-up events are announced in May.</li>
                                <li>If you have not received this document please <a href="mailto:admin@zksma.co.uk"><span className="span-email">email us</span></a> to get a copy emailed to you or check your Smallshout messages.<br />
                                Alternatively <a href="http://bit.ly/2X5b3LD"><span className="span-link">click here</span></a> to be taken to your SmallShout dashboard.</li>
                        </Card>
                    </Col>        
                    <Col auto>
                        <Card className="faq-card">
                            <h3>What if I need to cancel a mini assessment?</h3>
                            <ul>
                                <li>If you wish to cancel your booking completely and it falls before the booking end date, we can cancel your booking and issue a refund if you have already paid.
                                <li>To inform us that you wish to cancel, it is best to go online to our members area and use the SmallShout messaging function and inform us of the event.</li>
                                    <br />
                                <strong>IMPORTANT:</strong> If you cancel after the booking end date, or simply not attend the event and do not inform us, then we will not be able to issue a refund.
                                </li>
                            </ul>
                        </Card>
                    </Col>                    
                </Row>

                <Row className="row">
                    <Col auto>
        
                        <Card className="faq-card-maingrading">
                            <h3 id="Maingrading">What is the Grading Competition?</h3>
                            
                                <li>This is a competition event we hold once per year where each child will compete against their peers in order to grade up to the next belt.</li> 
                                <li>If they grade well, and win a competition medal on the day, they have the chance of <em>double grading</em> up to <span className="span-belt">Orange belt</span> (if currently a white belt, they would skip yellow belt).</li>
                                <li>Our main grading event is our biggest event, run just once per year and failure to attend this event will mean white belt students will be unable to move up through the belts.</li>
                                <li>The <strong>Grading Competition</strong> is the final part of what they have already achieved in their mini assessments throughout the year! <br />
                                <strong>IMPORTANT:</strong> A student cannot enter for the main grading without first having attended a mini assessment.</li>
                                <br />

                                <h4>How long does it take?</h4>        
                                <li>It's a 3-4 hour long event attended by between 50-90 children of roughly the same age, and the kids love it, as they get to compete in 2 events (sparring and grappling) for gold, silver, bronze and runner-up medals.</li>
                                <li>There is an awards ceremony and fantastic demonstrations from our Leadership team to inspire them in how great they can become with hard work!</li>
                                <li>The event ends with an awards ceremony where students will collect their belts, certificates, plaques and any medals won that day.</li>
                                <br />

                                <h4>Do all children have to compete?</h4>
                            
                                <li>No. For some children, the thought of competing at a main grading can feel like too much. If this is the case, you can opt for them to attend the awards ceremony to collect the belt and commemorative plaque without your child having to compete on the day.</li>
                                <li>The student <em>will still secure the next belt</em>, but they will not qualify for any double grade.</li>
                                <li>The price will be the same as those competing, but instead of attending for the whole event, you and your child will be invited to the awards ceremony at the end of the event to collect the belt and some other goodies. <br />
                                <em>We do this as it is important that your child feels a sense of occasion when they collect their belt. They may not be ready to compete, but we want them to know they have put in the hard work throughout the year by training each week and attending their mini assessments so they are still entitled to that belt.</em>
                                </li>
                            
                        </Card>
                    </Col>
                    <Col className="img5-col" auto></Col>
                </Row>

                <Row className="row">
                    <Col className="img6-col" auto></Col>
                    <Col auto>        
                        <Card className="faq-card">
                            <h3>What is the belt order?</h3>                            
                                <li>All students start at <span className="span-belt">white belt</span> and progress through in order:
                                    <ol>
                                        <li>white,</li>
                                        <li>yellow,</li> 
                                        <li>orange,</li>
                                        <li>red,</li>
                                        <li>green,</li> 
                                        <li>blue,</li> 
                                        <li>purple,</li> 
                                        <li>purple tag,</li>
                                        <li>brown,</li> 
                                        <li>brown tag,</li> 
                                        <li>black.</li>
                                    </ol>
                                </li>
                                <br />

                            <h4>How long may it take to gain black belt status?</h4>
                            
                            <li>A Sensei argues the longer the journey, the better the martial artist, and that the focus should be on the journey, not on the enticing 'black belt' status... However, rough estimates could indicate roughly 7 years from white to black with hard work and commitment, but this is not guaranteed.</li>
                            <li>A shorter journey to black belt can only be achieved with hard work,  which we see consistently from students who are attending 2 or more classes per week.
                            </li>                            
                        </Card>
                    </Col>
                </Row>

                <Row className="row">
                    <Col auto>        
                        <Card className="faq-card">
                            <h3>My child (white belt) has done a mini assessment already - does he/she have to do more than one or can we 'skip it'?</h3>
                            <ul>                                
                                <li>At each mini assessment event the children are graded as a <strong>pass, merit or distinction</strong>. Those who gain a distinction at a mini grading will also be offered the option of <em>double grading</em> at the <strong>Grading Competition</strong> in July (for current white belts this would mean skipping yellow belt up to orange belt).</li>
                                <li>The more they do the better chance they have to <em>double grade</em> and be more prepared at our annual Grading Competition.</li>
                                <li>As mentioned above, we would strongly recommend any white belt student attends all of their mini assessments, but of course if someone joins in April then they will only have one chance to grade in June before they qualify for the main grading in July.</li>
                                <li>We will not chase students if they do not attend mini assessments or grading award as gradings are not compulsory.</li>
                            </ul>
                        </Card>
                    </Col>
                    <Col className="img7-col" auto></Col>
                </Row>
        {/* </Container> */}
    </div>
    </>
    )
}