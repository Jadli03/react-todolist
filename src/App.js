import React, { useState } from 'react';
import List from './List';

const App = () =>{

  const [list,seti] = useState("");
  const [item,setl] = useState([]);

    const itemname = (event) =>{
      let value = event.target.value;
        seti(value);
    }

    const add = () =>{
      if(list !== "")
      {
        setl((old)=>{
          return [...old, list]
      });
      seti("");
      } 
    }
    const del = (id) => {
         setl((old) =>{
          return old.filter((arr,i) =>{
              return i!==id;
          }
          )
         })
    }
  return (
    <>
      <div className="main">
        <div className="container">
            <h1>Todo List</h1>
            <br />
           <input 
           type="text" 
           placeholder="Add Item"
           value={list}
           onChange={itemname}
           />
          <button onClick={add}> + </button>
          <ol>
            {/* <li>{list}</li> */}
            {item.map((val,i)=>{
              return <List key={i} id={i} data={val} onSelect={del}/>
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;