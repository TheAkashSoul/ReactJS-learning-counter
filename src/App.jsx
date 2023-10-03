import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(-10);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  if(counter > 20){
    counter = 20;
  } else if(counter < 0){
    counter = 0;
  }

 

  
  
  

  return (
    <>
     <h1>Number Counter</h1>
     <p>Current value: {counter}</p>
     <button 
     onClick={addValue}
     >Add Value: {counter}</button>
     <br />
     <button 
     onClick={removeValue}
     >Remove Value: {counter}</button>
     <p>Mininum value should be: 0 </p>
     <p>Maximum value should be: 20 </p>
    </>
  )
}

export default App
