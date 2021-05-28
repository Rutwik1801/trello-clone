import React from 'react';
import {dataSliceActions} from '../../store/data-slice';
import {useDispatch} from 'react-redux';
import {  Typography } from "@material-ui/core"
import {useState} from 'react';
import './Title.css';

const Title=({title,listId})=>{
    const dispatch=useDispatch();
    const [newTitle,setNewTitle]=useState(title);
    const [open,setOpen]=useState(false);
    const changeHandler=(event)=>{
     setNewTitle(event.target.value);
    }

    const clickHandler=()=>{
        setOpen(true);
    }
    const blurHandler=()=>{
        dispatch(dataSliceActions.updateTitle({
            id:listId,
            title:newTitle
        }))
        setOpen(false);
    }

return(
    <div>
    {open?
        <div>
          <input type="text" value={newTitle} onChange={changeHandler} onBlur={blurHandler}></input>
        </div>:
        <div>
        <Typography onClick={clickHandler}>{newTitle}</Typography>
        </div>}
    </div>
);
}

export default Title;