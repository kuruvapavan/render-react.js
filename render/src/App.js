import React, { Component } from 'react';
export default class App extends Component {
state = {
	PawriDays: [
		{ id: '123s', Day: 'Monday' },
		{ id: '234r', Day: 'Saturday' },
		{ id: '12d5', Day: 'Sunday' },
    { id: '234d', Day: 'tuesday'}
	]
}

render() {
	const PartyDays = this.state.PawriDays.length
	const style = {
	'textAlign': 'center',
	'color': 'green'
	}

	// Return JSX code
	return (
	<div style={style}>
		<h1>I am User</h1>
		<p> We party: {PartyDays} days a week </p>
	</div>
	);
}
}
