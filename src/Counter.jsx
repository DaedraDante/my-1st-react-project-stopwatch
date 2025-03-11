import { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };
    
    const resetCount = () => {
        setCount(0)
    }

    const decrementCount = () => {
        setCount(count - 1);
    };

    return(
        <div  className="counter-container">
            <h1 className="counter-title">Container</h1>
            <div className="counter-inner-container">
                <h1 className="counter-text">{count}</h1>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={resetCount}>Set to 0</button>
                <button onClick={decrementCount}>Decrement</button>
            </div>
        </div>
    )
}
export default Counter