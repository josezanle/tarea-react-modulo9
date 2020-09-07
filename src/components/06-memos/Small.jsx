import React from 'react';
import { memo } from 'react';

const Small = memo (({value}) => {

    console.log ('me volvi a mostrar :(')

    return (
        <small>
                {value}
        </small>
    );
})

export default Small;
