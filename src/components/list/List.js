import {Paper,Typography} from '@material-ui/core';
import Title from './Title';
import Card from '../Card';
import InputContainer from '../Input/InputContainer';
const List=()=>{
return(
    <div>
        <Paper>
            {/* <Typography>ToDO</Typography> */}
            <Title />
            <Card />
            <Card />
            <Card />
            <InputContainer />
        </Paper>
    </div>
);
}

export default List;