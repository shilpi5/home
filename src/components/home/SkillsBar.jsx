import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled }) {
  return (
    <div className="shadow" >
       
         <p className="p">{skill} </p>
  
      {/* <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
      /> */}
    </div>
  );
}

export default SkillsBar;
