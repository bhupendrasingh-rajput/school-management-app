import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClassManagement from './pages/ClassManagement';
import TeacherManagement from './pages/TeacherManagement';
import StudentManagement from './pages/StudentManagement';
import NewClass from './pages/NewClass';
import NewTeacher from './pages/NewTeacher';
import NewStudent from './pages/NewStudent';
import ClassAnalytics from './components/ClassAnalytics/ClassAnalytics';
import SalaryIncomeAnalytics from './components/SalaryIncomeAnalytics/SalaryIncomeAnalytics';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>School Management Application</h1>
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/classes">Classes</a></li>
              <li><a href="/teachers">Teachers</a></li>
              <li><a href="/students">Students</a></li>
              <li><a href="/analytics/salary-income">Salary & Income Analytics</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/classes" element={<ClassManagement />} exact />
            <Route path="/classes/new" element={<NewClass />} />
            <Route path="/classes/:id/analytics" element={<ClassAnalytics />} />
            <Route path="/teachers" element={<TeacherManagement />} exact />
            <Route path="/teachers/new" element={<NewTeacher />} />
            <Route path="/students" element={<StudentManagement />} exact />
            <Route path="/students/new" element={<NewStudent />} />
            <Route path="/analytics/salary-income" element={<SalaryIncomeAnalytics />} />
          </Routes>
        </main>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
