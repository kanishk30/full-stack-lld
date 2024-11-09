
import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    function handleChange(ev) {
        const { id, value } = ev.target;
        console.log(id, value);
        setFormData((prevData) => {
            console.log('state bfr updating..', prevData)
            console.log({ id, value })
            return ({ ...prevData, [id]: value })

        })
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        alert(`Name: ${formData.name} , Email: ${formData.email}`);

        // setName('')
        // setEmail('')
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Nme:</label>
            <input
                type='text'
                id='name'
                value={formData.name}
                name='name'
                onChange={handleChange}
            />
            <label htmlFor='email'>Email:</label>
            <input
                type='email'
                id='email'
                value={formData.email}
                name='email'
                onChange={handleChange}
            />
            <button type='submit'>Submit</button>
        </div>
    </form>

}

export default Form;