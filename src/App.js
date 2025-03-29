import React from 'react';
import './App.css';
import Home from './Home';
import StudentsView from './component/student/StudentsView';
import Navbar from './component/common/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudents from './component/student/AddStudents';
import EditStudent from './component/student/EditStudent';
import StudentPofile from './component/student/StudentProfile';




function App() {
  return (
    <main className="container mt-3" >
     
     <Router>
     <Navbar/>
     <Home/>
      <Routes>
        <Route exact path='/' element={<StudentsView/>}></Route>
        <Route exact path='/view-students' element={<StudentsView/>}></Route>
        <Route exact path='/add-student' element={<AddStudents/>}></Route>
        <Route exact path='/edit-student/:id' element={<EditStudent/>}></Route>
        <Route exact path="/student-profile/:id" element={<StudentPofile />}></Route>
      </Routes>
     </Router>
    </main>
  );
}

export default App;
