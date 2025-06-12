import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import spotifyImage from "../assets/public/images/mobileSpotify.png"
import shoesImage from "../assets/public/images/shoes.png"
import netflixImage from "../assets/public/images/netflix.png"
gsap.registerPlugin(ScrollTrigger)

const ShowCaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)


    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
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
    }, [])

    return (
        <section id='work' ref={sectionRef} className='min-h-screen bg-black text-white py-20 px-4'>
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Featured Projects
                    </h1>
                    <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                        Showcasing innovative full-stack applications with modern technologies
                    </p>
                </div>

                {/* Main Featured Project */}
                <div ref={project1Ref} className='mb-20'>
                    <div className='bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-800'>
                        <div className='grid lg:grid-cols-2 gap-12 items-center'>
                            <div className='order-2 lg:order-1'>
                                <div className='inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6'>
                                    Featured Project
                                </div>
                                <h2 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
                                    Spotify Clone with Real-time Chat
                                </h2>
                                <p className='text-gray-300 text-lg mb-8 leading-relaxed'>
                                    A powerful music streaming full-stack application featuring real-time chat functionality using Socket.io, allowing users to share and discuss music instantly.
                                </p>
                                <div className='mb-8'>
                                    <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3'>
                                        Tech Stack
                                    </h3>
                                    <div className='flex flex-wrap gap-2'>
                                        {['React', 'Node.js', 'TypeScript', 'Express', 'MongoDB', 'Tailwind CSS', 'Socket.io', 'JWT', 'Clerk'].map((tech) => (
                                            <span key={tech} className='bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm'>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <button className='bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors'>
                                        View Live
                                    </button>
                                    <button className='border border-gray-600 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors'>
                                        Source Code
                                    </button>
                                </div>
                            </div>
                            <div className='order-1 lg:order-2'>
                                <div className='relative'>
                                    <div className='absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl blur-xl'></div>
                                    <div className='relative bg-gray-900 rounded-2xl p-4 border border-gray-700'>
                                        <img 
                                            src={spotifyImage} 
                                            alt="Spotify Clone" 
                                            className='w-full h-auto rounded-xl'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Projects Grid */}
                <div className='grid md:grid-cols-2 gap-8'>
                    {/* Shoes E-commerce */}
                    <div ref={project2Ref} className='bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-colors'>
                        <div className='mb-6'>
                            <div className='bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-4 mb-6'>
                                <img 
                                    src={shoesImage} 
                                    alt="Shoes E-commerce" 
                                    className='w-full h-48 object-cover rounded-lg'
                                />
                            </div>
                            <h3 className='text-2xl font-bold mb-4'>
                                Shoe Store E-commerce
                            </h3>
                            <p className='text-gray-300 mb-6'>
                                Complete e-commerce solution specialized for footwear with product listings, shopping cart, wishlist, Razorpay payments, coupon system, and comprehensive admin management.
                            </p>
                            <div className='mb-6'>
                                <h4 className='text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3'>
                                    Tech Stack
                                </h4>
                                <div className='flex flex-wrap gap-2'>
                                    {['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'EJS', 'Razorpay'].map((tech) => (
                                        <span key={tech} className='bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <button className='flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors'>
                                    View Project
                                </button>
                                <button className='flex-1 border border-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors'>
                                    Code
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Netflix Clone */}
                    <div ref={project3Ref} className='bg-gradient-to-br from-red-900/20 to-pink-900/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-colors'>
                        <div className='mb-6'>
                            <div className='bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl p-4 mb-6'>
                                <img 
                                    src={netflixImage} 
                                    alt="Netflix Clone" 
                                    className='w-full h-48 object-cover rounded-lg'
                                />
                            </div>
                            <h3 className='text-2xl font-bold mb-4'>
                                Netflix Clone with AI
                            </h3>
                            <p className='text-gray-300 mb-6'>
                                Streaming platform replica featuring intelligent movie suggestions powered by Gemini API, providing personalized content discovery and enhanced user experience.
                            </p>
                            <div className='mb-6'>
                                <h4 className='text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3'>
                                    Tech Stack
                                </h4>
                                <div className='flex flex-wrap gap-2'>
                                    {['React', 'Firebase', 'Tailwind CSS', 'Gemini API', 'Redux'].map((tech) => (
                                        <span key={tech} className='bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm'>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <button className='flex-1 bg-red-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-600 transition-colors'>
                                    View Project
                                </button>
                                <button className='flex-1 border border-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors'>
                                    Code
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowCaseSection