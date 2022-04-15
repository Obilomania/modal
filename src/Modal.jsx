import React from 'react'
import IMG1 from './popIMG1.jpg'

const Modal = ({ Open }) => {
    if(!Open) return null
  return (
      <>
          <div className="modal__pop">
              <img src={IMG1} alt="" />
              <p>This is a Modal</p>
              <button>close</button>
              
          </div>
      </>
  )
}

export default Modal