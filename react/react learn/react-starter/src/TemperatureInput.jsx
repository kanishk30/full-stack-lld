import { useState } from 'react';

const TemperatureInput = (props) => {
    // props.temperature
    // props.onChange
    console.log(props)

    return (
        <div>
            <label>Enter temperature</label>
            <input
                type='text'
                value={props.temperature}
                onChange={e => props.onChange(e.target.value)}
            />
        </div>
    )
}

export default TemperatureInput;