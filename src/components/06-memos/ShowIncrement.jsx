import React from 'react';

export const ShowIncrement = React.memo( ({increment}) => {
    console.log('me volvi a generar');

    return (
        <div>
            <button 

            onClick={() =>{
                increment(5);
            }}

            className="btn btn-outline-primary">Incrementar</button>
        </div>
    )
})

