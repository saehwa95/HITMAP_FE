import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherDetail from "../components/main/WeatherDetail";
import Main from "../pages/main/Main";
import MyPage from "../pages/mypage/MyPage";
import PostList from "../pages/sns/PostList";
import Chat from "../pages/socket/Chat";
import SignUp from "../pages/user/SignUp";
import CreatePost from "../pages/sns/CreatePost";
import UpdatePost from "../pages/sns/UpdatePost";
import Login from "../pages/user/Login";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/weather" element={<WeatherDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/update" element={<UpdatePost />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
