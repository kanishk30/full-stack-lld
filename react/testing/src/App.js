import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Profile from './components/Profile';
// import Navbar from './components/Navbar';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [Home, setHome] = useState(null)
  const [About, setAbout] = useState(null)
  const [Contact, setContact] = useState(null)
  const [Profile, setProfile] = useState(null)

  useEffect(() => {
    // preload home page [DYNAMIC IMPORT]
    import('./components/Home').then((module) => setHome(() => module.default))
  }, [])

  const loadHome = () => {
    import('./components/Home').then((module) => setHome(() => module.default))
  }
  const loadAbout = () => {
    import('./components/About').then((module) => setAbout(() => module.default))
  }
  const loadContact = () => {
    import('./components/Contact').then((module) => setContact(() => module.default))
  }
  const loadProfile = () => {
    import('./components/Profile').then((module) => setProfile(() => module.default))
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn Angular
    //     </a>
    //     <Counter />
    //   </header>
    // </div>
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/' onClick={loadHome}>Home</Link>
            </li>
            <li>
              <Link to='/profile' onClick={loadProfile}>Profile</Link>
            </li>
            <li>
              <Link to='/about' onClick={loadAbout}>About</Link>
            </li>
            <li>
              <Link to='/contact' onClick={loadContact}>Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={Home ? <Home /> : <div>Loading....</div>} />
          <Route path='/about' element={About ? <About /> : <div>Loading....</div>} />
          <Route path='/contact' element={Contact ? <Contact /> : <div>Loading....</div>} />
          <Route path='/profile' element={Profile ? <Profile /> : <div>Loading....</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
