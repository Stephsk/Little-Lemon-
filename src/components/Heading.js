
import restaurantFood from "../assets/restauranfood.jpg"
import HeadingOne from "./headingOne"
import HeadingTwo from "./headingTwo"
import Paragraph from "./Paragraph"


function Heading(){
    return (
   <>
        <heading className="heading">
        <HeadingOne />
            <HeadingTwo />
           <img className="img" style={{width: 180, height: 250, align:"right",borderRadius: "5px", float:"right" }} src={restaurantFood} alt="Restaurant" ></img> 
           <Paragraph />
           <button style={{backgroundColor:"#F4CE14", width: 140, height: 50, borderRadius: "5px",border:"none",fontWeight:"bold"}}>Reserve a Table</button>
            </heading>

    </>)
}
export default Heading