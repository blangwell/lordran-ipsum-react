import { useState } from 'react';
import './App.css';
import TextBox from './Textbox';

function App() {  
  return (
    <div className="App">
      <h1 className="title">Lordran Ipsum</h1>
      <TextBox length="sentence" />
      <TextBox length="paragraph" />
    </div>
  );
}

export default App;
