import { memo, useState } from "react";

const User = ({name, city})=>{
    const [count, setCount] = useState(0);
    return (
        <div className="border-solid">
            <h2> {name} </h2>
            <h3>Place: {city}</h3>
            <button onClick={()=>{
                setCount(count + 1)
            }}>Increase Count</button>
            <h1>Count : {count}</h1>
        </div>
    )
}

export default memo (User);