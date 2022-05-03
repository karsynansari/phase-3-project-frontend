import React from "react";



function PosesDropdown({ english_name, img_url, setPoseIds, handleClick}) {
  





function PosesDropdown({ englishName, imgUrl, setPoseIds, pose }) {
  function handleClick() {
    // console.log("Clicked", pose.id);
    //State for pose ids is working. 
   setPoseIds((currentState) => [...currentState, pose.id])
  }

  return (
    <div onClick={handleClick}>
      <img src={img_url} className="poseCards" />
      {english_name} <br></br>
    </div>
  );
  }

export default PosesDropdown;

