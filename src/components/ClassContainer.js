import React from "react";
import ClassesDepository from "./ClassesDepository";

function ClassContainer({ yogaclasses, setYogaClasses }) {

let renderYogaClasses = yogaclasses.map((yogaclass) => ( 
    <ClassesDepository 
      key={yogaclass.id} 
      yogaclass={yogaclass} 
      setYogaClasses = {setYogaClasses}/>
  ));

  return (
    <div>
      <div>{renderYogaClasses}</div>
    </div>
  );
}

export default ClassContainer;
