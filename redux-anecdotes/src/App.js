import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdotesList from './components/AnecdotesList'
import Notification from './components/Notification'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <AnecdotesList/>
      <AnecdoteForm/>
    </div>
  )
}

export default App