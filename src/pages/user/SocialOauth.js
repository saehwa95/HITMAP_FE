import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SocialOauth({ setIsLogin, setUserInfo }) {
  const navigate = useNavigate();
  const REACT_APP_REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const REACT_APP_REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

  const getToken = async () => {
    let code = new URL(document.location.toString()).searchParams.get("code");
    try {
      const token = await axios({
        method: "POST",
        url: `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REACT_APP_REST_API_KEY}&redirect_uri=${REACT_APP_REDIRECT_URI}&code=${code}`,
      });
      getUserInfo(token.data.access_token, token.data.refresh_token);
    } catch (e) {}
  };

  const getUserInfo = async (access_token, refresh_token) => {
    try {
      const userInfo = await axios({
        method: "POST",
        url: "https://localhost:3000/src/pages/SocialOaut",
        data: {
          access_token: access_token,
          refresh_token: refresh_token,
        },
      });
      setUserInfo({
        email: userInfo.data.userInfo.email,
        nickName: userInfo.data.userInfo.nick,
      });
    } catch (error) {}
  };
  useEffect(() => {
    getToken();
    setIsLogin(true);
    navigate("/");
  });
  return <></>;
}
// module.exports = {
// 	kakao: async (req, res) => {
// 		try {
// 			const access_token = req.body.access_token
// 			const getUserInfo = await axios({
// 				method: 'GET',
// 				url: 'https://kapi.kakao.com/v2/user/me',
// 				headers: {
// 					Authorization: `Bearer ${access_token}`
// 				}
// 			})
// 		}
// 	}
// }
