// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return(
    <div 
    style={{
      display : "flex",//Turn the contatiner into a flex box
      justifyContent : "center",//To make the inner div align at center horizontally 
      alignItems:"center",//Aligns the inner div at center vertically
      width : "100vw",//to make the inner div take 100% viewport width
      height:"100vh"//to make the inner div take 100% viewport height
    }}>
      <div
        style = {{
          fontSize : "50px"//Mistake made : Rmemeber to mention the unit of size 
        }}
      >
        {/* Buttons */}
        <div 
          style = {{
            display : "flex",
            justifyContent : "space-evenly",//distributes sapce evenly between the items and st and end edges 
            
          }}
        >
          <button>Start Clock</button>
          <button>Stop Clock</button>   
        </div>

        {/* The timer */}
        <div>
            {/* <h1>00:00:00</h1> */}
            <h1>0 s</h1>
        </div>
       
      </div>
      
    </div>
  )
}

export default App
