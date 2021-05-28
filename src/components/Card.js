import React from 'react';
import './Card.css';
import { Draggable } from 'react-beautiful-dnd';


const Card = ({ title, index, id, designation, cardName,cardImg }) => {
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
                                <img className="image" 
                                src={cardImg}
                                // src='https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U' 
                                alt="no img" ></img>
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