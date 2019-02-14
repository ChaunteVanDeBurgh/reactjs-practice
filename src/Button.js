import React from 'react';
import './Button.css';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = { color: 'red' };
	}
	handleClick() {
		document.getElementById('myCard').style.backgroundColor = 'red';
	}
	render() {
		return (
			<div className="Button" onClick={this.handleClick}>{this.state.color}</div> 
		);
	}
}

export default Button;