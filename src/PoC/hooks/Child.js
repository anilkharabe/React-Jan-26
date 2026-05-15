import { memo } from "react";
const Child = ({handleClick})=>{
    console.log('Component rendered from child');
    return((
        <>
            <h1> Child Component </h1>
            <button onClick={handleClick}>Click me from Child</button>
        </>
    ))
}

export default memo(Child);