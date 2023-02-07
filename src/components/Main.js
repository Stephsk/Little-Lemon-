import { Routes, Route } from 'react-router-dom';
import Homepage from './Homepage.js';
import BookingPage from './BookingPage.js';
import AboutMe from './Chicago.js';
import Menu from './Specials.js';
import OrderOnline from './Specials.js'
import Login from './Login.js';
import { useReducer } from 'react';
import { fetchAPI } from '../utilities/api.js';



function Main() {
  const updatingTimes = (state, action) => {
    const selectedDate = new Date(action.payload)
    return fetchAPI(selectedDate)
  };
  const initializeTimes = () => fetchAPI(new Date())

  const [availableTimes, dispatch] = useReducer(updatingTimes, null, initializeTimes)


  return (
    <main className="main">
      <section className="section1">

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} setAvailableTimes={dispatch} />} />
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>


      </section>


    </main>
  )
}
export default Main;