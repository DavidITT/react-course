import {useState} from "react";

export const useCounter = (initial = 1) => {

    const [counter, setCounter] = useState(initial);

    const increment = ( value = 2) => {
        setCounter(counter + value);
    }

    const decrement = (value = 2) => {
        //if(counter === 0) return;
        setCounter(counter - value);
    }

    const reset = () => {
        setCounter(initial);
    }

    return {
        counter,
        increment,
        reset,
        decrement,
    }
}