import React, { useRef, useMemo } from 'react'
import spotifyImage from "/images/mobileSpotify.png"
import shoesImage from "/images/shoes.png"
import netflixImage from "/images/netflix.png"
import chatImage from "/images/chatify.png"

const ShowCaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)
    const project4Ref = useRef(null)

    // Memoize project data to prevent unnecessary re-renders
    const projectsData = useMemo(() => [
        {
            id: 'spotify',
            title: 'TuneHive a music app with Real-time Chat',
            description: 'A powerful music streaming full-stack application featuring real-time chat functionality using Socket.io, allowing users to share and discuss music instantly.',
            image: spotifyImage,
            techStack: ['React', 'Node.js', 'TypeScript', 'Express', 'MongoDB', 'Tailwind CSS', 'Socket.io', 'JWT', 'Clerk', 'Cloudinary'],
            liveLink: 'https://github.com/ahmedthousifgit571/tuneHive',
            githubLink: 'https://github.com/ahmedthousifgit571/tuneHive',
            featured: true,
            gradientFrom: 'from-blue-900/20',
            gradientTo: 'to-purple-900/20',
            buttonColor: 'bg-white text-black hover:bg-gray-200'
        },
        {
            id: 'shoes',
            title: 'Shoe Store E-commerce',
            description: 'Complete e-commerce solution specialized for footwear with product listings, shopping cart, wishlist, Razorpay payments, coupon system, and comprehensive admin management.',
            image: shoesImage,
            techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'EJS', 'Razorpay'],
            liveLink: 'https://github.com/ahmedthousifgit571/ecommerce',
            githubLink: 'https://github.com/ahmedthousifgit571/ecommerce',
            gradientFrom: 'from-orange-900/20',
            gradientTo: 'to-red-900/20',
            buttonColor: 'bg-orange-500 hover:bg-orange-600'
        },
        {
            id: 'netflix',
            title: 'Movie Recommendations with AI',
            description: 'Streaming platform replica featuring intelligent movie suggestions powered by Gemini API, providing personalized content discovery and enhanced user experience.',
            image: netflixImage,
            techStack: ['React', 'Firebase', 'Tailwind CSS', 'Gemini API', 'Redux'],
            liveLink: 'https://netflix-ai-aizj.vercel.app',
            githubLink: 'https://github.com/ahmedthousifgit571/NetflixAi',
            gradientFrom: 'from-red-900/20',
            gradientTo: 'to-pink-900/20',
            buttonColor: 'bg-red-500 hover:bg-red-600'
        },
        {
            id: 'chat',
            title: 'Feature-Packed Chat App Built with Stream',
            description: 'A feature-rich chat application built using the Stream platform, allowing users to chat in multiple languages, video call their friends, record their screens, and customize the application theme for a personalized experience.',
            image: chatImage, 
            techStack: ['React', 'TypeScript', 'Node', 'Express', 'MongoDB', 'Tailwind CSS', 'Shadcn UI', 'Zustand', 'TanStack Query', 'JWT', 'Clerk'],
            liveLink: 'https://streamify-8s6e.onrender.com',
            githubLink: 'https://github.com/ahmedthousifgit571/streamify',
            gradientFrom: 'from-purple-900/20',
            gradientTo: 'to-indigo-900/20',
            buttonColor: 'bg-purple-500 hover:bg-purple-600'
        }
    ], [])

    const handleLiveLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    const handleGithubLink = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    const TechStackBadge = React.memo(({ tech }) => (
        <span className='bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm transition-colors hover:bg-gray-700'>
            {tech}
        </span>
    ))

    const ProjectCard = React.memo(({ project, projectRef, isFeatured = false }) => {
        if (isFeatured) {
            return (
                <div ref={projectRef} className='mb-20'>
                    <div className={`bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300`}>
                        <div className='grid lg:grid-cols-2 gap-12 items-center'>
                            <div className='order-2 lg:order-1'>
                                <div className='inline-block bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6'>
                                    Featured Project
                                </div>
                                <h2 className='text-3xl md:text-4xl font-bold mb-6 leading-tight'>
                                    {project.title}
                                </h2>
                                <p className='text-gray-300 text-lg mb-8 leading-relaxed'>
                                    {project.description}
                                </p>
                                <div className='mb-8'>
                                    <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3'>
                                        Tech Stack
                                    </h3>
                                    <div className='flex flex-wrap gap-2'>
                                        {project.techStack.map((tech) => (
                                            <TechStackBadge key={tech} tech={tech} />
                                        ))}
                                    </div>
                                </div>
                                <div className='flex gap-4'>
                                    <button 
                                        onClick={() => handleLiveLink(project.liveLink)}
                                        className={`${project.buttonColor} px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105`}
                                        aria-label={`View live ${project.title}`}
                                    >
                                        View Live
                                    </button>
                                    <button 
                                        onClick={() => handleGithubLink(project.githubLink)}
                                        className='border border-gray-600 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-200 transform hover:scale-105'
                                        aria-label={`View source code for ${project.title}`}
                                    >
                                        Source Code
                                    </button>
                                </div>
                            </div>
                            <div className='order-1 lg:order-2'>
                                <div className='relative group'>
                                    <div className='absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300'></div>
                                    <div className='relative bg-gray-900 rounded-2xl p-4 border border-gray-700 group-hover:border-gray-500 transition-all duration-300'>
                                        <img 
                                            src={project.image} 
                                            alt={project.title}
                                            className='w-full h-auto rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300'
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div ref={projectRef} className={`bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} rounded-2xl p-8 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-all duration-300 group`}>
                <div className='mb-6'>
                    <div className={`bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} rounded-xl p-4 mb-6 group-hover:scale-[1.02] transition-transform duration-300`}>
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className='w-full h-48 object-cover rounded-lg'
                            loading="lazy"
                        />
                    </div>
                    <h3 className='text-2xl font-bold mb-4 group-hover:text-white/90 transition-colors'>
                        {project.title}
                    </h3>
                    <p className='text-gray-300 mb-6 leading-relaxed'>
                        {project.description}
                    </p>
                    <div className='mb-6'>
                        <h4 className='text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3'>
                            Tech Stack
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                            {project.techStack.map((tech) => (
                                <span key={tech} className='bg-gray-800 text-gray-300 px-2 py-1 rounded text-sm hover:bg-gray-700 transition-colors'>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <button 
                            onClick={() => handleLiveLink(project.liveLink)}
                            className={`flex-1 ${project.buttonColor} text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105`}
                            aria-label={`View live ${project.title}`}
                        >
                            View Project
                        </button>
                        <button 
                            onClick={() => handleGithubLink(project.githubLink)}
                            className='flex-1 border border-gray-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-800 transition-all duration-200 transform hover:scale-105'
                            aria-label={`View source code for ${project.title}`}
                        >
                            Code
                        </button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section 
            id='work' 
            ref={sectionRef} 
            className='min-h-screen bg-black text-white py-20 px-4'
        >
            <div className='max-w-7xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-16'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'>
                        Featured Projects
                    </h1>
                    <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                        Showcasing innovative full-stack applications with modern technologies
                    </p>
                </div>

                {/* Featured Project */}
                <ProjectCard 
                    project={projectsData[0]} 
                    projectRef={project1Ref} 
                    isFeatured={true} 
                />

                {/* Other Projects Grid */}
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectCard 
                        project={projectsData[1]} 
                        projectRef={project2Ref} 
                    />
                    <ProjectCard 
                        project={projectsData[2]} 
                        projectRef={project3Ref} 
                    />
                    <ProjectCard 
                        project={projectsData[3]} 
                        projectRef={project4Ref} 
                    />
                </div>
            </div>
        </section>
    )
}

export default ShowCaseSection