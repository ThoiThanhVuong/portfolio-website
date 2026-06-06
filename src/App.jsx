import Footer from '@/components/Footer'
import Header from '@/components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Resume from '@/pages/Resume';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Header/>
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
    
  )
}

export default App
