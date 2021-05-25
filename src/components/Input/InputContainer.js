import { Typography,Paper, Collapse } from "@material-ui/core"
import InputCard from "./InputCard"
import {useState} from 'react';

const InputContainer=()=>{
    const [open,setOpen]= useState(false);

    const clickHandler=()=>{
        setOpen(true);
    }
return(
    <div>

    <Collapse in={open}>
    <InputCard setOpen={setOpen}/>
    </Collapse>


    <Collapse in={!open}>
    <Paper>
            <Typography onClick={clickHandler}>Add AN Item</Typography>
        </Paper>
    </Collapse>
    </div>
);
}

export default InputContainer;