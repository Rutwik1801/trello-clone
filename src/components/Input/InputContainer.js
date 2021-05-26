import React, { Component }  from 'react';
import { Typography,Paper, Collapse } from "@material-ui/core"
import InputCard from "./InputCard"
import {useState} from 'react';

const InputContainer=({listId,type})=>{
    const [open,setOpen]= useState(false);

    const clickHandler=()=>{
        setOpen(true);
    }
return(
    <div>

    <Collapse in={open}>
    <InputCard setOpen={setOpen} listId={listId} type={type} />
    </Collapse>


    <Collapse in={!open}>
    <Paper>
            <Typography onClick={clickHandler}>{type!=="list"?"+Add A Card":"Add A List"}</Typography>
        </Paper>
    </Collapse>
    </div>
);
}

export default InputContainer;