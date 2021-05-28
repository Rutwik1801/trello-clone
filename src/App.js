import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import InputContainer from './components/Input/InputContainer';
import List from "./components/list/List";
import { dataSliceActions } from './store/data-slice';

function App() {

  const items = useSelector((state) => state.allData)
  const dispatch = useDispatch();
  // // ========================================
  // // Function for drag n drop
  // // ============================================
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    dispatch(dataSliceActions.changePosition({
      droppableIdStart: source.droppableId,
      droppableIdEnd: destination.droppableId,
      droppableIndexStart: source.index,
      droppableIndexEnd: destination.index,
      draggableId: draggableId
    }));

  }


  return (

    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        {items.listIds.map((listId) => {
          const list = items.lists[listId]
          return <List list={list} key={listId} />
        })}
        <InputContainer type="list" />
      </div>
    </DragDropContext>


  );
}

export default App;

