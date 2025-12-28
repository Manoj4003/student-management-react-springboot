import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage"
import NavBar from "./components/NavBar"
import ListofStudents from "./components/ListofStudents"
import AddStudent from "./components/AddStudent"




function App() {


  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<ListofStudents />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/addStudent" element={<AddStudent />} />



      </Routes>
    </>
  )
}

export default App
