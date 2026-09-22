import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  //The Watch will be changing every second on the web page and hence it needs to be re-rendered and re-set there from here -> hence use hook=> useState stte var 
  const [secondsPassed, setSecondsPassed] = useState(0); //Initial val set to 0 when the page loads 

  //Functio to increment the stop watch -
  //It reset the counter after every 1 s and re-renderes the func with new val on the page
  function startClock(){
      setInterval(()=>{
        setSecondsPassed( s => s +1)
      }, 1000)//after every 1000ms == 1s
  };
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
          <button onClick = {startClock}>Start Clock</button>
          <button>Stop Clock</button>   
        </div>

        {/* The timer */}
        <div>
            {/* <h1>00:00:00</h1> */}
            <h1>{secondsPassed} s</h1> {/* Remember to mention the state var here and not 0 written by u */}
        </div>
       
      </div>
      
    </div>
  )
}

export default App
