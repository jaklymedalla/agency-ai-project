import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  // FIXED: Standard working state initialization
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.
getItem('theme') : 'light')

  return (
    <div className='bg-white text-black min-h-screen relative'>
      {/* Passing state downward seamlessly */}
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
