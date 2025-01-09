
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import Home from './routes/Home.js'
import Blog from './routes/Blog.js';
import Projects from './routes/projects.js';
import Events from './routes/Events.js'
import About from './routes/About.js';
import Contact from './routes/Contact.js'
import UMarket from './routes/UMarket.js'
import UWealth from './routes/UWealth.js'
import JoinUs from './routes/JoinUs.js';

function App() {
  return (
   <>
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/UWealth" element={<UWealth />} />
      <Route path="/projects/UMarket" element={<UMarket />} />
      <Route path="/events" element={<Events />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/joinus" element={<JoinUs />} />
   </Routes>
   </>
  );
}

export default App;
