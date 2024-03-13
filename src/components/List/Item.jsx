import React, { useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';


const ItemType = 'ITEM';

const Item = ({ id, name, url, index, moveItem, handleRemoveClick }) => {
    const [{ isDragging }, drag] = useDrag({
      type: ItemType, // Define the type here
      item: { id, index },
      collect: monitor => ({
        isDragging: monitor.isDragging(),
      }),
    });
  
    const [, drop] = useDrop({
      accept: ItemType,
      hover(item, monitor) {
        if (!dragRef.current) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        if (dragIndex === hoverIndex) {
          return;
        }
        moveItem(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });

   
  
    const dragRef = React.useRef(null);
    drag(drop(dragRef));
  
    return (
      <>
      <div
        ref={dragRef}
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move'
        }}
      >
        <img src={url} className='card' />
        <span className='d-none'>{id + 1} {name} {url}</span>
      </div>
      <span onClick={() => handleRemoveClick(id)}>X</span>
      </>

    );
  };

  export default Item;