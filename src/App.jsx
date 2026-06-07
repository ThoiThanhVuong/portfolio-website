import Footer from '@/components/Footer'
import Header from '@/components/Header';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Resume from '@/pages/Resume';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/resume" element={<Resume/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header/>
      <main className='main-content'>
        <AnimatedRoutes />
      </main>
      <Footer/>
    </Router>
  )
}

export default App
