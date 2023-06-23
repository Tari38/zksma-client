import { CardGroup } from "react-bootstrap";
import { HavocCard, TaijutsuCard, ScorpionCard } from "../components/cards/AdultsClassesCards";
import ScheduleHQ from "../components/schedule/adults/schedule_hq";
import InterestedCard from "../components/cards/InterestedCard";

export default function AdultsClasses() {
    return (
        <>
        <section>
            <br />
                <h1>Adults' Classes</h1>
            <br />
            <CardGroup>
                <HavocCard />
                <TaijutsuCard />
                <ScorpionCard />
            </CardGroup>
        </section>
        <br />
        <section id="adults-schedules">
            <ScheduleHQ />
        </section>
        <section id="free-trial-promo">
            <InterestedCard />
        </section>
        </>
    )
}