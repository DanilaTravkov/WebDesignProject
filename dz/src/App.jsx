import './globals.css'
import { MainPage } from './pages/MainPage'
import { FestOrg } from './pages/FestOrg'
import { Fest } from './pages/Fest';
import { Header } from './components/Header';
import { Festivals } from './pages/Festivals';
import { Login } from "./pages/Login";
import { Error } from './pages/Error';
import { Admin } from './pages/Admin';
import { UserAdmin } from './pages/UserAdmin';

import {
  Router,
  Route,
  Routes,
} from "react-router-dom";

import { useState, useEffect, useRef, forwardRef } from 'react';

const ForwardedHeader = forwardRef((props, ref) => <Header innerRef={ref} {...props} />);

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target) && !buttonRef.current.contains(event.target) && menuOpen)
        setMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen])

  return (
    <div className='flex'>
    <button
    ref={buttonRef}
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
        className="buttonContainer absolute top-0 right-0 m-10 w-8 h-8 z-50 rounded-full flex flex-col justify-center items-center cursor-pointer"
      >
        <span className="bg-white w-10 h-1 block mb-2 rounded-full z-20"></span>
        <span className="bg-white w-10 h-1 block mb-2 rounded-full z-20"></span>
        <span className="bg-white w-10 h-1 block rounded-full z-20"></span>
      </button>
      <main className={`z-40 background-with-overlay min-h-screen ${menuOpen ? "-translate-x-1/3" : ""} duration-500 ease-in-out`}>
      {/* the button should not be affected by any styles in the layout */}
      <div className={`h-full z-20 flex flex-col items-center justify-center `}>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/admin' element={<Admin/>} />
          <Route path='/adminUser' element={<UserAdmin/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/festivals' element={<Festivals />} />
          <Route path='/org/:id' element={<FestOrg />} />
          <Route path='/fest/:id' element={<Fest />} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
    </main>
    <ForwardedHeader setMenuOpen={setMenuOpen} ref={headerRef} menuOpen={menuOpen} />
    </div>
  )
}

export default App
