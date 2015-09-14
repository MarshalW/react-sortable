import React, { PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

export default class Card {
	render(){
		const { text } = this.props;

		return (
			<div style={style}>{text}</div>
		);
	}
}

