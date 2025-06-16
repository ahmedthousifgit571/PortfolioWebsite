import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { expCards } from "../assets/constants";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Set default scroll behavior for smoother performance
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true
    });

    // Create a timeline for better performance
    const tl = gsap.timeline();
    
    // Batch animate timeline cards for better performance
    ScrollTrigger.batch(".timeline-card", {
      onEnter: (elements) => {
        gsap.fromTo(elements, 
          {
            xPercent: -100,
            opacity: 0,
          },
          {
            xPercent: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
          }
        );
      },
      start: "top 85%",
      once: true, // Only animate once for better performance
    });

    // Optimize timeline scaling animation
    const timelineEl = document.querySelector(".timeline");
    if (timelineEl) {
      ScrollTrigger.create({
        trigger: ".timeline",
        start: "top center",
        end: "70% center",
        scrub: 1, // Smooth scrubbing instead of onUpdate
        onUpdate: (self) => {
          // Use requestAnimationFrame for smoother updates
          requestAnimationFrame(() => {
            gsap.set(".timeline", {
              scaleY: Math.max(0, 1 - self.progress),
              transformOrigin: "bottom bottom"
            });
          });
        },
      });
    }

    // Batch animate experience text elements
    ScrollTrigger.batch(".expText", {
      onEnter: (elements) => {
        gsap.fromTo(elements,
          {
            opacity: 0,
            y: 30, // Use y instead of xPercent for better performance
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.05,
          }
        );
      },
      start: "top 70%",
      once: true,
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
      style={{ willChange: 'transform' }} // Optimize for animations
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, index) => (
              <div 
                key={`${card.title}-${index}`} 
                className="exp-card-wrapper timeline-card"
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div 
                        className="timeline" 
                        style={{ willChange: 'transform' }}
                      />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div 
                      className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20"
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <div className="timeline-logo">
                        <img 
                          src={card.logoPath} 
                          alt={`${card.title} logo`}
                          loading="lazy"
                          style={{ willChange: 'auto' }}
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">
                          Responsibilities
                        </p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                          {card.responsibilities.map((responsibility, respIndex) => (
                            <li key={`${index}-${respIndex}`} className="text-lg">
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;