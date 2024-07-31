import { useState } from 'react'
import './App.css'
import About from './Components/About'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login'
import Menu from './Components/Menu'
import Navbar from './Components/Navbar'
import Products from './Components/Products'
import Reviews from './Components/Reviews'

function App() {
  const [log, setLog] = useState(false)
  const toggle=()=>{
    setLog(!log)
  }

  return (
    <>
      <div className={log?"blur-sm bg-black/30":""} >
        <Navbar setLog={setLog}/>
        <main>
          <div id="home">
            <Home/>
            
          </div>

          <div id="menu">
            <Menu/>
          </div>
          <div id="about">
            <About/>
          </div>
          <div id="products">
            <Products/>
          </div>
          <div id="review">
            <Reviews/>
          </div>
        </main>
        <div>
            <Footer/>
        </div>
      </div>
      <Login toggle={toggle} log={log}/>
    </>
  )
}

export default App
