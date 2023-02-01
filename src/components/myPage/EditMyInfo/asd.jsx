// import styled from "styled-components";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Profileimage from "../../user/signup/Profileimage";
// import NicknameValid from "../../user/signup/NicknameValid";
// import PasswordValid from "../../user/signup/PasswordValid";
// import { __editUser } from "../../../redux/modules/userSlice";
// import useInputnickname from "../../../hooks/useInputnickname";
// import { useState } from "react";
// import { useEffect } from "react";

// const UserEdit = () => {

//   const { fileimage } = Profileimage([]);

//   const { password, passwordCh } = PasswordValid();
//   console.log("3", nickname);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // const navigate = useNavigate();

//   const submitOnclickHandler = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("nickname", nickname);
//     formData.append("password", password);
//     formData.append("passwordConfirm", passwordCh);
//     formData.append("image", fileimage);
//     dispatch(__editUser(formData)).then((res) => {
//       console.log(res);
//       if (res.meta.requestStatus === "fulfilled") {
//         alert("수정이 완료되었습니다.");
//         navigate("/mypage");
//       } else {
//       }
//     });
//   };

//   return (
//     <StEditContainer>
//       <Profileimage />
//       <NicknameValid />
//       <PasswordValid />
//       <Signupcontain>
//         <SignBtn onClick={(e) => submitOnclickHandler(e)}>
//           <StSignupBtn>회원가입</StSignupBtn>
//         </SignBtn>
//       </Signupcontain>
//     </StEditContainer>
//   );
// };

// export default UserEdit;

// const StEditContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 0px;

//   width: 375px;
// `;

// const Signupcontain = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   margin: 0 auto;
//   gap: 10px;

//   width: 375px;
//   height: 83px;
//   left: 0px;
//   top: 100%;
//   background: #ffffff;
// `;

// const StSignupBtn = styled.span`
//   font-family: "Pretendard";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 150%;
//   padding-top: 25px;
//   width: 100px;
//   height: 50px;
//   text-align: center;
//   color: #ffffff;
// `;

// const SignBtn = styled.button`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   margin: 0 auto;
//   width: 343px;
//   height: 48px;
//   background: #006981;
//   border-radius: 8px;
//   :disabled {
//     background: #a6cad3;
//     border-radius: 8px;
//   }
// `;
