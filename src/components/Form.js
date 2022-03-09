import React, {useState } from 'react'
import PosesDropdown from './PosesDropdown'

const newYogaClassObj = {
  teacher: "",
  nameOfClass: "",
  classTime: ""
};

function Form({ poses }) {
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
        setNewYogaClass((existingYogaClasses) => [...existingYogaClasses, data])
      );

    setNewYogaClass(newYogaClassObj);
  }

  // console.log(poses)

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="form"
      >
        <div>
          <span className="form-name">
            <h1>New Class Form</h1>
          </span>
          <input
            className="form-item"
            type="text"
            name="teacher"
            value={newYogaClass.teacher}
            placeholder="Teacher's name.."
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="form-item"
            type="text"
            name="nameOfClass"
            value={newYogaClass.nameOfClass}
            placeholder="Class name.."
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="form-item"
            type="text"
            name="classTime"
            value={newYogaClass.classTime}
            placeholder="Class time.."
            onChange={handleChange}
          />
        </div>
        <PosesDropdown />
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

export default Form