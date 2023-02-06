import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../pages/user/SignUp";
import Login from "../pages/user/Login";
import SocialAuth from "../pages/user/kakaoLogin/SocialAuth";
import Main from "../pages/main/Main";
import Weather from "../pages/main/Weather";
import PostList from "../pages/sns/PostList";
import DetailPost from "../pages/sns/DetailPost";
import CreatePost from "../pages/sns/CreatePost";
import MyPage from "../pages/mypage/MyPage";
import EditMyInfo from "../pages/mypage/EditMyInfo";
import EditPasswordPage from "../pages/mypage/EditPasswordPage";
import LogInRegister from "../pages/mypage/LogInRegister";
import Withdraw from "../components/myPage/EditMyInfo/LogoutWithdraw/Withdraw";
import PrivateRoutes from "./PrivateRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route path="/socialauth" element={<SocialAuth />} />
        <Route path="/main" element={<Main />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/postlist" element={<PostList />} />
        <Route path="/detail/:postId" element={<DetailPost />} />
        <Route path="/logInRegister" element={<LogInRegister />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/create" element={<CreatePost />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/editMyInfo" element={<EditMyInfo />} />
          <Route path="/editPassword" element={<EditPasswordPage />} />
          <Route path="/withdraw" element={<Withdraw />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
