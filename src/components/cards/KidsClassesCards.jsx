import "./css/KidsClassesCards.css";
import { DragonLogo, MiniNinjaLogo, KidLogo, FooterLogo} from "../../assets";
import { Card } from "react-bootstrap";

export const DragonsCard = () => {
    return (
        <Card id="card-dragon">
            <Card.Header className="class-card-header">
                Little Dragons
            </Card.Header>
            <Card.Img className="class-card-logo" src={DragonLogo}></Card.Img>
            <Card.Text className="class-card-text">
                Our Little Dragons classes are aimed at preschool children, aged 3-4. They are ideal for children who have an interest in the arts and give them a brilliant springboard into our Mini Ninjas group.
            </Card.Text>
            <Card.Footer className="class-card-subtitle">
                3 - 4 year olds
            </Card.Footer>
        </Card>
    )
}

export const MiniNinjasCard = () => {
    return (
        <Card id="card-mini">
            <Card.Header className="class-card-header">
                Mini Ninjas
            </Card.Header>
            <Card.Img className="class-card-logo" src={MiniNinjaLogo}></Card.Img>
            <Card.Text className="class-card-text">
                Mini Ninjas classes give our students a really good introduction to all the basic elements of our martial arts programme. We cover three main units in our programme; Basics, Throws and Self Defence. Most students stay in this class for about 2 to 3 years and then progress to our Junior MA group.
            </Card.Text>
            <Card.Footer className="class-card-subtitle">
                5 - 7 year olds
            </Card.Footer>
        </Card>
    )
}

export const JuniorsMACard = () => {
    return (
        <Card id="card-junior">
            <Card.Header className="class-card-header">
                Junior MA
            </Card.Header>
            <Card.Img className="class-card-logo" src={KidLogo}></Card.Img>
            <Card.Text className="class-card-text">
                This class adds more demands on the students ability and of course it goes without saying we progress onto more technical aspects suitable for their age. Again, students work through the three main units; Basics, Throws and Kata.
            </Card.Text>
            <Card.Footer className="class-card-subtitle">
                8 - 11 year olds
            </Card.Footer>
        </Card>
    )
}

export const TeensMACard = () => {
    return (
        <Card id="card-teen">
            <Card.Header className="class-card-header">
                Teen MA
            </Card.Header>
            <Card.Img className="class-card-logo" src={FooterLogo}></Card.Img>
            <Card.Text className="class-card-text">
                Lastly, our Teen classes give our students a really good introduction to all the basic elements of our martial arts, plus we cover three main aspects in our programme; kick boxing, grappling with submissions and self defence.
            </Card.Text>
            <Card.Footer className="class-card-subtitle">
                12 - 16 year olds
            </Card.Footer>
        </Card>
    )
}

export const SENMACard = () => {
    return (
        <Card id="card-sen">
            <Card.Header className="class-card-header">
                S.E.N MA
            </Card.Header>
                <Card.Body>
                    <Card.Img className="class-card-logo" src={FooterLogo}></Card.Img>
                    <Card.Text className="class-card-text">
                        It’s no secret that a martial arts program is one of the best extracurricular activities a child can participate in! For children with special educational needs the benefits are invaluable because of the inherit structure and discipline that ZKS MA bring to a child’s daily life.
                    </Card.Text>
                </Card.Body>
            <Card.Footer className="class-card-subtitle">
                Special Educational Needs
            </Card.Footer>
        </Card>
    )
}

export const HomeEdMACard = () => {
    return (
        <Card id="card-homeed">
            <Card.Header className="class-card-header">
                Home Ed MA
            </Card.Header>
                <Card.Body>
                    <Card.Img className="class-card-logo" src={FooterLogo}></Card.Img>
                        <Card.Text className="class-card-text">
                            Our class for home educated children is a great place to socialise and meet other children. Our Home Ed MA class has been a great vehicle to deal with their anxieties, plus making great friends on the way.
                        </Card.Text>
                </Card.Body>
            <Card.Footer className="class-card-subtitle">
                Home Schooled Children
            </Card.Footer>
        </Card>
    )
}

export const SchoolsMACard = () => {
    return (
        <Card id="card-schools">
            <Card.Header className="class-card-header">
                Schools MA
            </Card.Header>
                <Card.Body>
                    <Card.Img className="class-card-logo" src={FooterLogo}></Card.Img>
                    <Card.Text className="class-card-text">
                        We have been running classes at schools in and around Aylesbury for a number of years now. We use a format that is effective to run a 45 minute class for just the school pupils.
                    </Card.Text>  
                </Card.Body>
            <Card.Footer className="class-card-subtitle">
                Before and After School Clubs
            </Card.Footer>              
        </Card>
    )
}