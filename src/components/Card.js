import React from 'react';
import Logo from '../2VzVJBB.jpg';

import './Card.css';
import { Draggable } from 'react-beautiful-dnd';


const Card = ({ title, index, id, designation, cardName }) => {
    return (
        <Draggable draggableId={id} index={index} >
            {(provided) => {
                return (
                    <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps} className='enclosing-div'>
                        <div className='enclosing-div__1'>
                            <p> {designation}</p>
                        </div>
                        <div className='enclosing-div__2'>
                            {/* Making Todo component */}
                            <div className="float-img">
                                <img className="image" src={Logo}></img>
                            </div>
                            <div>
                                <p style={{ fontWeight: "bold" }}>{cardName}</p>
                                <p className="para-color">{title}</p>
                            </div>
                        </div>
                    </div>
                    )
            }}

        </Draggable>
    );
}
// const Card = ({ title, index, id, designation, cardName }) => {
//     return (

//                     <div  className='enclosing-div'>
//                         <div className='enclosing-div__1'>
//                             <p> {designation}</p>
//                         </div>
//                         <div className='enclosing-div__2'>
//                             {/* Making Todo component */}
//                             <div className="float-img">
//                                 <img className="image" src={Logo}></img>
//                             </div>
//                             <div>
//                                 <p style={{ fontWeight: "bold" }}>{cardName}</p>
//                                 <p className="para-color">{title}</p>
//                             </div>
//                         </div>
//                     </div>

//     );
// }

export default Card;