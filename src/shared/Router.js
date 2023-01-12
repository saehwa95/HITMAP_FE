import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeatherDetail from "../components/main/WeatherDetail";
import Main from "../pages/main/Main";
import MyPage from "../pages/mypage/MyPage";
import PostList from "../pages/sns/PostList";
import Chat from "../pages/socket/Chat";
import SignUp from "../pages/user/SignUp";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/weather" element={<WeatherDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/chat" element={<Chat />} />

        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
