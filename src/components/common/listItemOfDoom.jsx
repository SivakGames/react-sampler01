import React, { Component } from 'react';


class ListItemOfDoom extends Component 
{
	state = {}

	//.......................................
	render()
	{	const {parts, onIncrement} = this.props;
		return (
			<React.Fragment>
				<li>
					<div>
						<p>{parts.value}</p>
						<button type="button" onClick={() => onIncrement(parts)}>+1</button>
					</div>
				</li>
			</React.Fragment>

		);
	}
}

export default ListItemOfDoom;
