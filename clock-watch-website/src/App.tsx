//### ----Here implementing the Stpo-Watch -> for stufying ref , useRef----###

import { useState , useRef} from 'react' // Adding useRef for intervalId to stop  re-rendering due to it 
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  //The Watch will be changing every second on the web page and hence it needs to be re-rendered and re-set there from here -> hence use hook=> useState stte var 
  const [secondsPassed, setSecondsPassed] = useState(0); //Initial val set to 0 when the page loads 
  const intervalId = useRef(0); //For the loop of interval started


  //Functio to increment the stop watch -
  //It reset the counter after every 1 s and re-renderes the func with new val on the page
  function startClock(){

      //Edge Case : to avoid ghost loops when the start button is clicked many times :
      // FIX: Optional safety check to stop duplicate timers if clicked repeatedly
      if (intervalId.current !== 0) return;

      //Storing the interval id of this loop 
      intervalId.current = setInterval(()=>{
        setSecondsPassed( s => s +1)
      }, 1000)//after every 1000ms == 1s

      //No updations required 
      // setIntervalVariable(i);
      // //setSecondsPassed is a function and requires the curr val of the state var to be passed to work on it otherwise it might just work on the inital value only 
  };

  function stopClock(){
      //Stoped the started loop of clock by setInterval with its id -- a kill switch
      clearInterval(intervalId.current);
      intervalId.current = 0 ;
  }

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
          <button onClick = {stopClock}>Stop Clock</button>   
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



/* Ghost Loop and Re-rendering problem :

 storing the interval ID in useState (intervalId) causes a bug where your "Stop Clock" button will fail to stop the timer if clicked multiple times.Because intervalId is stored in state, clicking "Start Clock" multiple times spawns several independent background timers, but your state only remembers the very last ID. The previous timers become "ghost loops" that can never be stopped.
 -As we jsut storing intervalId and no need ot re-render during it , we need to use hook called useRef that stops this 
 
 --> Solution : useRef 
  timerRef.current replaces intervalId: We save the interval to timerRef.current. When you click stop, clearInterval(timerRef.current) works instantly every single time.Added if (timerRef.current !== null) return;: This stops a major bug where clicking "Start" 5 times makes your clock tick 5 times faster. Now, it ignores subsequent clicks if a clock is already active.
  
  useRef is a React hook that acts as a private, silent memory box for a component. It holds a value inside .current that stays safe across renders.
  Here is how it helped your code in short:
  It stopped duplicate timers: It allowed us to check timerRef.current !== null so clicking "Start" multiple times wouldn't trigger extra background loops.It kept the "Kill Switch" working: Because it changes silently without re-rendering, the correct setInterval ID was never lost or overwritten. Your "Stop" button now works perfectly every single time.*/