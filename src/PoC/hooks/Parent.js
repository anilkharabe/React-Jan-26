import { useState, useCallback } from "react";
import Child from "./Child"

const Parent = ()=>{
    const [count, setCount] = useState(1);
    const [toggle, setToggle] = useState(true);

    const handleClick = useCallback(()=>{
        console.log("Button clicked from parent")
    },[])

    return(
        <>
           <h1> Parent Component </h1>
            <h3>Count: {count}</h3>

            <button onClick={()=>{
                console.log("increase count", count)
                setCount(count + 1)
            }}>Increment Count</button> 

            <button onClick={()=>{
                console.log("!toggle", !toggle)
                setToggle(!toggle)
            }}>Toggle Switch</button> 
            <Child handleClick = {handleClick}/>
        </>
    )
}

export default Parent;