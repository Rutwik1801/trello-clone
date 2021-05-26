import { SettingsInputAntenna } from '@material-ui/icons';
import React, { Component }  from 'react';
import {useState} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import {v4 as uuid} from 'uuid';
// import logo from './logo.svg';
import './App.css';
import InputContainer from './components/Input/InputContainer';
import List from "./components/list/List";
import store from "./utils/store";
import StoreAPI from './utils/storeAPI';
function App() {
  const [data,setData]=useState(store);
  // ========================
  // ============================
  const addMoreCard=(title,listId,cardDesignation)=>{
    const newCardId=uuid();
    const newCard={
      id:newCardId,
      title,
      designation:cardDesignation
    }
    const list=data.lists[listId];
    list.cards=[...list.cards,newCard];

    const newState={
      ...data,
      lists:{
        ...data.lists,
        [listId]:list
      }
    }
    setData(newState);
    console.log(newCardId);
    // console.log(title,listId);
  };

  // ======================
  // ===================

//  ========================
// ===========================
const addMoreList=(title)=>{
  const newListId=uuid();
const newList={
  id:newListId,
  title,
  cards:[]
}
const newState={
  listIds:[...data.listIds,newListId],
  lists:{
    ...data.lists,
    [newListId]:newList
  }
}
setData(newState);
}
// ==============================
// ============================

// ======================
// ======================
const updateListTitle=(title,listId)=>{
  const list=data.lists[listId];
  list.title=title;
  const newState={
    ...data,
    lists:{
      ...data.lists,
      [listId]:list
    }
  }
  setData(newState);
console.log(title);
}
// ==================
// ==================

const onDragEnd=(result)=>{
const {destination,source,draggableId}=result;
console.log(destination,source,draggableId);
if(!destination){
  return;
}
const sourceList=data.lists[source.droppableId];
const destinationList=data.lists[destination.droppableId];
const draggingCard=sourceList.cards.filter((card)=>
  card.id===draggableId
)[0];
if(source.droppableId===destination.droppableId){
sourceList.cards.splice(source.index,1);
destinationList.cards.splice(destination.index,0,draggingCard);
// console.log(sourceList);
const newState={
  ...data,
  lists:{
    ...data.lists,
    [sourceList.id]:destinationList
  }
}
setData(newState);
} else{
  sourceList.cards.splice(source.index,1);
  destinationList.cards.splice(destination.index,0,draggingCard);
  const newState={
    ...data,
    lists:{
      ...data.lists,
      [sourceList.id]:sourceList,
      [destinationList.id]:destinationList
    }
  }
  setData(newState);
}
}

  return (
    <StoreAPI.Provider value={{addMoreCard,addMoreList,updateListTitle}}>
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
    {data.listIds.map((listId) =>{
      const list=data.lists[listId]
      return <List list={list} key={listId} />
    })}
    <InputContainer type="list" />
    </div>
    </DragDropContext>
     </StoreAPI.Provider>

  );
}

export default App;
