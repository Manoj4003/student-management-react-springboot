import React, { useState } from "react";
import "./AddStudent.css";
import { useNavigate } from "react-router-dom";
import StudentService from "../Service/StudentService";

export default function AddStudent() {

  const navigate = useNavigate();

  const [addStudent, setAddStudent] = useState({
    id: 0,
    name: "",
    age: 0
  });

  function onChangeHandeler(e) {
    const { name, value } = e.target;

    setAddStudent({
      ...addStudent,
      [name]:value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (addStudent.id <= 0 || addStudent.age <= 0) {
      alert("ID and Age must be greater than 0");
      return;
    }

    StudentService.saveStudent(addStudent)
      .then(() => {
        alert("Student Saved in DB ✅");
        navigate("/");
      })
      .catch((error) => {
        console.error("ERROR 👉", error);
        alert("Error while saving ❌");
      });
  }

  function handleCancel() {
    navigate("/");
  }

  return (
    <div className="form-container">
      <form className="student-form" onSubmit={handleSubmit}>

        <h2>Add Student</h2>

        <input
          type="number"
          name="id"
          placeholder="Enter Student ID"
          value={addStudent.id}
          onChange={onChangeHandeler}
          required
        />

        <input
          type="text"
          name="name"
          placeholder="Enter Student Name"
          value={addStudent.name}
          onChange={onChangeHandeler}
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Enter Student Age"
          value={addStudent.age}
          onChange={onChangeHandeler}
          required
        />

        <div className="button-group">
          <button type="submit" className="save-btn">Save</button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}
