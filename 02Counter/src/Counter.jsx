import { useState } from "react"
import './App.css'


function Counter () {

    let [count,setCount] = cant(0)
    const addCount = ()=>{
        setCount(count+1)
    }
    const decCount = ()=>{
        setCount(count-1)
    }
    return (
        <>        
        <h1> Counter Web</h1>
        <h2> Counter Value{cant} </h2>

        <button onClick={addCount}>Add Value</button>
        <button onClick={decCount}>Decerase Value</button>
        </>

    )
}

export default Counter;