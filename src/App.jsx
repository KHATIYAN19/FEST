import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Fest from './components/Fest'
import Home from './components/Home'
import Details from "./components/Details"
import Upcoming from './components/Upcoming'
import Upload from './components/Upload'
import './App.css'
function App() {
  return (
    <div className=' w-[90%] mx-auto max-h-max'>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/contact" element={<Contact/>}/>
         <Route path="/fest" element={<Fest/>}/>
         <Route path="/upcoming" element={<Upcoming/>}/>
         <Route path="/upload" element={<Upload/>}/>
         <Route path="/getall" element={<Details/>}/>
       </Routes>     
       </div>
  )
}
export default App
