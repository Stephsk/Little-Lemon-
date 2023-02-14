import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.js';
import BookingPage from './BookingPage.js';
import AboutBrothers from './AboutBrothers.js';
import Menu from './Specials.js';
import OrderOnline from './Specials.js'
import { useReducer } from 'react';
import { fetchAPI } from '../utilities/api.js';
import Testimonials from './CustomerSay.js';



function Main() {
  const updatingTimes = (state, action) => {
    const selectedDate = new Date(action.payload)
    return fetchAPI(selectedDate)
  };
  const initializeTimes = () => fetchAPI(new Date())

  const [availableTimes, dispatch] = useReducer(updatingTimes, null, initializeTimes)


  return (
    
    <main className="main">
     

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutBrothers />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={dispatch} />} />
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Testimonials />} />

        </Routes>


      


    </main>

  )
}
export default Main;