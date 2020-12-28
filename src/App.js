import React from 'react';

import AppHeader from './components/common/AppHeader';

import Content from './components/common/content';
import HTag from './components/headings/headings';
import MagicButton from './components/common/magicButton';
import ListOfDoom from './components/common/listOfDoom';


var handleDelete = (target) =>
{	console.log("Hay", target);
}

function App()
{	let listParts = ["A","B"];



	return (
		<React.Fragment>
			<AppHeader />
			<main>
				<Content pad color="cyan">
					<HTag tag="h2"><span>Counters</span></HTag>
					<p>Edit <code>src/App.js</code> and save to reload.</p>
					<p><a
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer">Learn React</a></p>
					<ListOfDoom />
				</Content>
				<Content pad color="black">
					<HTag tag="h2"><span>Hmm</span><span>am...</span></HTag>
					<p>Text!</p>
					<MagicButton onDelete={handleDelete} />
				</Content>
			</main>
		</React.Fragment>
	);

	

	
}

export default App;
