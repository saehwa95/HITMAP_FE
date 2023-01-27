// import React, { useState } from "react";
// import styled from 'styled-components';
// import { useDispatch } from "react-redux";
// import { __emailItem } from "../../redux/modules/userSlice";
// import Txt from "../../"
// const Email = () => {
// const dispatch = useDispatch();
// 	const [email, setEmail] = useState("");
// 	const [emailValid, SetEmailValid] = useState(false);
// 	const [isemail, setIsEmail] = useState();
// 	const [emailMessage, setEmailMessage] = useState("");

// 	const onEmailChangeHandler = (e) => {
//     e.preventDefault();
//     setEmail(e.target.value);
//     setEmailMessage("");
//     setIsEmail();

//     const regex =
//       /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
//     if (regex.test(email)) {
//       SetEmailValid(true);
//     } else {
//       SetEmailValid(false);
//     }
//   };
//   //email 유효성 서버
//   const onemail = (e) => {
//     const regexcom =
//       /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.com/;
//     const regexnet =
//       /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.net/;
//     if (regexcom.test(email) || regexnet.test(email)) {
//       setIsEmail(true);
//       const payload = {
//         email: email,
//       };

//       dispatch(__emailItem(payload)).then((res) => {
//         if (res.meta.requestStatus === "fulfilled") {
//           setEmailMessage("사용 가능한 이메일 입니다.");
//           setIsEmail(true);
//         } else if (res.payload === 401) {
//           setEmailMessage("이미 사용중인 이메일입니다.");
//           setIsEmail(false);
//         } else {
//           setEmailMessage("이메일 형식이 바르지 않습니다.");
//           setIsEmail(false);
//         }
//       });
//     } else {
//       setEmailMessage("이메일 형식이 바르지 않습니다");
//       setIsEmail(false);
//     }
//   };
// 	return (
//     <StEmaildiv>
//       <StText>이메일</StText>
//       <StNIckName>
//         <StEmailField>
//           <StErrMsg>
//             {!isemail && (
//               <StInput
//                 value={email}
//                 type="email"
//                 placeholder="이메일"
//                 onChange={onEmailChangeHandler}
//                 // onClick={changeinput}
//               />
//             )}

//             {isemail === false && (
//               <StFalseInput
//                 value={email}
//                 type="email"
//                 placeholder="이메일"
//                 onChange={onEmailChangeHandler}
//                 // onClick={changeinput}
//               />
//             )}
//             {isemail === true && (
//               <StTrueInput
//                 value={email}
//                 type="email"
//                 placeholder="이메일"
//                 onChange={onEmailChangeHandler}
//                 // onClick={changeinput}
//               />
//             )}

//             {!emailValid && (
//               <StFalSpan>이메일 형식이 바르지 않습니다.</StFalSpan>
//             )}

//             {isemail === true && <StTruSpan>{emailMessage}</StTruSpan>}

//             {isemail !== true && <StFalSpan>{emailMessage}</StFalSpan>}

//             {!emailValid && email.length === 0 && (
//               <Stspan>이메일을 입력해주세요</Stspan>
//             )}
//           </StErrMsg>
//         </StEmailField>

//         <StBtn src={duplicateIcon} onClick={onemail} />
//       </StNIckName>
//     </StEmaildiv>
//   );
// };

// export default Email;

// const StEmaildiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;

//   gap: 8px;

//   width: 375px;
//   height: 137px;

//   /* Gray/White */

//   background: #ffffff;
// `;

// const StEmailField = styled.div`
//   width: 243px;
//   height: 74px;
// `;
