import React, { useEffect, useState } from 'react'
import StudentService from '../Service/StudentService'
import './ListofStudents.css'
import { useNavigate } from 'react-router-dom'

export default function ListofStudents() {

  const [students, setStudents] = useState([])
  const navigate=useNavigate();

  useEffect(() => {
    StudentService.getAllStudents().then((res) => {
      setStudents(res.data)
    })
  }, [])
 function addStudent()
    {
    navigate("/addStudent")
  }
  return (
   
  <div className="table-container">
    <h1>Student List</h1>
    <button className='btn btn-primary ' onClick={addStudent}>Add Student</button>
    <table className="student-table">
      <thead>
        <tr>
          <th>Student Id</th>
          <th>Student Name</th>
          <th>Student Age</th>
        </tr>
      </thead>

      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan="3">No Students Found</td>
          </tr>
        ) : (
          students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
  )
}
