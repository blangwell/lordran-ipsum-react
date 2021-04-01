// import { useState } from 'react';
import './App.css';
import TextBox from './Textbox';

function App() {  
  return (
    <div className="App">
      <h1 className="title">Lordran Ipsum</h1>
      <p className="subtitle">Dark Souls NPC Dialogue Lorem Ipsum</p>
      <TextBox length="sentence" />
    </div>
  );
}

export default App;
