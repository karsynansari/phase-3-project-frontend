import React from "react";

//click on div. in parent, create state in form
//send the set state function down to poses dropdown
//send an array of pose id

function PosesDropdown({ englishName, imgUrl, setPoseIds, pose }) {
  function handleClick() {
    // console.log("Clicked", pose.id);
    //State for pose ids is working. 
   setPoseIds((currentState) => [...currentState, pose.id])
  }
  return (
    <div onClick={handleClick}>
      <img src={imgUrl} className="poseCards" />
      {englishName} <br></br>
    </div>
  );
}

export default PosesDropdown;
