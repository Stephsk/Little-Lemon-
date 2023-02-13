import OnlineBooking from "./OnlineBooking"
import greekSalad from "../assets/greek salad.jpg"
import bruchetta from "../assets/bruchetta.svg"
import lemonDessert from "../assets/lemon dessert.jpg"

function Specials(){
    return (
    <section className="specials">
        <h1>Specials</h1>
        
        <section className="pictures"></section>
        <img className="item" style={{ width: 200, height: 200 }} src={greekSalad} alt="salad"></img>
        <h3>Greek Salad</h3>
        <img className="item" style={{ width: 200, height: 200 }} src={bruchetta} alt="bruchetta"></img>
        <h3>Bruchetta</h3>
        <img className="item" style={{ width: 200, height: 200 }} src={lemonDessert} alt="Lemon pie"></img>
        <h3>Lemon Desert</h3>
        <OnlineBooking/>
      </section>
    )
}

export default Specials