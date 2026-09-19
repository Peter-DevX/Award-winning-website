import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const  AnimatedTitle = ({title, containerClass}) => {
    const containerRef = useRef(null)

    useEffect(() => {

        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: '100 bottom',
                    end: 'center bottom',
                    toggleActions: 'play none none reverse',
                }
            });

            titleAnimation.to('.animated-word ',{
            opacity: 1,
            transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)',
            ease: 'power2.inOut',
            stagger: 0.03
        })
            
        }, containerRef)

        return () => ctx.revert();
    },[])

  return (
    <div ref={containerRef} className={`animated-title ${containerClass}`}>
      <div className={`mt-5 text-center text-3xl uppercase leading-[1] md:text-[6rem] ${containerClass}`}>
    {title.split('<br/>').map((line,index) => (
        <div key={index} className=' max-w-full flex-wrap justify-center gap-1 px-10 text-center md:gap-2'>
            {line.split(' ').map((word,i) => (
                <span key={i} className='animated-word' dangerouslySetInnerHTML={{__html: word }}
                />
            ))}
        </div>
    ))}
</div>
    </div>
  )
}

export default  AnimatedTitle
