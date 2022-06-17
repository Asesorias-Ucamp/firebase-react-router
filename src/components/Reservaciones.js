import React, {useState} from 'react'
import { createItem, getItems } from '../manage'
import {Link} from 'react-router-dom'

const Reservaciones = () => {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    createItem({nombre, email})
  }

  const handleRequest = (e) => {
    getItems()
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <form>
        <input type='text' placeholder='nombre' onChange={e => setNombre(e.target.value)}></input>
        <input type='email' placeholder='mail@mail.com' onChange={e => setEmail(e.target.value)}></input>
        <button type='submit' onClick={handleSubmit}>Enviar</button>
        <button type='submit' onClick={handleRequest}>Ver Agenda</button>
      </form>
    </div>
  )
}

export default Reservaciones