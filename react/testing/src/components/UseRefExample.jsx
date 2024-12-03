import React, { useRef } from 'react';

const FocusInputComponent = () => {
    const inputRef = useRef(null);

    const handleFocus = () => {
        console.log(inputRef)
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} type='text' />
            <button onClick={handleFocus}>Click me to focus on Input</button>
        </div>
    )
}

export default FocusInputComponent
