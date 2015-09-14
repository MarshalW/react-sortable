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
		const { text, connectDragSource, connectDropTarget,isDragging} = this.props;
		const opacity = isDragging ? 0 : 1;
		return connectDragSource(connectDropTarget(
			<div style={{ ...style, opacity }}>{text}</div>
		));
	}
}

const type='item';

const itemSource = {
  beginDrag(props) {
    return { id: props.id };
  }
};

function collectSource(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	};
}

const itemTarget = {
  hover(props, monitor) {
    const draggedId = monitor.getItem().id;

    if (draggedId !== props.id) {
      props.moveItem(draggedId, props.id);
    }
  }
};

function collectTaget(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget()
	};
}

module.exports = DragSource(type, itemSource, collectSource)(DropTarget(type,itemTarget,collectTaget)(Item));
