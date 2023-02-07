function AvailableTimes({availableTimes, setAvailableTimes}) {

    const listTimes = availableTimes.map((availableTime) =>
        <option key={availableTime}>{availableTime}</option>
    )
    return listTimes

}
export default AvailableTimes;