import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import OutgoingForm from './components/OutgoingForm';
import OutgoingList from './components/OutgoingList';

function App() {
	const [outgoing, setOutgoing] = useState([]);
	const [totalOutgoing, setTotalOutgoing] = useState(0);

	useEffect(() => {
		let temp = 50000;
		for(let i = 0; i < outgoing.length; i++) {
			temp -= parseInt(outgoing[i].price);
		}

		setTotalOutgoing(temp);
	}, [outgoing]);
	

	return (
		<div className="App">
			<Header totalOutgoing={totalOutgoing} />
			<OutgoingForm outgoing={outgoing} setOutgoing={setOutgoing} />
			<OutgoingList outgoing={outgoing} setOutgoing={setOutgoing} />
		</div>
	);
}

export default App;
