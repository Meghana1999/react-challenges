import { useState } from 'react';
import './App.css';   

const data = [
  { name: "Daniel", age: 25 },
  { name: "John", age: 24 },
  { name: "Jen", age: 31 },
]
const dataHandler = (item)=>{
      return (
        <ul> 
        <li> 
         <span>{item.name} </span>  
         <span>{item.age}</span>
         </li>
        </ul>
        );

}
function App() {   

  return (
    <div className="App">   
    <h1> Data List</h1>
    <div>
     {data.map((item,index)=>(
      dataHandler(item)
     ))}
   </div>

    </div>
  );
}

export default App;
