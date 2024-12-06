import { Route, Routes } from 'react-router-dom';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';

import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home'
import Navbar from './component/Navbar';
import Testimonials from './component/Testimonials'
import Projects from './component/Projects';
import Main from './component/Main';
import Sample from './component/sample';
// import SlideInComponent from './component/SlideInComponent';
// import ComponentWithSliding from './component/ComponentWithSliding';

function App() {

  // sessionStorage.setItem('goToContact', JSON.stringify(false));
  return (
    
    <div className="App min-h-screen overflow-x-hidden">
          {/* <Navbar/> */}
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/testimonials' element={<Testimonials/>}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/slide' element={<Sample />}/>
          </Routes>
    </div>
  )
}

export default App;
