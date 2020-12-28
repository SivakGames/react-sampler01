import React from 'react';
import logo from '../../logo.svg';


function AppHeader()
{
	return (
		<React.Fragment>
			<header>
				<div className="layout">
					<img src={logo} className="App-logo" alt="logo" />
					<p>React Skillz</p>
				</div>
			</header>
		</React.Fragment>
	);
}

export default AppHeader;
