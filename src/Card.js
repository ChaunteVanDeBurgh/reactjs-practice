import React from 'react';
import './Card.css';
import Button from './Button';

class Card extends React.Component {
	render() {
		return (
			<div className="Card" id="myCard">
				<div className="Card-header">
					<h1>Hi, World!</h1>
				</div>
				<div className="Card-body">
					<p>Hello, World!</p>
				</div>
				<div className="Card-footer">
					<Button />
				</div>
			</div>
		)
	}
}

export default Card;