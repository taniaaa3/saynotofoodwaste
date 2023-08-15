import './App.css';
import Home from './components/home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Aboutus from './components/aboutus';
import Reachus from './components/reachus';
import Donate from './components/donate';
import Footer from './components/footer';
function App() {
  return (
    <>
    <BrowserRouter >
    <Navbar/>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/reachus' element={<Reachus/>}/>
      <Route path='/donate' element={<Donate/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
