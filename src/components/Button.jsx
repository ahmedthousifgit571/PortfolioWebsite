import React from 'react'
import img from '../assets/public/images/arrow-down.svg'

const Button = ({text,className,id}) => {
  return (
    
      <a className={`${className ?? ''} cta-wrapper group`}>
        <div className='cta-button group'>
          <div className='bg-circle'> </div>
             <p className='text'>{text}</p>
             <div className='arrow-wrapper'>
              <img src={img} alt="arrow"
              
              />
             </div>
          
        </div>
      </a>
   
  )
}

export default Button
