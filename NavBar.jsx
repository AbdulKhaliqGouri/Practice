import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"


export const NavBar=()=>{
    return(
        <div className="nav" >
            <Link to="/">Home</Link>
            <Link to="/data">e-Shop</Link>
            <Link to="/Counter">Counter</Link>
            <Link to="/Product">Products</Link>
            <Link to="/redux">Redux</Link>
        </div>

    )
}