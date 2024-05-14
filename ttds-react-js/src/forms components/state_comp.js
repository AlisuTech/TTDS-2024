import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const StateComp = () => {
    const [counter, counterChange]=useState(0)
    const [counter2, counterChange2]=useState(0)
    useEffect(()=>{
        setTimeout(()=>counterChange(counter+1),1000)
        setTimeout(()=>counterChange2(counter2+1),1000)
        GetTable(counter)
    },[counter,counter2])
    return (
        <div>
            <p>{counter}</p>
            <p>{counter2}</p>
        </div>
    );
}
async function GetTable(counter){
    return [
        {
            name:"-",
            value:"--"
        }
    ]
}
export default StateComp;

//Use Effect - For running an action within your components
//Use Effect - Helps to run an action n times
//Use Effect - Helps to run action when a variable changes

// Re-Render your computer