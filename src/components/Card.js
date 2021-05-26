import React, { Component }  from 'react';
import {Paper} from '@material-ui/core';
import './Card.css';
import { Draggable } from 'react-beautiful-dnd';
const Card=({title,index,id,designation})=>{
return(
    <Draggable draggableId={id} index={index}>
    {(provided)=>{return (
        <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} className='enclosing-div'>
           <div className='enclosing-div__1'>
               {designation}
           </div>
          
        <div className='enclosing-div__2'>
            {/* Making Todo component */}
            {title}
        </div>
    </div>)
    }}

    </Draggable>
);
}

export default Card;