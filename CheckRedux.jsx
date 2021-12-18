import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { Button } from "react-bootstrap";

export const CheckRedux=()=>{
    const selector=useSelector(state=>state.productReducer.products)
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch({
            type:"ADD_PRODUCTS",
            data:["Cat","Bat","Fat"],
        })    
        dispatch({
            type:"ADD_MYPRO",
            data:["Car","Bike","Flight"]
            
        })
    }
    return(
        <div>
        <Button onClick={handleClick} >Dispatch Me</Button>
        {selector.map((item)=>(
            <p>{item}</p>
        ))}
        </div>
    )
        
    
}