import { useState } from 'react'
import Navbar from './components/navbar.jsx'
import './App.css'
import HiddenTreasures from './pages/HiddenTreasures.jsx'
import Footer from './components/Footer.jsx'
import HolderRewards from './pages/HolderRewards.jsx'
import Contact from './pages/Contact.jsx'
import Welcome from './pages/Welcome.jsx'
function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className='outermostdiv'>
    <Navbar/>
<Contact/>
    </div>

  )
}

export default App
