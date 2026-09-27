import Button from './Button.jsx'

const ImageClipBox = ({src, clipClass}) => (
    <div className={clipClass}>
        <img src={src} alt="" />
    </div>
)


const Contact = () => {
  return (
    <div id='contact' className='relative my-20 min-h-[35rem] w-screen px-10  sm:min-h-[35rem]'>
      <div className='relative min-h-[35rem] rounded-lg bg-black py-24 text-blue-50 sm:min-h-[35rem] sm:overflow-hidden'>
        <div className='mt-10 absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
            <video src='/videos/hero-3.mp4' autoPlay loop muted className='mt-5 mb-5 rounded-lg border border-violet-600'/>
            <video src='/videos/hero-2.mp4' autoPlay loop muted className='rounded-lg border border-yellow-300'/>
        </div >

        <div className='absolute left-1/2 top-[-10rem] w-48 -translate-x-1/2 sm:top-1/2 sm:left-auto sm:right-10 sm:w-60 sm:translate-x-0 lg:top-20 lg:w-80' >
            <ImageClipBox src='/img/swordman-partial.webp' clipClass='absolute md:scale-125'/>
            <ImageClipBox src='/img/swordman.webp' clipClass='sword-man-clip-path md:scale-125' />
        </div>
        <div className="flex flex-col items-center text-center">
            <p className='font-general text-[20px] uppercase'>Join zentry</p>
            <p className='special-font z-10 mt-10 w-full max-w-4xl px-4 uppercase leading-[0.9] font-zentry text-[2.5rem] sm:text-4xl md:text-5xl lg:text-6xl'>Let's b<b>u</b>ild the <br /> new Era of Ga<b>m</b>ing <span className='text-yellow-300'>t<b>o</b>gether</span></p>

            <Button title='Contact Us' containerClass='mt-10 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Contact
