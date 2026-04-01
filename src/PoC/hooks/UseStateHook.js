import { useState } from "react";

const UseStateHook = ()=>{

    const [counterWithUseState, setCounterWithUseState] = useState(0);
    let counter = 0; // normal variable

    return (
        <>
        {console.log('re-rendering')}
        <h1>useState Hooks </h1>


        <button onClick={()=>{
            counter++;
            console.log('counter', counter)
            }
        }>
            Increment with Normal variable
        </button> : {counter}
        <br />


        <button onClick={()=>{
            setCounterWithUseState(counterWithUseState + 1);
            console.log('counter with useState', counterWithUseState)
            }
        }>
            Increment With useState
        </button> : {counterWithUseState}
        </>
    )
}


export default UseStateHook;