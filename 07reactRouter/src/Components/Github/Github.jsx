import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Github (){
    const [data,setData] = useState([])
    useEffect (()=>{
        fetch('https://github.com/user/Bhargav1996')
        .then((res)=>{
            res.json
        }).then((data)=>{
            console.log(data);
            setData(data)
        })
    },)
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-xl">Github Followers: {data.followers} </div>
    )
}

export default Github