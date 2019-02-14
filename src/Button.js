import React from 'react';
import './Button.css';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = { color: 'red' };
	}
	handleClick() {
		alert('Hello, World... ALERT!');
	}
	render() {
		return (
			<div className="Button" onClick={this.handleClick}>{this.state.color}</div> 
		);
	}
}

export default Button;