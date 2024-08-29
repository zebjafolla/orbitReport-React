import satData from "./satData.jsx";
import React from 'react';
import styling from './styling.css';

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
  <>
  {displaySats.map((sat, id) => {
    return (
      <div className = "flex-container">
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
      </div>
    );
  })}
    <div className="flex-container">
      <button onClick = {() => setSat(satData)}>Show all Orbits</button>
    </div>
      
  </>
)};

export default Buttons;