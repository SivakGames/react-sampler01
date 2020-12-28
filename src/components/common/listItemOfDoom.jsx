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
					<p>{parts.value}</p>
					<div class="btns"><button type="button" onClick={() => onIncrement(parts)}>+1</button></div>
				</li>
			</React.Fragment>

		);
	}
}

export default ListItemOfDoom;
