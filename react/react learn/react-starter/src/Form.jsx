
import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(null)

    function handleNameChange(ev) {
        setName(ev.target.value)
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        alert(`Name: ${name} , Email: ${email}`);

        setName('')
        setEmail('')
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name:</label>
            <input
                type='text'
                id='name'
                value={name}
                onChange={handleNameChange}
            />
            <label htmlFor='email'>Email:</label>
            <input
                type='email'
                id='email'
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
            />
            <button type='submit'>Submit</button>
        </div>
    </form>

}

export default Form;