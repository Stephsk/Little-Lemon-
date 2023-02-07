import { useState } from "react"
import AvailableTimes from "./AvailableTimes"

function BookingForm({availableTimes, setAvailableTimes}) {
    const [date, setDate] = useState(0)
    const [time, setTime] = useState(0)
    const [guests, setGuests] = useState(0)
    const [occasion, setOccasion] = useState(0)


    function dateHandler(event) {
        setAvailableTimes({payload:event.target.value})

    }
    function timeHandler(event) {
        setTime(event.target.value)
        console.log(time)
    }
    function guestsHandler(event) {
        setGuests(event.target.value)
        console.log(guests)
    }
    function occasionHandler(event) {
        setOccasion(event.target.value)
        console.log(occasion)
    }
    return (
        <form style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
            <label htmlFor="res-date">Choose date</label>
            <input onChange={dateHandler} type="date" id="res-date" />
            <label htmlFor="res-time">Choose time</label>
            <select onChange={timeHandler} id="res-time">
                <AvailableTimes availableTimes={availableTimes} setAvailableTimes={setAvailableTimes} />
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input onChange={guestsHandler} type="number" placeholder="1" min="1" max="10" id="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select onChange={occasionHandler} id="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
        </form>


    )
}

export default BookingForm