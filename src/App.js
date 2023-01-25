import './App.css'
import Student from './components/Student/Student'
import { useState } from "react"
import { studentListData } from './data/data'
function App() {

  const [studentList, setStudentList] = useState(studentListData)
  

  return (
  <div>
    {studentList.map((student) => (
      <Student key={student.name} student={student} />
    ))}
  </div>

  )
}

export default App
