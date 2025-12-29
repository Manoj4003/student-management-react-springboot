import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../Service/StudentService";
import "./UpdateStudent.css";

export default function UpdateStudent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [updateStudent, setUpdateStudent] = useState({
    id: "",
    name: "",
    age: ""
  });

  const [loading, setLoading] = useState(true);

  // ✅ Load selected student details FIRST
  useEffect(() => {
    StudentService.getStudentById(id)
      .then((res) => {
        setUpdateStudent(res.data); // 👈 auto-fill inputs
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setUpdateStudent({
      ...updateStudent,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    StudentService.updateStudent(id, updateStudent)
      .then(() => {
        alert("Student Updated Successfully ✅");
        navigate("/dashboard"); // ✅ back to list
      })
      .catch((err) => {
        console.log(err);
        alert("Update Failed ❌");
      });
  }

  function handleCancel() {
    navigate("/dashboard");
  }

  // ✅ Loading state (good UX)
  if (loading) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Loading student details...
      </h2>
    );
  }

  return (
    <div className="update-container">
      <h1>Update Student</h1>

      <form onSubmit={handleSubmit}>
        <label>Student ID</label>
        <input
          type="number"
          name="id"
          value={updateStudent.id}
          disabled
        />

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={updateStudent.name}
          onChange={handleChange}
          required
        />

        <label>Age</label>
        <input
          type="number"
          name="age"
          value={updateStudent.age}
          onChange={handleChange}
          required
        />

        <div className="btn-group">
          <button type="submit" className="update-btn">
            Update
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
