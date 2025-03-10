import { useState } from "react"

function Stopwatch() {

    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(55)

    const startStopwatch = () => {
        setInterval(() => {
        if(seconds === 59) {          
           incrementMinutes()
         }else if(minutes === 59) {     
           incrementHours()
         }
           setSeconds(seconds => seconds + 1);
        }, 1000);
       
    }

    const incrementHours = () => {
        setMinutes(0);
        setHours(hours => hours + 1);
    }

    const incrementMinutes = () => {
        setSeconds(0);
        setMinutes(minutes => minutes + 1);
    }

    const resetStopwatch = () => {
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    return(
        <div className="stopwatch-container">
            <div className = "time-container">
                <p>{hours}</p>
                <p>{minutes}</p>
                <p>{seconds}</p>
            </div>
            <div className = "buttons-container">
                <button onClick={startStopwatch}>start</button>
                <button>stop</button>
                <button onClick={resetStopwatch}>reset</button>
            </div>
        </div>
    )
}
export default Stopwatch