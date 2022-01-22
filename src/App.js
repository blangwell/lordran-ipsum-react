import './App.css';
import bonfire from './bonfire-pixel.gif';
import NewLordranIpsum from './NewLordranIpsum';
import './fonts/Dico.ttf';

function App() {  
  return (
    <div className="App">
			<h1 className="title">Lordran Ipsum</h1>
      <h2 className="subtitle">Dark Souls NPC Dialogue Ipsum</h2>
			<NewLordranIpsum />
      <img src={bonfire} alt="pixelated bonfire" id="pixel-bonfire"/>
    </div>
  );
}

export default App;
