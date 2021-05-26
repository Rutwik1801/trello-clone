// import {useContext} from 'react';
import React, { Component }  from 'react';
import {Paper, InputBase } from "@material-ui/core"
import  {useState,useContext} from 'react';
import StoreAPI from '../../utils/storeAPI';


const InputCard=({setOpen,listId,type})=>{
    const [cardTitle,setCardTitle]=useState('');
    const [cardDesignation,setCardDesignation]=useState('');
   const {addMoreCard,addMoreList} = useContext(StoreAPI);

    const changeHandler=(event)=>{
         setCardTitle(event.target.value);
    }
    const changeDesiHandler=(event)=>{
        setCardDesignation(event.target.value);
    }
    const clickHandler=()=>{
        if(type!=="list"){
            setOpen(false);
            addMoreCard(cardTitle,listId,cardDesignation);
            setCardTitle('');
        } else{
            addMoreList(cardTitle);
            setOpen(false);
            setCardTitle('');
        }
    }
return(
<div>
    <Paper>
        <InputBase value={cardTitle} multiline fullWidth placeholder={type!=='list'?"Enter your details":"Enter List Title"} onBlur={()=>{setOpen(false)}} onChange={changeHandler} />
    </Paper>
    {type!=="list" && <InputBase placeholder="designation" value={cardDesignation}  onChange={changeDesiHandler}/>}
    <div>
        <button onClick={clickHandler}>{type!=="list"? "Add Card":"Add List"}</button>
    </div>
    <div>
        <button onClick={()=>{setOpen(false)}}>X</button>
    </div>
</div>
);
}

export default InputCard;