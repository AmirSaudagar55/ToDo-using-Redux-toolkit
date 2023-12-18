import { useState } from 'react'
import './App.css'
import CreateTodo from './Components/CreateTodo'
import RemoveTodo from './Components/RemoveTodo'

function App() {

  return (
    <>
        <CreateTodo/>
        <RemoveTodo/>
    </>
  )
}

export default App
