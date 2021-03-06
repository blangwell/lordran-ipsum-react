import { useState, useEffect, useRef } from 'react';
import ipsumChunks from './ipsum';
// import { CSSTransition, Transition } from 'react-transition-group';
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { Modal } from 'react-bootstrap';

function shuffleArray(arr) {
	let currentIdx = arr.length;
	let randomIdx;
	while (currentIdx !== 0) {
		randomIdx = Math.floor(Math.random() * currentIdx);
		currentIdx--;
		[arr[currentIdx], arr[randomIdx]] = [arr[randomIdx], arr[currentIdx]];
	}
	return arr;
}

export default function NewLordranIpsum() {
	const [ipsum, setIpsum] = useState('');
	const [copied, setCopied] = useState(false);
	const modalRef = useRef(null);
	
	useEffect(() => {
		let ipsumString = "";
		let shuffledChunks = shuffleArray(ipsumChunks).slice(0, 12)
		shuffledChunks.forEach(chunk => ipsumString += chunk);
		setIpsum(ipsumString);
	}, []);

	function handleCopy() {
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	}
	
	return (
		<>
			<div className="ipsumContainer">
				{ipsum}
			</div>
			<CopyToClipboard text={ipsum.slice(100)}
				onCopy={() => handleCopy()}>
				<button className="copyButton">Copy</button>
			</CopyToClipboard>
			{/* setting copied back to false will hide the modal */}
			{ copied ? <div className="youCopiedModal" onClick={() => setCopied(false)}>YOU COPIED</div> : null }
		</>
	)
}