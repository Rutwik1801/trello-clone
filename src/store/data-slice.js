import {createSlice} from '@reduxjs/toolkit';
import data from './store';


const dataSlice=createSlice({
    name:'allData',
    initialState:data,
    reducers:{
        addMoreCard(state,actions) {

            state.lists[actions.payload.listId].cards.push({
                id:actions.payload.id,
                title:actions.payload.title,
                name:actions.payload.name,
                designation:actions.payload.designation,
                image:actions.payload.image
            })

        },
        addMoreList(state,action) {

             const list=action.payload;

            state.listIds.push(list.id);
            state.lists[list.id]={
                id:list.id,
                title:list.title,
                cards:[]
            }

         
        },
        updateTitle(state,action) {
                    const list=action.payload;
                    state.lists[list.id].title=list.title;
                  
        },
        changePosition(state,action) {
            const dragActions=action.payload;
            // if the card is moved in the same list
            if(dragActions.droppableIdStart===dragActions.droppableIdEnd){
            // list id of the lsit in which the card is moved in
            const  list=state.lists[dragActions.droppableIdStart];
            //    card id of the card that is being moved
               const card=list.cards.splice(dragActions.droppableIndexStart,1);
              list.cards.splice(dragActions.droppableIndexEnd,0,...card);
              state.lists[dragActions.droppableIdStart]=list
            

            } else{
                // list id of the source list
                const listStart=state.lists[dragActions.droppableIdStart];
                // id of the card being moved
                const card=listStart.cards.splice(dragActions.droppableIndexStart,1);
                // list id of the destination list
                const listEnd=state.lists[dragActions.droppableIdEnd];
                listEnd.cards.splice(dragActions.droppableIndexEnd,0,...card);
                // changing the lists 
                state.lists[dragActions.droppableIdStart]=listStart;
                state.lists[dragActions.droppableIdEnd]=listEnd;
            }
          
        },

    }

});


export const dataSliceActions=dataSlice.actions;
export default dataSlice;