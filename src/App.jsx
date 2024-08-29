import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import React from 'react';
import { useState } from 'react';
import satData from "./components/satData.jsx";


function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    let fSats = satData.filter((newSatDisplay) => 
      newSatDisplay.orbitType === currentType
    );
  setSat(fSats);
};


  // small comment
  return (
    <>
      <Banner />
      <Buttons 
        filterByType={filterByType} 
        setSat= {setSat} 
        displaySats= {displaySats}
      />
      <Table sat = {sat}/>
    </>
  );
}

export default App;