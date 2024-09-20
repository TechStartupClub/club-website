
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Layout from './components/Layout'
import Home from './components/Home'
import Blog from './components/Blog';
import Projects from './components/Projects';
import Events from './components/Events'
import About from './components/About';
import Contact from './components/Contact'

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
   </Routes>
   </>
  );
}

export default App;
