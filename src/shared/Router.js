import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingPage from "../pages/common/LoadingPage";
// import SignUp from "../pages/user/SignUp";
// import Login from "../pages/user/Login";
// import SocialAuth from "../pages/user/kakaoLogin/SocialAuth";
// import Main from "../pages/main/Main";
// import Weather from "../pages/main/Weather";
// import PostList from "../pages/sns/PostList";
// import DetailPost from "../pages/sns/DetailPost";
// import CreatePost from "../pages/sns/CreatePost";
// import MyPage from "../pages/mypage/MyPage";
// import EditMyInfo from "../pages/mypage/EditMyInfo";
// import EditPasswordPage from "../pages/mypage/EditPasswordPage";
// import LogInRegister from "../pages/mypage/LogInRegister";
// import Withdraw from "../components/myPage/EditMyInfo/LogoutWithdraw/Withdraw";
// import PrivateRoutes from "./PrivateRoutes";

const SignUp = React.lazy(() => import("../pages/user/SignUp"));
const Login = React.lazy(() => import("../pages/user/Login"));
const SocialAuth = React.lazy(() =>
  import("../pages/user/kakaoLogin/SocialAuth")
);
const Main = React.lazy(() => import("../pages/main/Main"));
const Weather = React.lazy(() => import("../pages/main/Weather"));
const PostList = React.lazy(() => import("../pages/sns/PostList"));
const DetailPost = React.lazy(() => import("../pages/sns/DetailPost"));
const CreatePost = React.lazy(() => import("../pages/sns/CreatePost"));
const MyPage = React.lazy(() => import("../pages/mypage/MyPage"));
const EditMyInfo = React.lazy(() => import("../pages/mypage/EditMyInfo"));
const EditPasswordPage = React.lazy(() =>
  import("../pages/mypage/EditPasswordPage")
);
const LogInRegister = React.lazy(() => import("../pages/mypage/LogInRegister"));
const Withdraw = React.lazy(() =>
  import("../components/myPage/EditMyInfo/LogoutWithdraw/Withdraw")
);
const PrivateRoutes = React.lazy(() => import("./PrivateRoutes"));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/socialauth" element={<SocialAuth />} />
          <Route path="/main" element={<Main />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/postlist" element={<PostList />} />
          <Route path="/detail/:postId" element={<DetailPost />} />
          <Route path="/logInRegister" element={<LogInRegister />} />
          <Route path="/loading" element={<LoadingPage />} />
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
