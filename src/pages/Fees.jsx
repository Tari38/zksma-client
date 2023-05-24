import FeesCards from "../components/cards/Fees";
import "./css/Fees.css";

export default function Fees() {
    return (
        <>
        <section id="fees-hero">            
            <h1>ZKS Martial Arts Fees</h1>
            <p>ZKS Martial Arts offer great value for money on all our membership tariffs!</p>
                
            <p>We always offer a <span className="span-link"><a href="../">FREE Trial</a></span> to those interested in our classes and we don't take any payments up front.</p>
                
            <p>If you decide that you like our classes then the next step is to send back the Direct Debit form , which is a simple and easy way to pay.</p> 
                
            <p>We do charge a one off Joiners fee of £25.00 to our 3 - 4 year old members and all other members we charge a £30 joining fee. <br />We also offer family discounts and you may find special promotions on our Facebook page.</p>

        </section>
        <section id="card-fees">
            <FeesCards />
        </section>
        </>
    )
}