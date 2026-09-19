import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Features from './components/Features.jsx'


const App = () => {
  return (
    <main className='relative min-h-screen min-screen overflow-x-hidden'>
      <Navbar />
      <Hero />  
      <About />
      <Features />
      <Story />
    </main>
  )
}

export default App
