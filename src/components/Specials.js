import OnlineBooking from "./OnlineBooking"

function Specials(){
    return (
    <section className="specials">
        <h1>Specials</h1>
        
        <section className="pictures"></section>
        <img alt="greek salad"></img>
        <h3>Greek Salad</h3>
        <img alt="bruchetta"></img>
        <h3>Bruchetta</h3>
        <img alt="lemon dessert"></img>
        <h3>Lemon Desert</h3>
        <OnlineBooking/>
      </section>
    )
}

export default Specials