import React from 'react';
import UseCounter from '../../hooks/UseCounter';

const CounterWithCutomHook = () => {

const {state,reset,increment,decrement} = UseCounter(100);




    return (
        <div className="container">
          <h1>counter with hooks : {state}</h1>  
          <hr/>
          <button onClick={decrement} className="btn btn-primary mr-2">-1</button>
        
        <button onClick={reset} className="btn btn-primary mr-2">reset</button>

          <button onClick={increment} className="btn btn-primary mr-2">+1</button>
        </div>
    );
}

export default CounterWithCutomHook;
