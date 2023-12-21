import { useState } from "react";
import useCustomHook from "../hooks/use-custom-hook.js";

function Counter() {
    const [count, setCount] = useState(0);

    useCustomHook(() => {
        console.log("Effect Triggered", count);
    });

    console.log("Rerendered");
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
