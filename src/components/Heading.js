
import restaurantFood from "../assets/restauranfood.jpg"

function Heading(){
    return (
        <heading style={{
        backgroundColor: #495E57;}}>
        <h1 className="title">Little Lemon</h1>
            <h2 className="subtitle">Chicago</h2>
            <p>
                We welcome you to check out our new restaurant. Our delicious recipes will make you wonder when we've been all this time!!!
            </p>
            <img style={{ width: 275, height: 442 }} src={restaurantFood} alt="Restaurant"></img>
            <button>Reserve a Table</button>
            </heading>
            )
    
}
export default Heading