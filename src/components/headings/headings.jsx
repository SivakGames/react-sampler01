import React, { Component } from 'react';


function HTag(props)
{	

//...............................................................
	let tag = props.tag ? props.tag : "div";
	let children = props.children ? props.children : "";
	let classes = {className: "heading1"};
	
//==============================================================
	return ( 
		<React.Fragment>
			{React.createElement(tag,classes,children)}
		</React.Fragment>
	);


//=============================================================
	



//	<button onClick={() => this.handleIncrement('underline')} type="button">Clicker</button>

//Event functions
/*	handleIncrement = (deco) =>
	{	this.setState({styles: {textDecoration: deco}});
	}
*/	

}

export default HTag;

