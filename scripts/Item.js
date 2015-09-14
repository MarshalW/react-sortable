import React, { PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};

class Item {
	render(){
		const { text, connectDragSource } = this.props;
		return connectDragSource(
			<div style={style}>{text}</div>
		);
	}
}

const cardSource = {
  beginDrag(props) {
    return { id: props.id };
  }
};

const type='item';

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
}

const cardTarget = {
  hover(props, monitor) {
    const draggedId = monitor.getItem().id;

    if (draggedId !== props.id) {
      props.moveCard(draggedId, props.id);
    }
  }
};

module.exports = DragSource(type, cardSource, collect)(Item);
