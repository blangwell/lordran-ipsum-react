import { useState, useEffect } from 'react';
import './LordranIpsum.css';
import ipsumChunks from './ipsum';

export default function TextBox(props) {
  const [textSnippet, setTextSnippet] = useState('');

  // implementation of the Durstenfield shuffle
  // will generate 16 random ints to index ipsumChunks with
  const getRandomIntArr = () => {
    let arr = [...Array(ipsumChunks.length).keys()];
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.slice(0, 16);
  }

  const randomInts = getRandomIntArr();

  // NOTE : utilizing this four at a time method as it makes new lines work
  const generateIpsum = (ints) => {
    let randomChunks = [];
    for (let i = 0; i <= 4; i++) {
      randomChunks.push(ipsumChunks[ints[i]]);
    }
    randomChunks.push('\n');
    setTextSnippet(snippet => [...snippet, randomChunks])
  }
  
  const mapSnippet = textSnippet ? textSnippet.map((snippet, idx) => <p key={idx}>{snippet}</p>) : null
  
  // NOTE : adding randomInts to dependency array causes max depth exceeded error.
  useEffect(() => {
    for (let i = 0; i < 4; i++) {
      generateIpsum(randomInts.slice(i * 4, i * 4 + 4));
    }
  }, [])

  return (
    <div className="textbox">
    <h1 className="title">Lordran Ipsum</h1>
		<h2 className="subtitle">Random Dark Souls NPC Dialogue Ipsum</h2>
      {mapSnippet}
    </div>
  )
}