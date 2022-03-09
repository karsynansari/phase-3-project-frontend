import React, {useState } from 'react'
import PosesDropdown from './PosesDropdown'






function Form( {poses} ) {





const poseCardRender = poses.map((p) => {
  return <PosesDropdown 
    englishName = {p.english_name}
    key = {p.id}
    imgUrl = {p.img_url}
    sanskritName = {p.sanskrit_name}
  />
})



  function handleChange (e) {
    console.log(e.target)
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    console.log('Clicked')
  } 


  return (
    <div>
      <form
        // onSubmit={handleSubmit}
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
            // value={}
            placeholder="Teacher's name.."
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            className="form-item"
            type="text"
            name="className"
            // value={}
            placeholder="Class name.."
            onChange={handleChange}
          />
        </div>
        {/* card render */}
        <ul className='poseCards'>
          {poseCardRender}
          </ul>
         
        <input className="form-submit" type="submit" value="Submit" placeholder="Create your Class!" onSubmit = {handleSubmit}/>
      </form>
    </div>
  );
}

export default Form