import React from 'react';
import Title from './Title';
import Card from '../Card';
import InputContainer from '../Input/InputContainer';
import './List.css';
import { Droppable } from 'react-beautiful-dnd';

const List = ({ list }) => {


    return (
        <div className='main-div'>
            <div className='main-div__paper'>
                <Title title={list.title} listId={list.id} />
                <Droppable droppableId={list.id}>
                    {(provided) => {
                        return (
                            <div
                                ref={provided.innerRef} {...provided.droppableProps}
                            >
                                {list.cards.map((card, index) => {
                                    return <Card key={card.id}
                                        title={card.title}
                                        id={card.id} index={index}
                                        designation={card.designation}
                                        cardName={card.name} />
                                })}
                                {provided.placeholder}
                            </div>
                            )
                    }}
                </Droppable> 
                <InputContainer listId={list.id} type="card" />
            </div>
        </div>
    );
}

export default List;