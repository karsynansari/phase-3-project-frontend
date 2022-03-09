import React, {useState, useEffect} from 'react'
import Header from './Header'
import Form from './Form';
import ClassContainer from './ClassContainer';
const BASE_URL = "http://localhost:9292"
function App() {


  const [ poses, setPoses ] = useState([])  
  const [ yogaClasses, setYogaClasses ] = useState([])


  useEffect (() => {
    fetch(BASE_URL + "/yoga_classes")
    .then(r => r.json())
    // .then(data => console.log (data))
    .then(setYogaClasses)
  }, [])


  useEffect(() => {
    fetch (BASE_URL + "/poses")
    .then(r => r.json())
    // .then(data => console.log (data))
    .then(setPoses)

  },[])


  return (
    <div>
      <Header />
      <ClassContainer />
      <Form poses = {poses}/>
    </div>
  );
}

export default App