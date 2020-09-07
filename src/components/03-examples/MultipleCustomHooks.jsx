import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { UseCounter } from '../../hooks/UseCounter';
import '../../assets/breakinbad-style.css'

export const MultipleCustomHooks = () => {

    // era mas facil con axios ¬¬

const {counter,increment} = UseCounter ();

const {loading,data} = useFetch (`https://www.breakingbadapi.com/api/quotes/${counter}`);
const {author,quote} =!!data&& data[0];
console.log(data)


    return (
        <div className="container">
            <h3 className="mt-4">The Breaking Bad Quotes App</h3>
            <hr/>
           
                {
                    loading
                    ?
                        ( 
                        <div className="alert alert-info text-center">
                                Loading...
                        </div>
                            )

                    : 
                        
                        (
                        <div className="blockquot text-center m-5">

                            <p className="mb-3 text-center">{quote}</p>
                            <footer className="blockquot-footer text-right">-{author}</footer>

                        </div>          
                            )    
                }
                <button 
                    className="btn btn-dark"
                    onClick={increment}
                >Siguiente
                
                </button>
        </div>
    )
}
