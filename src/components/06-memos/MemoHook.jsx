import React, { useState, useMemo } from 'react';
import { UseCounter } from '../../hooks/UseCounter';

const MemoHook = () => {

    const {counter,increment} = UseCounter (1);
    const [show, setShow] = useState(true);

    const procesoPesado = (iteraciones ) => {

            // for (let i = 0; i = iteraciones; i ++){
            //     console.log('ahi vamos...');
            // }

            return `${iteraciones} iteraciones realizadas`
    }
    const memoProcesoPesado = useMemo (()=> procesoPesado (counter),[counter])

    return (

        <div className="container">

            <h1>MemoHook</h1>
            <h3> Counter :
                <small>{counter}</small>
            </h3>
            
            <hr/>

            <p>{memoProcesoPesado}</p>

             <button 
                    className="btn btn-primary"
                    onClick={increment}>
            +1
            </button>

            <button 
                    className="btn btn-primary ml-3"
                    onClick={() =>{
                        setShow(!show)
                    }}
            >
            Show/True {JSON.stringify(show)}
            </button>

        </div>

       
    );
}

export default MemoHook;
