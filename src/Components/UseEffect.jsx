import { useEffect } from "react";
import { useState } from "react";


const UseEffect = () => {
    const [count,setCount] = useState (0);
    useEffect( () => {
        console.log("I am  useEffect")
    },[count])
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={() => {
                return setCount( (prevState => prevState + 1))
            }}> ++</button>
        </div>
    )
}
export default UseEffect;