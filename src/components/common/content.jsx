import React, { Component } from 'react';

function Content(props)
{	let contentClass = "content-wrap ";
	contentClass += (props.pad) ? "pad " : " ";

	let bgColor = (typeof(props.color !== "undefined" && props.color !== null)) ? props.color : null;
	if(bgColor !== null)
		contentClass += bgColor;
	
	
//==============================================================
	return ( 
		<React.Fragment>
			<div className={contentClass}>
				<div className="content">
					{props.children}
				</div>
			</div>
		</React.Fragment>
	);
	


}

export default Content;

