import React from 'react'
// import SmallImages from '../assets/images/purchasehoodie.png' 

const PurchaseImg = (props) => {
  return (
    <div>
        <img src={props.image} alt={props.title}  className='rounded-lg h-32 pb-4'/>
    </div>
  )
}

export default PurchaseImg