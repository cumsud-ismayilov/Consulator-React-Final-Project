import React from 'react'


const Buttons = ({type,className, tittle, ...props }) => {
  return (
    <button {...props} className={className}>
     {tittle}
    </button>
  )
}

export default Buttons
