import React, { Component } from 'react';

import ListItemOfDoom from './listItemOfDoom';

class ListOfDoom extends Component 
{
	state = 
	{	listParts: [
			{caption: "A", value: 0},
			{caption: "B", value: 0},
			{caption: "C", value: 2},
			{caption: "D", value: 0},
		],
	}

//.......................................
	constructor(props)
	{	super(props);
	}

	handleIncrement = (part) =>
	{	const parts = [...this.state.listParts];
		const index = parts.indexOf(part);
		parts[index] = {...part}; 
		parts[index].value++; 
		this.setState({listParts: parts});

	}


	render() { 
		return (
		<React.Fragment>
			<ul>
			{	
				this.state.listParts.map(
					(part,i) => 
					(	<ListItemOfDoom key={"id" + i} onIncrement={this.handleIncrement} parts={part} />
					)
				)
			}
			</ul>
		</React.Fragment>

		);
	}
}
 
export default ListOfDoom;
