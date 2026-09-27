const Footer = () => {
  return (
    <footer className='relative isolate overflow-hidden bg-[#07111f] text-blue-50'>
      <img
        src='/img/entrance.webp'
        alt='A glowing entrance in a crystal cavern'
        className='absolute inset-0 -z-20 size-full object-cover object-center opacity-60'
      />
      <div className='absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,17,20,0.35),#07111f_78%)]' />

      <div className='mx-auto flex min-h-[32rem] w-full max-w-7xl flex-col justify-between px-6 py-12 sm:px-10 sm:py-16 lg:px-16'>
        <div className='flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between'>
          <div className='max-w-2xl'>
            <p className='mb-5 font-general text-xs uppercase tracking-[0.3em] text-blue-50/60'>The world is waiting</p>
            <h2 className=' max-w-2xl font-zentry text-6xl uppercase leading-[0.8] sm:text-8xl lg:text-9xl'>
              Enter the <span className='text-yellow-300'>unknown</span>
            </h2>
          </div>

          <nav aria-label='Footer navigation' className='grid grid-cols-2 gap-x-12 gap-y-4 font-general text-xs uppercase tracking-[0.18em] text-blue-50/75 sm:flex sm:gap-8 lg:pt-3'>
            <a href='#about' className='transition-colors hover:text-yellow-300'>About</a>
            <a href='#story' className='transition-colors hover:text-yellow-300'>Story</a>
            <a href='#contact' className='transition-colors hover:text-yellow-300'>Contact</a>
            <a href='https://discord.com/invite/zentryofficial' className='transition-colors hover:text-yellow-300'>Discord</a>
          </nav>
        </div>

        <div className='mt-20 border-t border-blue-50/20 pt-5 font-general text-[10px] uppercase tracking-[0.18em] text-blue-50/50 sm:flex sm:items-center sm:justify-between'>
          <p>© 2026 Zentry. All rights reserved.</p>
          <div className='mt-3 flex gap-6 sm:mt-0'>
            <a href='#' className='transition-colors hover:text-yellow-300'>Privacy</a>
            <a href='#' className='transition-colors hover:text-yellow-300'>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
