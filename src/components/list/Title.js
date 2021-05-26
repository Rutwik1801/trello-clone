import React, { Component }  from 'react';
import { InputBase, Typography } from "@material-ui/core"
import {useState,useContext} from 'react';
import storeAPI from '../../utils/storeAPI' 
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import MoreHorizIcon from '@material-ui/icons'
const Title=({title,listId})=>{
    const [newTitle,setNewTitle]=useState(title);
    const [open,setOpen]=useState(false);
   const {updateListTitle}=useContext(storeAPI);    
    const changeHandler=(event)=>{
     setNewTitle(event.target.value);
    }

    const clickHandler=()=>{
        setOpen(true);
    }
    const blurHandler=()=>{
        updateListTitle(newTitle,listId);
        setOpen(false);
    }

return(
    <div>
    {open?
        <div>
          <InputBase value={newTitle} onChange={changeHandler} onBlur={blurHandler}></InputBase>
        </div>:
        <div>
        <Typography onClick={clickHandler}>{newTitle}</Typography>
        </div>}
        {/* <MoreHorizIcon></MoreHorizIcon> */}
    </div>
);
}

export default Title;