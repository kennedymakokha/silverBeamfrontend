
import Home from './pages/landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about';
import NotFound from './pages/notFound';
import Contact from './pages/contact';
import Service from './pages/service';
// import Home from './pages/landing';
// import Home from './components/junk/sticky';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<Service />} />
        <Route path="*" element={<NotFound />} />
        <Route exact path='/contact-us' element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
