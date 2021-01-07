import React from 'react';

const List = (props) =>{
  

    return(
        <>
        <div className="lstyle">
        <button onClick={()=>{
            props.onSelect(props.id);
        }}> - </button>
        <li>{props.data}</li>
        </div>
         </>
    )
}

export default List;