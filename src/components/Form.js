import React, { useState } from "react";
import PosesDropdown from "./PosesDropdown";

const newYogaClassObj = {
  teacher_name: "",
  class_name: "",
  class_time: ""
};

function Form({ poses, setYogaClasses }) {
  const [newYogaClass, setNewYogaClass] = useState(newYogaClassObj);

  function handleChange(e) {
    // console.log(e.target)
    setNewYogaClass((newYogaClassState) => ({
      ...newYogaClassState,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log('Clicked')
    fetch("http://localhost:9292/yoga_classes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newYogaClass),
    })
      .then((response) => response.json())
      .then((data) =>
        setYogaClasses((existingYogaClasses) => [...existingYogaClasses, data])
      );

    setNewYogaClass(newYogaClassObj);
  }

  const poseCardRender = poses.map((p) => {
    return (
      <PosesDropdown
        englishName={p.english_name}
        key={p.id}
        imgUrl={p.img_url}
        sanskritName={p.sanskrit_name}
      />
    );
  });

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-name">
          <span>New Class Form</span>
        </div>
        <div className="form-info">
          <div className="leftSideOfForm">
            <div>
              <input
                className="form-item"
                type="text"
                name="teacher_name"
                value={newYogaClass.teacher_name}
                placeholder="Teacher's name:"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="form-item"
                type="text"
                name="class_name"
                value={newYogaClass.class_name}
                placeholder="Class name:"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="form-item"
                type="text"
                name="class_time"
                value={newYogaClass.class_time}
                placeholder="Class time:"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* card render */}
          <div className="rightSideOfForm">
            <ul className="poseCardForm">{poseCardRender}</ul>
          </div>
        </div>
        <input
          className="form-submit"
          type="submit"
          value="Submit"
          placeholder="Create your Class!"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}

export default Form;
