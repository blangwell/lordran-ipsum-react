import { useState, useEffect } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './Textbox.css';
import ipsumChunks from './ipsum';

export default function TextBox(props) {
  const [textSnippet, setTextSnippet] = useState('');
  const [copied, setCopied] = useState(false);

  const generateIpsum = () => {
    // get 4 random numbers at a time
    let randomNums = [];
    for (let i = 0; i <= 4; i++) {
      randomNums.push(ipsumChunks[Math.floor(Math.random() * ipsumChunks.length) + 1]);
    }
    setTextSnippet(snippet => [...snippet, randomNums])
    console.log(randomNums)
  }

  const mapSnippet = textSnippet ? textSnippet.map(snippet => <p>{snippet}</p>) : null

  useEffect(() => {
    generateIpsum();
  }, [])

  return (
    <div className="textbox">
      {mapSnippet}
      <CopyToClipboard text={textSnippet ? textSnippet.join('') : null}
      onCopy={() => setCopied(true)}>
        <button>Copy to Clipboard</button>
      </CopyToClipboard>
      <p>{copied? 'Copied!' : null}</p>
    </div>
  )
}



