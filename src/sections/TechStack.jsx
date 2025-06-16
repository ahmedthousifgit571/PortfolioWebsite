import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../assets/constants'
import TechIconCardExperience from '../components/models/TechLogos/TechIconCardExperience'

const TechStack = () => {
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader 
            title="My preffered Tech Stack"
            sub= "🤝 What i Bring to the Table"
            />

            <div className='tech-grid'>
              {
                techStackIcons.map((icon) =>
                <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                    <div className='tech-card-animated-bg'/>
                    <div className='tech-card-content'>
                        <div className='tech-icon-wrapper'>
                          <TechIconCardExperience model={icon}/>
                        </div>

                        <div className='padding-x w-full'>
                         <p>{icon.name}</p>
                        </div>

                    </div>
                </div>
                )
              }
            </div>
        </div>

    </div>
  )
}

export default TechStack