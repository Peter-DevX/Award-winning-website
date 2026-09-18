import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'


const App = () => {
  return (
    <main className='relative min-h-screen min-screen overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App
