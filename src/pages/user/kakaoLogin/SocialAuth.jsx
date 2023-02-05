import React, { useEffect } from "react";
import axios from "axios";
import { setCookie } from "../../../shared/cookie";

/****************************************************************************
 * 4. 해당 페이지의 query에 있는 인증코드를 추출하고 이를 백 서버에 보냄
 * 5. 백에서 작업을 거쳐서 우리의 서비스에 필요한 token을 발급하여 응답으로 준다.
 * 6. 프론트 역할 끝 (이하는 그 후 백엔드에서 처리 과정)
 * 7. 인증 code를 통해 백엔드 서버에서 kakao server에 token을 요청한다.
 * 8. 받아온 token을 통해서 회원정보를 받아온다.
 * 9. 받아온 회원 정보를 DB에 저장하고 이 정보로 우리 서비스에 필요한 token을 발행
 ***************************************************************************/

const Socialauth = () => {
  useEffect(() => {
    // url에 있는 query추출하는 역할
    const params = new URLSearchParams(window.location.search);
    let code = params.get("code");

    if (code) {
      const URL = "https://koyunhyeok.shop/user/kakaoLogin";
      axios
        .post(
          URL,
          {
            code: code,
          },
          { withCredentials: true } // withCredentials = 로그인 상태를 기억하기 위한 credentials 설정(for Cors)
        )
        .then((res) => {
          setCookie("auth", res.data.access_token);
          window.location.href = "/main";
        })
        .catch((err) => {
          const errorMessage = err.response.data.errorMessage;
          alert(errorMessage);
        });
    }
  }, []);

  return (
    <>
      <div>로딩중...</div>
    </>
  );
};

export default Socialauth;
