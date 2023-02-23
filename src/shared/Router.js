import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const SignUp = React.lazy(()=> import("../pages/user/SignUp"));
const Login = React.lazy(()=> import("../pages/user/Login"));
const SocialAuth = React.lazy(()=> import("../pages/user/kakaoLogin/SocialAuth"));
const Main = React.lazy(()=> import("../pages/main/Main"));
const Weather = React.lazy(()=> import("../pages/main/Weather"));
const PostList = React.lazy(()=> import("../pages/sns/PostList"));
const DetailPost = React.lazy(()=> import("../pages/sns/DetailPost"));
const CreatePost = React.lazy(()=> import("../pages/sns/CreatePost"));
const MyPage = React.lazy(()=> import("../pages/mypage/MyPage"));
const EditMyInfo = React.lazy(()=> import("../pages/mypage/EditMyInfo"));
const EditPasswordPage = React.lazy(()=> import("../pages/mypage/EditPasswordPage"));
const LogInRegister = React.lazy(()=> import("../pages/mypage/LogInRegister"));
const Withdraw = React.lazy(()=> import("../components/myPage/EditMyInfo/LogoutWithdraw/Withdraw"));
const PrivateRoutes = React.lazy(()=> import("./PrivateRoutes"));

const Router = () => {
  return (
    <BrowserRouter>
    <Suspense>
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
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
