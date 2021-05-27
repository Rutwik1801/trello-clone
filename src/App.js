import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import InputContainer from './components/Input/InputContainer';
import List from "./components/list/List";
import { dataSliceActions } from './store/data-slice';
import store from "./store/index";

function App() {

  const items = useSelector((state) => state.allData.data)
  // // ========================================
  // // Function for drag n drop
  // // ============================================

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    const sourceList = items.lists[source.droppableId];
    const destinationList = items.lists[destination.droppableId];
    const draggingCard = sourceList.cards.filter((card) =>
      card.id === draggableId
    )[0];
    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);

      // useDispatch(dataSliceActions.changePosition({
      //     id:sourceList.id,
      //     destinationList:destinationList
      // }))
      // const newState = {
      //   ...data,
      //   lists: {
      //     ...data.lists,
      //     [sourceList.id]: destinationList
      //   }
      // }
      // setData(newState);
    }
    else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, draggingCard);
      //   useDispatch(dataSliceActions.changePositionList({
      //     sourceId:sourceList.id,
      //     sourceList:sourceList,
      //     destinationListId:destinationList.id,
      //     destinationList:destinationList
      // }))
      // const newState = {
      //   ...data,
      //   lists: {
      //     ...data.lists,
      //     [sourceList.id]: sourceList,
      //     [destinationList.id]: destinationList
      //   }
      // }
      // setData(newState);
    }
  }
  // // ===========================================
  // // ===========================================


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

