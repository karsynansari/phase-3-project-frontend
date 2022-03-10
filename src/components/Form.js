import React, {useState } from 'react'
import PosesDropdown from './PosesDropdown'

const newYogaClassObj = {
  teacher: "",
  nameOfClass: "",
  classTime: "", 
  poseCard: []
};

function Form({ poses, setYogaClasses }) {
  const [newYogaClass, setNewYogaClass] = useState(newYogaClassObj);

  function handleChange(e) {
    setNewYogaClass((newYogaClassState) => ({
      ...newYogaClassState,
      [e.target.name]: e.target.value,
    }));
  }
  
  function handleClick() {
    console.log("pose card clicked!")
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/yoga_class", {
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
  return <PosesDropdown 
    englishName = {p.english_name}
    key = {p.id}
    imgUrl = {p.img_url}
    sanskritName = {p.sanskrit_name}
  />
})

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
                name="teacher"
                value={newYogaClass.teacher}
                placeholder="Teacher's name:"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="form-item"
                type="text"
                name="nameOfClass"
                value={newYogaClass.nameOfClass}
                placeholder="Class name:"
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                className="form-item"
                type="text"
                name="classTime"
                value={newYogaClass.classTime}
                placeholder="Class time:"
                onChange={handleChange}
              />
            </div>
          </div>
          {/* card render */}
          <div className="rightSideOfForm">
            <ul
              className="poseCardForm"
              type="button"
              name="poseCard"
              value={newYogaClass.poseCard}
              onClick={handleClick}
            >
            {poseCardRender}
            </ul> 
          </div>
        </div>
        <input
          className="form-submit"
          type="submit"
          value="Create your Class!"
        />
      </form>
    </div>
  );
}

export default Form