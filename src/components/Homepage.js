
import restaurantFood from "../assets/restauranfood.jpg"
import CustomerSay from './CustomerSay.js'
import Specials from './Specials.js';

function Homepage() {
    return (
        <>
            <h1 className="title">Little Lemon</h1>
            <h2 className="subtitle">Chicago</h2> _
            <p className="p">Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant...</p>
            <button>Reserve a Table</button>
            <img style={{ width: 275, height: 442 }} src={restaurantFood} alt="Restaurant"></img>
            <Specials />
            <CustomerSay />
            <section>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet...</p>
                <img alt="owners"></img>
                <img alt="little lemon "></img>
            </section>
        </>
    )
}

export default Homepage