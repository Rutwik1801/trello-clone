import {createSlice} from '@reduxjs/toolkit';
import data from './store';
const dataSlice=createSlice({
    name:'allData',
    initialState:{data},
    reducers:{
        addMoreCard(state,actions) {
            state.data.lists[actions.payload.listId].cards.push({
                id:actions.payload.id,
                title:actions.payload.title,
                name:actions.payload.name,
                designation:actions.payload.designation
            })

            console.log(state.data);
        },
        addMoreList(state,action) {

             const list=action.payload;

            state.data.listIds.push(list.id);
            state.data.lists[list.id]={
                id:list.id,
                title:list.title,
                cards:[]
            }

            console.log(state.data, list.id);
        },
        updateTitle(state,action) {
                    const list=action.payload;
                    state.data.lists[list.id].title=list.title;
                    // console.log(state.data.lists[list.id].title=list.title);
        },
        changePosition(state,action) {
            const list=action.payload;
            state.data.lists[list.id]=list.destinationList
        },
        changePositionList(state,action) {
           const list=action.payload;
           state.data.lists[list.sourceId]=list.sourceList;
           state.data.lists[list.destinationListId]=list.destinationList
        }
    }

});


export const dataSliceActions=dataSlice.actions;
export default dataSlice;