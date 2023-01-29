import { Routes, Route} from 'react-router-dom';
import Homepage from './Homepage.js';
import BookingPage from './BookingPage.js';
import AboutMe from './Chicago.js';
import Menu from './Specials.js';
import OrderOnline from './Specials.js'
import Login from './Nav.js';
import restaurantFood from "../assets/restauranfood.jpg"
import CustomerSay from './CustomerSay.js'
import Specials from './Specials.js';

function Main() {
  return (
    <main className="main">
      <section className="section1">

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/booking" element={<BookingPage />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/order-online" element={<OrderOnline />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <h2 className="subtitle">Chicago</h2> 
        <p className="p">Based in Chicago, Illinois, Little Lemon is a family owned Mediterranean restaurant...</p>
       <BookingPage/>
        <img style={{ width: 275, height: 442 }} src={restaurantFood} alt="Restaurant"></img>
  
      </section>

   <Specials/>
      <CustomerSay />
      <section>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>Amet...</p>
        <img alt="owners"></img>
        <img alt="little lemon "></img>
      </section>
    </main>
  )
}
export default Main;