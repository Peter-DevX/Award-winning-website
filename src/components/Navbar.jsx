import { useRef, useState, useEffect } from 'react'
import { TiLocationArrow } from "react-icons/ti";
import { HiVolumeUp } from 'react-icons/hi'
import { useWindowScroll } from 'react-use'
import gsap from 'gsap';

import Button from './Button.jsx'




const navItems = [
  'Nexus', 'Vault', 'Prologue', 'About','Contact'
]


const Navbar = () => {

// useRef
const navContainerRef = useRef(null)
const audioElementRef = useRef(null)

// useState
const [isAudioPlaying, setIsAudioPlaying ] = useState(false)
const [isIndicatorActive, setIsIndicatorActive ] = useState(false)
const [ lastScrollY, setLastScrollY] = useState(0)
const [isNavVisible, setIsNavVisible] = useState(true)

const {y: currentScrollY } = useWindowScroll();


// Toggle Function
const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev)
    setIsIndicatorActive((prev) => !prev )
  }

 // useEffect
//  1
useEffect(() => {
  if(currentScrollY === 0 ){
    setIsNavVisible(true);
    navContainerRef.current.classList.remove('floating-nav')
  } else if ( currentScrollY > lastScrollY ) {
    setIsNavVisible(false)
    navContainerRef.current.classList.add('floating-nav')
  } else if (currentScrollY < lastScrollY ) {
    setIsNavVisible(true)
    navContainerRef.current.classList.add('floating-nav');
  }

  setLastScrollY(currentScrollY)
},[currentScrollY, lastScrollY])

// 2
useEffect(() => {
  gsap.to(navContainerRef.current, {
    y: isNavVisible ? 0 : -100,
    opacity: isNavVisible ? 1: 0,
    duration: 0.1
  })
},[isNavVisible])

// 3
useEffect(()=> {
    if(isAudioPlaying) {
      audioElementRef.current.play()
    } else {
      audioElementRef.current.pause()
    }
},[isAudioPlaying])


    

  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 transition-all duration-500 sm:inset-x-6'>
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
      <nav className='flex size-full items-center justify-between p-4'>
            <div className='flex items-center gap-7 cursor-pointer'>
                <img src="/img/logo.png" alt="logo" className='w-15' />
                  <Button id='product-button' title='Products' rightIcon={<TiLocationArrow/>} containerClass='bg-blue-50 md:flex hidden items-center justify-center gap-1'/>
            </div>

            <div className='flex h-full items-center'>
              <div className="hiden md:block">
                {navItems.map((item)=> (
                  <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                    {item}
                  </a>
                ))}
              </div>

              <button className='ml-10 size-8 flex items-center justify-center cursor-pointer border border-yellow-300 bg-yellow-300 rounded-full' onClick={toggleAudioIndicator}>
                <audio ref={audioElementRef} className='hidden' src='/audio/loop.mp3' loop />
                { isIndicatorActive ? ([1, 2, 3, 4].map((bar) => (
                  <div key={bar} 
                  className='indicator-line active' style={{animationDelay: `${bar * 0.1}s`}} />
                ))) : (
                  <HiVolumeUp className='text-black text-lg'/>
                )
                
                }
              </button>
            </div>
      </nav>
      </header>
    </div>
  )
} 

export default Navbar
