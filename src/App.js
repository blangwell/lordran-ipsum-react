// import { useState } from 'react';
import './App.css';
import TextBox from './LordranIpsum';
import bonfire from './bonfire-pixel.gif';
import './fonts/Dico.ttf';

function App() {  
  return (
    <div className="App">
      <TextBox />
      <img src={bonfire} alt="pixelated bonfire" id="pixel-bonfire"/>
    </div>
  );
}

export default App;
