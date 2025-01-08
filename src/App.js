
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './routes/Home.js'
import Blog from './routes/Blog.js';
import Projects from './routes/projects.js';
import Events from './routes/Events.js'
import About from './routes/About.js';
import Contact from './routes/Contact.js'

function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
   </Routes>
   </>
  );
}

export default App;
