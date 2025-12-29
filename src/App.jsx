import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ListofStudents from "./components/ListofStudents";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<ListofStudents />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/updateStudent/:id" element={<UpdateStudent />} />
      </Routes>
    </>
  );
}

export default App;
