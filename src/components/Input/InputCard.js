import React from 'react';
import { v4 as uuid } from 'uuid';
import {useDispatch} from 'react-redux';
import {dataSliceActions} from '../../store/data-slice';
import { useState } from 'react';
import './InputCard.css';

const InputCard = ({ setOpen, listId, type }) => {

    const dispatch=useDispatch();

    const [cardTitle, setCardTitle] = useState('');
    const [cardDesignation, setCardDesignation] = useState('');
    const [cardName, setCardName] = useState('');
     const [cardImage,setCardImage]=useState(null);
 
    const changeHandler = (event) => {
        setCardTitle(event.target.value);
    }
    const changeDesiHandler = (event) => {
        setCardDesignation(event.target.value);
    }
    const changeNameHandler = (event) => {
        setCardName(event.target.value);
    }
    const changeImageHandler=(event)=>{
         setCardImage(event.target.value);
    }
    const clickHandler = () => {
        if (type !== "list") {
            setOpen(false);
            dispatch(dataSliceActions.addMoreCard({
                id:uuid(),
                title:cardTitle,
                designation:cardDesignation,
                name:cardName,
                listId:listId,
                image:cardImage
            }))
            setCardTitle('');
            setCardName('');
            setCardDesignation('');
            setCardImage(null);
        }
         else {
            dispatch(dataSliceActions.addMoreList({
               id:uuid(),
                title:cardTitle,
                cards:[]
            }))
            setOpen(false);
            setCardTitle('');
        }
    }
    return (
        <div >
        <div className="input-container">
        <div className="margin-fields">
                <input type="text" value={cardTitle} className='inputBase'
                    placeholder={type !== 'list' ? "Enter your details" : "Enter List Title"}
                    onChange={changeHandler} />
            </div>
            <div className="margin-fields">
                {type !== "list" && <input type="text"
                    className='inputBase'
                    placeholder="Designation"
                    value={cardDesignation} onChange={changeDesiHandler} />}
            </div>
            <div className="margin-fields">
                {type !== "list" && <input type="text" className='inputBase'
                    placeholder="Name"
                    value={cardName} onChange={changeNameHandler} />}
            </div>
            <div className="margin-fields">
                {type !== "list" && <input type="file" className='inputBase'
                    placeholder="Uplaod Image"
                    // value={cardImage}
                     onChange={changeImageHandler}
                     />}
            </div>
        </div>
            <div className='btn-container'>
                <div>
                    <button className="add-card-btn" onClick={clickHandler}>
                        {type !== "list" ? "Add Card" : "Add List"}
                    </button>
                </div>
                <div className="margin-fields-left">
                    <button className="btn-remove" onClick={() => { setOpen(false) }}>X</button>
                </div>
            </div>
        </div>
    );
}

export default InputCard;