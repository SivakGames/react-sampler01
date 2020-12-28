import React, { Component } from 'react';

class MagicButton extends Component
{
	state = { id: 1 }
	render()
	{	const {onDelete} = this.props;
		return (
			<React.Fragment>
				<div class="btns">
					<button type="button" className="pink" onClick={() => { this.updateID(); onDelete(this.state.id) }}>
						Delete
					</button>
				</div>
			</React.Fragment>
		);
	}
	updateID()
	{
		this.setState({ id: this.state.id + 1 });

	}
}

export default MagicButton;
