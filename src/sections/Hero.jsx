import React from 'react'
import bgImage from '../../src/assets/public/images/bg.png'

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden'>
     <div className='absolute top-0 left-0 z-10'>
       <img src={bgImage} alt="background" />
     </div>

     <div className='hero-layout'>
      {/* LEFT: HERO CONTENT */}
      <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>

      </header>
     </div>
    </section>
  )
}

export default Hero