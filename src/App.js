import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Signup";
import SignIn from "./pages/SignIn";
import SkillPage from "./pages/SkillPage"; // You need to create SkillPage component
import JobsPage from "./pages/JobsPage";
import HomeMain from "./pages/HomeMain";
import Posts from "./pages/Posts";
import UserProfilePage from "./pages/UserProfilePage";
import RecrutierSignin from "./pages/Recruiter/RecrutierSignin";
import RecrutierSignup from "./pages/Recruiter/RecrutierSignup";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/skill/:id" element={<SkillPage />} />
        <Route path='/homemain/jobspage' element={<JobsPage />} />
        <Route path='/posts/*' element={<Posts />} />
        
        <Route path='/homemain/*' element={<HomeMain/>}/>
        <Route path='/homemain/posts' element={<Posts/>}/>
        <Route path="/user-profile" element={<UserProfilePage/>} />
        <Route path="/rsignin" element={<RecrutierSignin/>} />
        <Route path="/rsignup" element={<RecrutierSignup/>} />
      </Routes>
    </Router>
  );
}

export default App;