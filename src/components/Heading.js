
import restaurantFood from "../assets/restauranfood.jpg"
import HeadingOne from "./headingOne"
import HeadingTwo from "./headingTwo"
import Paragraph from "./Paragraph"


function Heading(){
    return (
   <>
        <heading className="heading">
        <HeadingOne /> 
        <img className="img" style={{width: 200, height: 250, align:"right",borderRadius: "5px", float:"right", margin:"50px"}} src={restaurantFood} alt="Restaurant" ></img> 
            <HeadingTwo />
           
           <Paragraph />
           <button style={{backgroundColor:"#F4CE14", width: 120, height: 40, borderRadius: "5px",border:"none",fontWeight:"bold"}}>Reserve a Table</button>
            </heading>

    </>)
}
export default Heading