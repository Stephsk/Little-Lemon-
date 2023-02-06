import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.js';
import BookingPage from './BookingPage.js';
import AboutMe from './Chicago.js';
import Menu from './Specials.js';
import OrderOnline from './Specials.js'
import Login from './Login.js';
import { useState } from 'react';



function Main() {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
  return (
    <main className="main">
      <section className="section1">

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />} />
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>


      </section>

      
    </main>
  )
}
export default Main;