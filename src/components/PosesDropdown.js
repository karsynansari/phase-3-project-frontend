import React from "react";


function PosesDropdown({ english_name, img_url, setPoseIds, handleClick}) {
  




  return (
    <div onClick={handleClick}>
      <img src={img_url} className="poseCards" />
      {english_name} <br></br>
    </div>
  );
  }

export default PosesDropdown;

