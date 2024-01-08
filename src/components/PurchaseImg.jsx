import React from 'react'
import SmallImages from '../pages/images/purchasehoodie.png'

const PurchaseImg = (props) => {
  return (
    <div>
        <img src={SmallImages} alt={props.alt}  className='rounded-lg h-32 pb-4'/>
    </div>
  )
}

export default PurchaseImg