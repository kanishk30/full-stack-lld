import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';
// use the reduc state. update the action

const Counter = () => {
    const count = useSelector((state) => state.counter.value); // currents tate isfetched.
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(decrement())}>
                decrement
            </button>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>
                increment
            </button>

        </div>
    )
}

export default Counter;