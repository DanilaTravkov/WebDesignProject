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

function App() {

  return (
    <main className="flex flex-col background-with-overlay h-screen">
      <Header/>
      <div className="flex items-center justify-center h-full">
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
  )
}

export default App

