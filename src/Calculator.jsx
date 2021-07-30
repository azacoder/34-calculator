import { useState } from "react";
import React from 'react'; 

export  const Calculator = () => { 
  
    const [inputValue1 , setInputValue1 ] = useState(0 );
    const [inputValue2 , setInputValue2 ] = useState(0 );
    const [count , setCount] = useState (0); 

    
    let inputHandler = (e) => { 
        console.log(e.target.value)

        if(e.target.name == "inputValue1") { 
            setInputValue1(e.target.value)
        }
        else{
            setInputValue2(e.target.value)
        }
    }    
  
    return (
        <>
        <h3>Calculator</h3>
        <hr/>
        <input name="inputValue1" onChange={inputHandler}  type="number" />
        <button onClick= {()=>{setCount(parseInt(inputValue1)+parseInt(inputValue2))}}>+</button>
        <button onClick={()=>{setCount(parseInt(inputValue1)-parseInt(inputValue2))}}>-</button>
        <button onClick={()=>{setCount(parseInt(inputValue1)*parseInt(inputValue2))} }>*</button>
        <button onClick={()=>{setCount(parseInt(inputValue1)/parseInt(inputValue2))}}>/</button>
        <input name="inputValue2" onChange={inputHandler}  type="number" />
        <div>
            result: {count}
        </div>
        <hr/>
        </>
    )
}