import { useState } from 'react'
import Hambuger from "../src/components/Hamburger.jsx"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hambuger/>
    </>
  )
}

export default App
