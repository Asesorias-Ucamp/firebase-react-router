import { arrayRemove } from 'firebase/firestore';
import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Reservaciones from './components/Reservaciones'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reservaciones' element={<Reservaciones />} />
      </Routes>
      {/* {
        arr.map((item, index) => {
          <li key={index || item.id}>
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
          </li>
        })
      } */}
    </div>
  )
}

export default App