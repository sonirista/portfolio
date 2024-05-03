
import './App.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Experience } from './components/Experience/Experience';
import { Hero } from './components/Hero/Hero';
import { Navbar } from './components/Navbar/Navbar';
import { Project } from './components/Projects/Projects';

function App() {
  

  return (
    <div className='App'>
      <Navbar/>
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
      
    </div>
  )
}

export default App
