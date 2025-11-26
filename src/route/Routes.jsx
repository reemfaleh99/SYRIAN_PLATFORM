import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";


import Login from "../page/auth/Login";
import Signup from "../page/auth/Signup";
import MakeNewPassword from "../page/auth/MakeNewPassword";
import ForgetPassword from "../page/auth/ForgetPassword";
import Home from "../page/Home";
import Forum from "../page/Forum";
import AddPost from "../page/AddPost";
import PostDetails from "../page/PostDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/make-new" element={<MakeNewPassword />} />
      <Route path="/forget-pass" element={<ForgetPassword />} />
      <Route path="/forum" element={<Forum/>}/>
      <Route path="/forum/add-post" element={<AddPost/>}/>
      <Route path="/post-details" element={<PostDetails/>}/>
    </Routes>
  );
};

export default Routers;