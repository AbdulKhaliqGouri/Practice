import React, { useState } from 'react';

const Toggle = () => {
    const [color,setColor]=useState("black")


    return (
        <div style={{background:color}} >
            <button onClick={()=>setColor(color==="grey" ? "yellow" : "grey")} >{color==="grey"?"On":"off"}</button>
        </div>
    );
};

export default Toggle;