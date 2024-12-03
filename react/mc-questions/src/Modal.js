import React from 'react'
import './Modal.css'

const Modal = (props) => {
    const { isVisible, hide } = props;

    if (!isVisible) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <h2>Modal title...</h2>
                <p>Hi, there.</p>
                <button onClick={hide}>Close modal</button>
            </div>
        </div>
    )

}

export default Modal;