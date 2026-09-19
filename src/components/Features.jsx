import {BentoCard, BentoTilt } from './BentoCard.jsx'


import { TiLocationArrow } from 'react-icons/ti';


const Features = () => {
  return (
    <section className='bg-black pb-52'>
      <div className='container mx-auto px-3 md:px-10'>
        <div className='px-5 py-32  items-center justify-center'>
            <p className='text-white font-general text-2xl text-center uppercase mb-5'>Into the Metagame Layer</p>
        

        <p className='mx-auto max-w-md font-circular-web text-lg text-blue-50 opacity-50'>Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world</p>
        </div>

        <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
            <BentoCard 
            src='videos/feature-1.mp4' 
            title={<>radia<b>n</b>t</>} 
            description='A cross-platform metagame app, turning your activities across web2 and web3 games into a rewarding adventure.' 
            isComingSoon={true}/>
      </BentoTilt>

      <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7 '>
        <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2  border border-red'>
            <BentoCard src='videos/feature-2.mp4' title={<>Zig<b>m</b>a</>} description='An anime and gaming-inspired NFT collection - the IP primed for expansion'/>
        </BentoTilt>

        <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
            <BentoCard src='videos/feature-3.mp4' title='Nexus' description='A gamified social hub, adding a new dimension of play to social inteeraction for web3 communities.'/>
        </BentoTilt>

        <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
            <BentoCard src='videos/feature-4.mp4' title='Nexus' description='A gamified social hub, adding a new dimension of play to social inteeraction for web3 communities.'/>
        </BentoTilt>
        <div className="bento-tilt_2">
            <div className='flex size-full flex-col justify-between bg-violet-600 opacity-70 p-5'>
                <h1 className='bento-title special-font max-w-64'>More coming soon</h1>
                <TiLocationArrow className='m-5 scale-[6] self-end' />
            </div>
        </div>
        <div className='bento-tilt_2'>
          <video src="videos/hero-4.mp4" className='size-full object-cover object-center' autoPlay loop muted/>
        </div>
        
      </div>
      </div>

      
    </section>
  )
}

export default Features
