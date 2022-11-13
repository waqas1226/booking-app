import React, { useState } from "react";
import "./SingleSer.css";
import hotal1 from "../../../hotal1.JPG";
import bg4 from "../../../bg4.jpg";
import { ArrowBack, ArrowForward, ArrowRightOutlined, Close, LocationCity, LocationOn } from "@mui/icons-material";
import BNavbar from "../BNavbar";
import Subscribe from "../Subscribe/Subscribe";
import Options from "../Subscribe/Options/Options";
import SearchOp from "../Search/SearchOp/SearchOp";
import TopNav from "../TopNav";

function SingleSer(props) {
const Images=[hotal1,bg4,hotal1,bg4,hotal1,bg4];
const [open, setOpen]=useState(false)
const [index, setIndex]=useState(0)

const handleClick=(i)=>{
  setOpen(true)
setIndex(i)
}
const handleMove=(dir)=>{
  let newdir;
  if(dir==='l'){
   newdir=index===0?5:index-1;
  }
  else{
newdir=index===5?0:index+1;
  }
  setIndex(newdir)
}
console.log(index)
  return (
    <div>
      <TopNav/>
    <div className="SingleCont">
      
        {open&&<div className="Slider">
        <Close onClick={()=>setOpen(false)} className="sclose sicon"/>
        <ArrowBack onClick={()=>handleMove('l')} className="sicon"/>
        <img src={Images[index]} alt="hotal1" className="Simg" />
        <ArrowForward onClick={()=>handleMove('r')} className="sicon"/>
        </div>}

        {/* <BNavbar/> */}
      <div className="SingleWrp">
        <div className="Singledetails">
          <h2 className="h2">Tower Street Apartments</h2>
          <span className="note0"><LocationOn/> 1k from center</span>
          <span className="note">Excelent Location</span>
          <button className="reserve">See Availability</button>
        </div>
        <div className="images">
          {Images.map((image,i)=>
          <img src={image} alt="pic" className="Singleimg" onClick={()=>handleClick(i)}/>
          )}
        </div>
      <div className="Singlebottom">
        <div className="Singledesc">
            <h2>Description</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Reprehenderit architecto doloribus fugit minima pariatur, 
                ipsam, cumque voluptatem aliquam magnam mollitia harum, 
                dolores eos quas ipsum enim? Obcaecati perspiciatis quam sunt.
            </p>
        </div>
        <div className="package">
            <h3>Perfect for a 9-night stay</h3>
            <p>gsgshdgf hgjglh llhkkjkj ljlhjglh</p>
            <span><b>$900</b>(9 nights)</span>
          <button className="bk">Reserve or Book</button>

        </div>
        </div>
      </div>
      <Subscribe/>
      <Options/>
    </div>
          </div>
  );
}

export default SingleSer;
