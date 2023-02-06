function AvailableTimes({availableTimes, setAvailableTimes}) {
    // const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])

    const listTimes = availableTimes.map((availableTime) =>
        <option key={availableTime}>{availableTime}</option>
    )
    return listTimes

}
export default AvailableTimes;