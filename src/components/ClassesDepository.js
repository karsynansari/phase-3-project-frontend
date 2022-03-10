import React from "react";

function ClassesDepository({ yogaclass, setYogaClasses }) {

  function handleDelete() {
    console.log("clicked", yogaclass.id)
    fetch(`http://localhost:9292/yoga_class/${yogaclass.id}`, {
      method: "DELETE", 
    });
    setYogaClasses((currentYogaClasses) => 
    currentYogaClasses.filter(
      (oneyogaclass) => oneyogaclass.id !== yogaclass.id)
    );
  }
  return (
    <div className="classcards">
      <p class="classCardContent">Teacher: {yogaclass.teacher_name}</p>
      <p class="classCardContent">Class: {yogaclass.class_name}</p>
      <p class="classCardContent">Time: {yogaclass.class_time}</p>
      <button class="deleteButton" onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ClassesDepository;
