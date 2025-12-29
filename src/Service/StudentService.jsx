import axios from "axios";

const StudentBaseURL = "http://localhost:8080/students";

class StudentService {

  getAllStudents() {
    return axios.get(StudentBaseURL);
  }

  saveStudent(student) {
    return axios.post(StudentBaseURL, student);
  }

  getStudentById(id) {
    return axios.get(`${StudentBaseURL}/${id}`);
  }

  // ✅ IMPORTANT FIX — id mandatory
  updateStudent(id, student) {
    return axios.put(`${StudentBaseURL}/${id}`, student);
  }

  deleteStudent(id) {
    return axios.delete(`${StudentBaseURL}/${id}`);
  }
}

export default new StudentService();
