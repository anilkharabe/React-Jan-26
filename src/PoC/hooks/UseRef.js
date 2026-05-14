import { useState, useRef } from "react";

const UseRefHook = ()=>{

    const [counterWithUseState, setCounterWithUseState] = useState(0);
    let counter = 0; // normal variable
    const counterWithUseRef = useRef(5);
    //counterWithUseRef = {
    // current : 0
    // }
    console.log("counterWithUseRef", counterWithUseRef)

    return (
        <>
        {console.log('re-rendering')}
        <h1>useRef Hooks </h1>


        <button onClick={()=>{
            setCounterWithUseState(counterWithUseState + 1);
            console.log('counter with useState', counterWithUseState)
            }
        }>
            Increment With useState
        </button> : {counterWithUseState}

        <br></br>

         <button onClick={()=>{
            counterWithUseRef.current += 1
            console.log('counter with useRef', counterWithUseRef)
            }
        }>
            Increment With useRef
        </button> : {counterWithUseRef.current}
        </>
    )
}


export default UseRefHook;