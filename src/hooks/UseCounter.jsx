import { useState } from "react";


export const  UseCounter = (initialstate = 10) => {

const [counter, setCounter] = useState(initialstate);

const increment = () => {
    setCounter (counter + 1);
}
const reset = () => {
    setCounter (initialstate);
}
const decrement =( )=> {
    setCounter ( counter - 1);
}

return {
    counter,
    reset,
    increment,
    decrement
};  
}