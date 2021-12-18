import React, { useEffect, useState } from 'react';

const Watch = () => {
    const [sec,setSec]=useState(0)
    const [min,setMin]=useState(0)
    const [hour,setHour]=useState(0)
    useEffect(()=>{
        let mySec=sec+1
        if (mySec===60){
            mySec=1
        }
        setTimeout (()=>setSec(mySec),1000)
    },[sec])
    useEffect(()=>{
        let myMin=min+1
        if (myMin===60){
            myMin=1
        }
        setTimeout (()=>setMin(myMin),1000*60)
    },[min])
    useEffect(()=>{
        let myHour=hour+1
        if (myHour===60){
            myHour=1
        }
        setTimeout (()=>setHour(myHour),60000*60)
    },[hour])
    return (
        <div>
            <h3>Sec</h3>
            <h3>{sec}</h3>
            <h2>MINUTE</h2>
            <h2>{min}</h2>
            <h1>HOUR</h1>
            <h1>{hour}</h1>
        </div>
    );
};

export default Watch;