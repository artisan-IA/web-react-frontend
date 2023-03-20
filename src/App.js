import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Labeling from './components/Labeling';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import InfoDemo from './pages/InfoDemo'
import Login from './pages/Login'

function App() {

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/demoinfo' element={<InfoDemo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/labeling' element={<Labeling />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
