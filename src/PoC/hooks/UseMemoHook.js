import { useState } from "react"

const UseMemoHook = ()=>{
    const [count, setCount] = useState(0);

   
    console.log("count", count);
    return(
        <>
        <h1>useMemo Hooks </h1>
        {count}
        </>
    )

}

export default UseMemoHook