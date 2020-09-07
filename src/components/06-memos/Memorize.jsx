import React, { useState } from 'react';
import { UseCounter } from '../../hooks/UseCounter';
import Small from './Small';

const Memorize = () => {

    const {counter,increment} = UseCounter (10);
    const [show, setShow] = useState(true);

    return (

        <div className="container">

            <h1>Counter :<Small 
                                value={counter}/>
            </h1>
            <pre>{counter}</pre>
            <hr/>

             <button 
                    className="btn btn-primary"
                    onClick={increment}>
            +1
            </button>

            <button 
                    className="btn btn-primary"
                    onClick={() =>{
                        setShow(!show)
                    }}>
            Show/True {JSON.stringify(show)}
            </button>

        </div>

       
    );
}

export default Memorize;
