import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from'./Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Outlets from './Pages/Outlets';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route> 
        <Route path='/about' element={<About/>}></Route>     
        <Route path='menu' element={<Menu/>}></Route>
        <Route path='/outlets' element={<Outlets/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

      </Routes>
      
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
