import React, { useEffect, useState } from "react";
import StudentService from "../Service/StudentService";
import "./ListofStudents.css";
import { useNavigate } from "react-router-dom";

export default function ListofStudents() {

  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // ✅ ONLY CORRECT PLACE
  useEffect(() => {
    StudentService.getAllStudents()
      .then((res) => {
        console.log("Students:", res.data); // 👈 debug
        setStudents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function addStudent() {
    navigate("/addStudent");
  }

  function updateStudent(id) {
    navigate(`/updateStudent/${id}`);
  }

  function deleteStudent(id) {
    if (window.confirm("Are you sure?")) {
      StudentService.deleteStudent(id).then(() => {
        setStudents(students.filter(s => s.id !== id));
      });
    }
  }

  return (
    <div className="table-container">
      <div className="header-row">
        <h1>Student List</h1>
        <button className="add-btn" onClick={addStudent}>
          + Add Student
        </button>
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4">No Students Found</td>
            </tr>
          ) : (
            students.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.age}</td>
                <td>
                  <button onClick={() => updateStudent(s.id)}>Update</button>
                  <button onClick={() => deleteStudent(s.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
