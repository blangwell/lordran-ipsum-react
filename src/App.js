// import { useState } from 'react';
import './App.css';
import TextBox from './Textbox';
import bonfire from './bonfire-pixel.gif';
import './fonts/Dico.ttf';
import './fonts/Dico2.ttf';

function App() {  
  return (
    <div className="App">
      <h1 className="title">Lordran Ipsum</h1>
      <p className="subtitle">Dark Souls NPC Dialogue Lorem Ipsum</p>
      <TextBox length="sentence" />
      <img src={bonfire} alt="pixelated bonfire" id="pixel-bonfire"/>
    </div>
  );
}

export default App;
