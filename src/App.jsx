import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  // FIXED: Standard working state initialization
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.
getItem('theme') : 'light')

  return (
    <div className='dark:bg-black relative'>
      {/* Passing state downward seamlessly */}
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
    </div>
  )
}

export default App
