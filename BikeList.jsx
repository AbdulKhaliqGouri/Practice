import React, {useEffect, useState} from "react";
import { BikeItem } from "./BikeItem";
import { bikes } from "../services/bikes";
import { Row, Col, Button } from "react-bootstrap";
import { width } from "dom-helpers";


export const BikeList = () => {
  const [filtBike,setFiltBike]=useState(bikes)
  const [txtSearch,setTxtSearch]=useState("")
 const handelSearch=()=>{
   const filteredBikes=bikes.filter(item=> item.name.toUpperCase().includes(txtSearch.toUpperCase().trim()))
   txtSearch !=="" ? setFiltBike(filteredBikes) : setFiltBike(bikes);
   
 }
 useEffect(()=>{
 handelSearch();
 },[txtSearch])

  return (
    <div>
      <Row>
        <Col lg={8}>
          <input
            type="text"
            onChange={e=>setTxtSearch(e.target.value)}
            placeholder="Search..."
            style={{ width: "700px" }}
          ></input>
        </Col>
        
      </Row>
      <Row>
        {filtBike.map((item, index) => (
          <Col>
            <BikeItem item={item} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
