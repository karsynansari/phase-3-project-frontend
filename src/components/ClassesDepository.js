import React from "react";

function ClassesDepository({ yogaclass, setYogaClasses }) {
  function handleDelete() {
    console.log("clicked", yogaclass.id);
    fetch(`http://localhost:9292/yoga_class/${yogaclass.id}`, {
      method: "DELETE",
    });
    setYogaClasses((currentYogaClasses) =>
      currentYogaClasses.filter(
        (oneyogaclass) => oneyogaclass.id !== yogaclass.id
      )
    );
  }
  return (
    <div className="classcards">
      <p className="classCardContent">Teacher: {yogaclass.teacher_name}</p>
      <p className="classCardContent">Class: {yogaclass.class_name}</p>
      <p className="classCardContent">Time: {yogaclass.class_time}</p>
      <span>
        <button
          className="deleteButton"
          id="deleteButton"
          onClick={handleDelete}
        >
          Cancel Your Class
        </button>
      </span>
    </div>
  );
}

export default ClassesDepository;
