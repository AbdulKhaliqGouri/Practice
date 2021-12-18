import React, {useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { DataItem } from "./DataItem";
import { Row, Col, Button } from "react-bootstrap";
import { width } from "dom-helpers";
import axios from "axios";


export const DataList = () => {
  const seleProds=useSelector(state=>state.productReducer.products)
  const dispatch=useDispatch()
  const [data,setData]=useState([])
  const [filtData,setFiltData]=useState(data)
  const [txtSearch,setTxtSearch]=useState("")
 const handelSearch=()=>{
   const filteredDatas=data.filter(item=> item.title.toUpperCase().includes(txtSearch.toUpperCase().trim()))
   txtSearch !=="" ? setFiltData(filteredDatas) : setFiltData(data);
   
 }
 const getData = async()=>{
   if(seleProds){
     setData(seleProds);
   }else{
   const result = await axios.get("https://fakestoreapi.com/products")
   setData(result.data)
   dispatch({
     type:"ADD_PRODUCTS",
     data:result.data
   });
  }
 }
 useEffect(()=>{
 getData()
 },[])
 
 useEffect(()=>{
 handelSearch();
 },[txtSearch,data])

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
        {filtData.map((item, index) => (
          <Col>
            <DataItem item={item} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
