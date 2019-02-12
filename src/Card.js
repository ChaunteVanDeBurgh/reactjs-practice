import React from 'react';
import './Card.css';

class Card extends React.Component {
	render() {
		return (
			<div className="Card">
				<div className="Card-header">
					<h1>Hi, World!</h1>
				</div>
					<div className="Card-body">
						<p>Hello, World!</p>
					</div>
					<div className="Card-footer">
						<p>Goodbye, World!</p>
					</div>
			</div>
		)
	}
}

export default Card;