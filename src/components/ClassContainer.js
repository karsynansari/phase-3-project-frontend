import React from "react";
import ClassesDepository from "./ClassesDepository";

function ClassContainer({ yogaclasses }) {
  console.log(yogaclasses)

let renderYogaClasses = yogaclasses.map((yogaclass) => ( 
<ClassesDepository key={yogaclass.id} yogaclass={yogaclass} />));
  return (
    <div>
      <div>{renderYogaClasses}</div>
    </div>
  );
}

export default ClassContainer;
