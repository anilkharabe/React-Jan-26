import { useState, useMemo, memo } from "react"

const UseMemoHook = ()=>{
    const [count, setCount] = useState(1);
    const [toggle, setToggle] = useState(true);

    function heavyCalculation(num){
        console.log("start heavy calulation");
        for (let i = 0; i < 250000000; i++) {
        }
        console.log("ends heavy calulation");
        return num*2;
    }

    const doubleNumber = useMemo(()=>{
        return heavyCalculation(count)
    },[count]) 
 
    
    return(
        <>
        <h1>useMemo Hooks </h1>
            <h3>Count: {count}</h3>
            <h3>Doubled: {doubleNumber}</h3> 

            <button onClick={()=>{
                console.log("increase count", count)
                setCount(count + 1)
            }}>Increment Count</button> 

            <button onClick={()=>{
                console.log("!toggle", !toggle)
                setToggle(!toggle)
            }}>Toggle Switch</button> 
        </>
    )

}

export default memo(UseMemoHook)