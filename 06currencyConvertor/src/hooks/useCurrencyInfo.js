import { useEffect, useState } from "react";


function useCurrenyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://api.frankfurter.app/currencies/${currency}`)
             
        .then((res)=>{
            res.json()
        })
        .then((res)=>{
            setData(res[currency])
        })
        console.log(data);
    },[currency])
    console.log(data);
    return data
}
//https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
export default useCurrenyInfo