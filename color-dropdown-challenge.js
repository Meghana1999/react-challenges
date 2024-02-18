import { useState } from 'react';
import './App.css';   


function App() {  
  const colors = {red: "Red", green:"Green", blue: "Blue"}

  const [color, setColor] = useState();

  const colorHandler = (e) =>{
    setColor(e.target.value)
  }

  return (
    <div className="App">  
    <select onChange={colorHandler} value={color}>
      {
      Object.entries(colors).map(([key,val])=>(
        <option value={key}> {val} </option>
      ))
      }
      
    </select>
    {color && <p> {`The color is : ${color}`}</p>}
    </div>
  );
}

export default App;
