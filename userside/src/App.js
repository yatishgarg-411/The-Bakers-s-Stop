import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from'./Pages/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>      
      </Routes>
      
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
