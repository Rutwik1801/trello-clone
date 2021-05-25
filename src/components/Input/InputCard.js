import {Paper, InputBase } from "@material-ui/core"


const InputCard=({setOpen})=>{
    const clickHandler=()=>{
        setOpen(false);
    }
return(
<div>
    <Paper>
        <InputBase multiline fullWidth placeholder="Enter your details" onBlur={()=>{setOpen(false)}} />
    </Paper>
    <div>
        <button onClick={clickHandler}>Add Card</button>
    </div>
    <div>
        <button onClick={clickHandler}>X</button>
    </div>
</div>
);
}

export default InputCard;