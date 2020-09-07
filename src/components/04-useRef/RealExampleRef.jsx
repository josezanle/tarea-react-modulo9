import React from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'
import { useState } from 'react';

export default function RealExampleRef() {

const [show, setShow] = useState(false);
    return (
        <div className="container">
            <h1>RealExampleRef</h1>
            <hr/>

            {show && <MultipleCustomHooks/>}

            <button
            className="btn btn-primary mt-5"
                            onClick={() =>{setShow(!show)}}

            
            >
                Show/Hide
            </button>

        </div>
    )
}
