import { useState } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ipsumChunks from './ipsum';

export default function TextBox(props) {
  const [textSnippet, setTextSnippet] = useState('');
  const [copied, setCopied] = useState(false);

  return (
    <div className="textbox">
      <h2>Textbox {props.length}</h2>

      <CopyToClipboard text={'copy works?'}
      onCopy={() => setCopied(true)}>
        <button>Copy to Clipboard</button>
      </CopyToClipboard>

      <p>{copied? 'Copied!' : null}</p>
    </div>
  )
}



