import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Labeling from './components/Labeling';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import InfoDemo from './pages/InfoDemo'
import Login from './pages/Login'
import Demo from './pages/Demo';
import IsPrivate from './components/IsPrivate';

function App() {

  const [ language, setLanguage ] = useState('es')

  return (
    <div className="App">
      <Navbar language={language} setLanguage={setLanguage} />
        <Routes>
          <Route path='/' element={<Home language={language} />} />
          <Route path='/demoinfo' element={<InfoDemo language={language} />} />
          <Route path='/demo' element={<IsPrivate> <Demo language={language} /> </IsPrivate>} />
          <Route path='/login' element={<Login />} />
          <Route path='/labeling' element={<Labeling />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
