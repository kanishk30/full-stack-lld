import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Profile from './components/Profile';
// import Navbar from './components/Navbar';
import { useEffect, useState, lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

import ArraySum from './components/ArraySum'
import ItemsList from './components/Callback';

// lazy loadng the components...
const Home = lazy(() => import('./components/Home'))
const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Profile = lazy(() => import('./components/Profile'))

function App() {
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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/profile' >Profile</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact' >Contact</Link>
            </li>
          </ul>
        </nav>
        <ArraySum />
        <ItemsList />
        {/* fallback component until laily doenloading the component isnt over... */}

        {/* <Suspense fallback={<div>loading....</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
        </Suspense> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
