import React from 'react'

const SizeBtn = (props) => {
  return (
    <button id={props.id} onClick={props.clickHandler} className='border-2 border-black rounded-md h-12 w-20'>{props.value}</button>
  )
}

export default SizeBtn