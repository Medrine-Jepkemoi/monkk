import React from 'react'
// import SmallImages from '../assets/images/purchasehoodie.png' 


const ProductDetailsImg = (props) => {

  console.log('src:', props.src);
  console.log('alt:', props.alt);
  return (
    <div>
        <img src={props.src} alt={props.alt}  className='rounded-lg h-32 pb-4'/>
    </div>
  )
}

export default ProductDetailsImg