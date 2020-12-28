import React from 'react';

import AppHeader from './components/common/AppHeader';
import AppFooter from './components/common/AppFooter';

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
				<Content pad color="white">
				<HTag tag="h2">Simple Bare Section</HTag>
				<p class="lead-text">Text!</p>
				</Content>
				<Content pad color="black">
					<HTag tag="h2"><span>Counters</span></HTag>
					<p class="lead-text">The counter concept. Has the SSOT method implemented, too.</p>
					<ListOfDoom />
				</Content>
			</main>
			<AppFooter />
		</React.Fragment>
	);

	

	
}

export default App;
