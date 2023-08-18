import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import NewPlayerForm from './components/NewPlayerForm'
import SinglePlayer from './components/SinglePlayer'
import AllPlayers from './components/AllPlayers'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
      <div id='navBar'>
          <NavBar/>
        </div>

    <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:id' element={<SinglePlayer />}/>
    </Routes>
  </BrowserRouter>


    </>

    )
  }

export default App
