import { useState } from 'react'
import {Header }from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <div className="container">
      <Balance />
    </div>
    </>
  )
}

export default App
