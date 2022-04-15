import React from 'react'
import IMG1 from './popIMG1.jpg'

const Modal = ({ Open, onClose }) => {
    if (!Open) return null
    return (
        <>
            <div className="modal__pop">
                <img src={IMG1} alt="" />
                <div className="side__modal">
                    <h2>This is a Modal</h2>
                    <button className='btn btn__close' onClick={onClose}>Close</button></div>
            </div>
            <div className="overlay" onClick={onClose}></div>
        </>
    )
}

export default Modal