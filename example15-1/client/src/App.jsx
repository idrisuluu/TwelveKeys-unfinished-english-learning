import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Game from './components/Game'
import ProfileDetails from './components/ProfileDetails'
import Three from './pages/Three'
import About from './pages/About'
import Journey from './pages/Journey'
import Contact from './pages/Contact'
function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='login' element={<Login/> } />
      <Route path='signup' element={<Signup/>} />
      <Route path='profile/:id' element={<Profile/>}/>
      <Route path='profile/:id/game' element={<Game/>} />
      <Route path='profile/:id/details' element={<ProfileDetails />} />
      <Route path='3000' element={<Three/>} />
      <Route path='about' element={<About/>} />
      <Route path='journey-path' element={<Journey/>}/>
      <Route path='contact' element={<Contact/>}/>


      
    </Routes>

    </>
  )
}

export default App
