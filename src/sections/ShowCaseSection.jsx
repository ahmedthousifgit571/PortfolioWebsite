import React, { useRef } from 'react'
import spotifyImage from '../assets/public/images/mobileSpotify.png'
import shoesImage from '../assets/public/images/shoes.png'
import netflixImage from '../assets/public/images/netflix.png'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ShowCaseSection = () => {
    const sectionRef = useRef(null)       //for animation purpose of each project
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

   

    // using gsap only animation works when component mounts
    useGSAP(()=>{
      gsap.fromTo(
        sectionRef.current,
        {opacity:0},
        {opacity:1,duration:1.5}
    )

    const projects = [project1Ref.current,project2Ref.current,project3Ref.current]
    projects.forEach((card,index)=>{
        gsap.fromTo(
            card,
            {
                y:50,opacity:0
            },
             {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
        )
    })
    },[])

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'>
          <div className='showcaselayout'>
            {/* Left side  */}
              <div className='first-project-wrapper' ref={project1Ref}>
                <div className='image-wrapper'>
                 <img src={spotifyImage} alt="project 1" 
                 className=''
                 />
                </div>
                <div className='text-content'>
                    <h2>A powerful music streaming full-stack application featuring real-time chat functionality using Socket.io, allowing users to share and discuss music instantly.</h2>
                    <p>Built with a modern tech stack including React, Node.js, TypeScript, Express, MongoDB, Tailwind CSS, ShadCN UI, Socket.io, Cloudinary, JWT, Clerk, and more.</p>
                </div>
              </div>           
 

            {/* right side  */}
            <div className='project-list-wrapper overflow-hidden'>
                <div className='project' ref={project2Ref}>
                  <div className='image-wrapper bg-[#ffefdb]'>
                    <img src={shoesImage} alt="shoes" />
                  </div>
                  <h2>Complete e-commerce solution specialized for footwear with product listings, shopping cart, wishlist, Razorpay payments, coupon system, and comprehensive admin management.</h2>
                  <p>Tech Stack: HTML, CSS,JavaScript, Node.js, Express, MongoDB, EJS, Razorpay API </p>
                </div>


                <div className='project' ref={project3Ref}>
                  <div className='image-wrapper '>
                    <img src={netflixImage} alt="netflix" />
                  </div>
                  <h2>Netflix Clone with AI-Powered Movie Recommendations</h2>
                  <p>Tech Stack: React, Firebase, Tailwind CSS, Gemini API, Redux</p>
                </div>

            </div> 
          </div>
        </div>
    </section>
  )
}

export default ShowCaseSection