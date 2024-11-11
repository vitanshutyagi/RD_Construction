import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home'
import Navbar from './component/Navbar';
import Testimonials from './component/Testimonials'
import Projects from './component/Projects';

function App() {

  sessionStorage.setItem('goToContact', JSON.stringify(false));
  return (
    
    <div className="App min-h-screen overflow-x-hidden">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/testimonials' element={<Testimonials/>}/>
            <Route path='/projects' element={<Projects />}/>
          </Routes>
    </div>
  )
}

export default App;
