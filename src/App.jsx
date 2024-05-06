import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import house from './assets/homepage-house.jpg'
import './App.css'
import Menu from  './components/Menu.jsx'

function App() {
  
  return (
  <>
    <Menu/>
    <div class="container">
    
      <div class="homepage-central-container">
        <div class="container">
          <h1>We help you find your dream home</h1>
          <div class="button-container">
            <button >Browse homes now</button>
          </div>
        </div>

        <div class="container">
        <img src={house} alt="" class="image" />
        </div>
      </div>
    
     

    </div>
  </>

  )
}

export default App
