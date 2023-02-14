import OnlineBooking from "./OnlineBooking"
import greekSalad from "../assets/greek salad.jpg"
import bruchetta from "../assets/bruchetta.svg"
import lemonDessert from "../assets/lemon dessert.jpg"

function Specials(){
    return (
    <section className="specials">
        <h1 style={{paddingLeft:"200px",margin:"50px"}}>Specials  <OnlineBooking/></h1>
        <div class="row">
        <div class="column">
        <img style={{ width: 200, height: 200 }} src={greekSalad} alt="salad"></img>
        <h3>Greek Salad</h3>
        <p style={{fontSize: "small"}}>Its name suggests that it was a rural dish, when farmers would take some essential ingredients to the field and mix them together. Greek salad is a true summer dish, full of refreshing, raw vegetables and herbs. It is best to prepare it with ripe tomatoes that are in season, while the olives should be of the Kalamata variety.</p>
        </div>
        <div class="column">
        <img style={{ width: 200, height: 200 }} src={bruchetta} alt="bruchetta"></img>
        <h3>Bruchetta</h3>
        <p style={{fontSize: "small"}}>A "piatto povero" - a poor man's food - and its simplicity of preparation, belies the wonderful burst of flavours that come from the first mouthful and the thoughts that follow of just eating bruschette for days and days...</p>
        </div>
        <div class="column">
         <img style={{ width: 200, height: 200 }} src={lemonDessert} alt="Lemon pie"></img>
        <h3>Lemon Desert</h3>
        <p style={{fontSize: "small"}}>This is a favorite cake for tea-coffee time especilly appreciated after our lovely meals.</p>
        </div>
        </div>
      </section>
    )
}

export default Specials