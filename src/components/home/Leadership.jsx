import React, { useState, useEffect, Profiler } from "react";
import Carousel from "react-bootstrap/Carousel";
var isFirst=true
const Leadership = ({ heading, message, img, imageSize }) => {
  return (
    
    <div
      id="workExperience"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
      
    >
     
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="row">
          <div className="col-md-1">
            {/* <p className="lead">{message}</p> */}
          </div>
          
          <div className="col-md-20" >
           <div style={{ background: "#232b2b"}} width={imageSize.width} >
           <img src={require("../../editable-stuff/NucleiFooterLogo-svg.png")} className="center" />
            </div> 
          

            <Carousel>
              {img.map((value, index) => {
                return (
                  
                  <Carousel.Item>
                    <img
                      className="f-bloc w-100"
                      src={value.img}
                      alt="First slide"
                      width={imageSize.width}
                      height={imageSize.height}
                    />
                    
                 
                     
                    <Carousel.Caption style={{transform:"translate(0,-10%)"}} >
                   
                      <h4 >{value.label}</h4>
                      <h5>{value.date}</h5>
                        {value.paragraph.split("-").map((item,ind)=><p id={ind} style={{textAlign:"left"}}  >{item}</p>)}
                       
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Leadership;
