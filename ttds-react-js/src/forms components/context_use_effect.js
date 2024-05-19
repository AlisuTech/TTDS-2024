import React from 'react';
import { useState } from 'react';
import { useEffect,useRef } from 'react';

const ContextUseEffect = () => {
    const [inputContent, inputContentChanged]=useState('')
    const [inputContent2, inputContentChanged2]=useState('')
    const scoreElement=useRef()
    useEffect(()=>console.log("Page re-rendered")) 
    useEffect(()=>{
        // Password Compatibility
        // Email Compatibility
    })
    return (
        <div>
            <input value={inputContent} onChange={(e)=>inputContentChanged(e.target.value)}/>
            <input value={inputContent2} onChange={(e)=>inputContentChanged2(e.target.value)}/>
            <input ref={scoreElement}/>
            <p>{inputContent}</p>
            <button onClick={()=>{
                alert(scoreElement.current.value)
            }}>Fetch Ref Value</button>
        </div>
    );
}

export default ContextUseEffect;
