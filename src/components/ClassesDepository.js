import React from "react";

function ClassesDepository({ yogaclass }) {
  console.log(yogaclass);
  return (
    <div className = "classcards" >
      <p>Teacher: {yogaclass.teacher_name}</p>
      <p>Class: {yogaclass.class_name}</p>
      <p>Time: {yogaclass.class_time}</p>
    </div>
  );
}

export default ClassesDepository;
