import React, {useId} from "react"

function InputBox ({
    // It will take two input Lable and  class name 
    lable,
    amount,
    onAmountChnage,
    onCurrencyChnage,
    currenyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className ="",
}){
    const amountInputId = useId()

     return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <lable htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {lable}
                </lable>
                <input id={amountInputId} className="outline-none w-full bg-transparent py-1.5"
                       type="number"
                       placeholder="Amount" 
                       disable={amountDisable}
                       value={amount}  
                       onChange={(e)=>{onAmountChnage && onAmountChnage(Number(e.target.value))}}            
                /> 
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Curreny Type</p>
                <select className="rounded-lg px-1 py-1 bg-grey-100 cursor-pointer outline-none"
                        value={selectCurrency}
                        onChange={(e)=>{onCurrencyChnage && onCurrencyChnage(Number(e.target.value))}}
                        disabled ={currencyDisable}
                    >
                      {currenyOptions.map((Currency)=>{
                        <option key={Currency} value={Currency}>
                            {Currency}
                        </option>
                      })}  
                </select>
            </div>
        </div>
    )

}

export default InputBox;