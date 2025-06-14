import { expCards } from '../assets/constants'
import TitleHeader from '../components/TitleHeader'

const ExperienceSection = () => {
  return (
    <section id='experience' className='w-full md:mt-40 mt:20 section-padding xl:px-0'>
        <div className='w-full h-full md:px-20 px-5'>
             <TitleHeader title="Proffessional Work Experience" sub="💼 My career Overview"/>

             <div className='mt-32 relative'>
                 <div className='relative z-50 xl:space-y-32 space-y-10'>
                   {
                    expCards.map((card)=> (
                        <div key={card.title} className='exp-card-wrapper'>
                          {card.title}
                        </div>
                    ))
                   }
                 </div>
             </div>
        </div>
    </section>
  )
}

export default ExperienceSection