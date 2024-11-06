// import logo from './logo.svg';
import './App.css';
import '../src/components/contact.css'

import Home from './components/home';
import Contact from './components/contact';
import About from './components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      {/* define only routes in this file to browse among given paths */}
      <BrowserRouter>
        <Routes>
          < Route path='/' element={<Home />} />
          < Route path='/home' element={<Home />} />
          < Route path='/contact' element={<Contact />} />
          < Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;

