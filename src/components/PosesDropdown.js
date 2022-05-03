import React from "react";

//click on div. in parent, create state in form
//send the set state function down to poses dropdown
//send an array of pose id

function PosesDropdown({ english_name, img_url, setPoseIds, handleClick}) {
  


  //this is the click event for the pose card = > this array is now in poseId's - 
  // next is a post to the back end
  // body is the info we want to post
  // this body context should have the pose object k/v pairs dynamically added - which should be accessible here via props
  
  



  return (
    <div onClick={handleClick}>
      <img src={img_url} className="poseCards" />
      {english_name} <br></br>
    </div>
  );
  }

export default PosesDropdown;

// create state
// push that state into a new array
// pose id's go into the params, then each one create an instance 