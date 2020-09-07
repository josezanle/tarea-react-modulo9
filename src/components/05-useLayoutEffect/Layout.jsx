import React, { useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { UseCounter } from '../../hooks/UseCounter';
import './Layout.css'
import { useLayoutEffect } from 'react';
import { useRef } from 'react';

export const Layout = () => {

  

const {counter,increment} = UseCounter ();

const {data} = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`);
const {author,quote} =!!data&& data[0];
console.log(data)


const pTag = useRef();
const [boxSize,setBoxSize] = useState ({});

useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
}, [quote])

    return (
        <div className="container">
            <h3 className="mt-4">LayoutEffect</h3>
            <hr/>
                    
                        <div className="blockquot text-center m-5">

                            <p className="mb-3 text-center"
                            ref={pTag}
                            
                            >{quote}</p>

                        </div>    
                        <pre>
                            {JSON.stringify(boxSize , null ,3)}
                        </pre>        
       
                <button 
                    className="btn btn-dark"
                    onClick={increment}
                >Siguiente
                
                </button>
        </div>
    )
}
