import React from 'react';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
const List = (props) =>{
  

    return(
        <>
        <div className="lstyle">
        <button onClick={()=>{
            props.onSelect(props.id);
        }}> <RemoveCircleIcon /> </button>
        <li>{props.data}</li>
        </div>
         </>
    )
}

export default List;