import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Toggle() {
 const [toggle, setToggle] = useState(true);
  function handleClick() {
    // todo
    setToggle(!toggle)
  }
  
  return (
    <button onClick={handleClick}>
    {toggle? "ON" : "OFF"} 
    </button>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Toggle />);