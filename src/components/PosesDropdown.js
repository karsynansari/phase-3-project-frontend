import React from "react";


function PosesDropdown({ englishName, imgUrl, setPoseIds, pose }) {
  function handleClick() {
    console.log("Clicked", pose.id);
  }
  return (
    <div onClick={handleClick}>
      <img src={imgUrl} className="poseCards" />
      {englishName} <br></br>
    </div>
  );
}

export default PosesDropdown;
