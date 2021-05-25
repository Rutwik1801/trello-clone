import { InputBase, Typography } from "@material-ui/core"
import {useState} from 'react';
// import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import MoreHorizIcon from '@material-ui/icons'
const Title=()=>{
    const [title,setTitle]=useState("todo");
    const [open,setOpen]=useState(false);
    
    const changeHandler=(event)=>{
     setTitle(event.target.value);
    }

    const clickHandler=()=>{
        setOpen(true);
    }

return(
    <div>
    {open?
        <div>
          <InputBase onChange={changeHandler}></InputBase>
        </div>:
        <div>
        <Typography onClick={clickHandler}>{title}</Typography>
        </div>}
        {/* <MoreHorizIcon></MoreHorizIcon> */}
    </div>
);
}

export default Title;