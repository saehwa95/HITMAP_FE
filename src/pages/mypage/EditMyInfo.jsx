// import React from "react";
// import Logout from "../../components/myPage/EditMyInfo/Logout";
// import Withdraw from "../../components/myPage/EditMyInfo/Withdraw";

// const EditMyInfo = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [nickname, setNickname] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordCh, setPasswordCh] = useState("");
//   const [fileimage, setFileImage] = useState();

//   const imgRef = useRef();

//   const [nicklValid, SetNickValid] = useState(false);
//   const [isPassword, SetisPassword] = useState(false);
//   const [isPasswordConfirm, SetisPasswordConfirm] = useState(false);

//   const [isnick, setIsNick] = useState();
//   const [notAllow, setNotAllow] = useState(true);

//   const [nickMessage, setNickeMessage] = useState("");
//   const [passwordMessage, SetpasswordMessage] = useState("");
//   const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

//   const saveFileImage = (e) => {
//     // formData.append("image", fileimage);
//     const reader = new FileReader();
//     reader.onload = () => {
//       // 여기서 이미지를 FileReader를 통해 base64 형식으로 변환됩니다.
//       if (reader.readyState === 2) {
//         setFileImage(reader.result); // 변환된 이미지 형식(base64)이 setFileImage를 통해 fileimage에 담깁니다.
//       }

//       setFileImage(e.target.files[0]); // 이후 다시 정상적으로파일을 formdata로 담습니다. -> 결론 코드 순서의 문제 였습니다.
//       // 여기로 코드 순서를 바꾸고 해결된 문제였습니다. / - 끝 시마이 - 이대로 배포 다시 하시면 끝입니다.ㅎㅎ
//     };
//     reader.readAsDataURL(e.target.files[0]);
//   };
//   //formData submit
//   const submitOnclickHandler = (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("nickname", nickname);
//     formData.append("password", password);
//     formData.append("passwordConfirm", passwordCh);
//     formData.append("image", fileimage);
//   };

//   const onNickChangeHandler = (e) => {
//     e.preventDefault();
//     setNickname(e.target.value);
//     setNickeMessage("");
//     setIsNick();

//     const regex =
//       // eslint-disable-next-line
//       /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{1,10}$/;
//     if (regex.test(nickname)) {
//       SetNickValid(true);
//     } else {
//       SetNickValid(false);
//     }
//   };

//   //nickname 유효성 서버
//   const onnick = (e) => {
//     e.preventDefault();

//     const regex =
//       // eslint-disable-next-line
//       /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
//     if (regex.test(nickname)) {
//       setIsNick(true);
//       const payload = {
//         nickname: nickname,
//       };

//       dispatch(__nickItem(payload)).then((res) => {
//         if (res.meta.requestStatus === "fulfilled") {
//           setNickeMessage("사용 가능한 닉네임입니다.");
//           setIsNick(true);
//           if (nicklValid(false)) {
//             setIsNick(false);
//           }
//         } else if (res.meta.requestStatus === "rejected") {
//           setNickeMessage("이미 사용중인 닉네임입니다.");
//           setIsNick(false);
//         } else {
//           setNickeMessage("닉네임 형식이 바르지 않습니다.");
//           setIsNick(false);
//         }
//       });
//     } else {
//       setNickeMessage("닉네임 형식이 바르지 않습니다.");
//       setIsNick(false);
//     }
//     setIsNick();
//   };

//   const onChangePassWordCh = (e) => {
//     const passwordeConfirmCurrent = e.target.value;
//     setPasswordCh(passwordeConfirmCurrent);

//     if (password === passwordeConfirmCurrent) {
//       setPasswordConfirmMessage("");
//       SetisPasswordConfirm(true);
//     } else {
//       setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
//       SetpasswordMessage("");
//       SetisPasswordConfirm(false);
//     }
//   };

//   //회원가입 버튼 활성화/비활성화
//   useEffect(() => {
//     if (
//       isemail &&
//       isnick &&
//       emailValid &&
//       nicklValid &&
//       isPassword &&
//       isPasswordConfirm
//     ) {
//       setNotAllow(false);
//       return;
//     }
//     setNotAllow(true);
//   }, [isemail, isnick, emailValid, nicklValid, isPassword, isPasswordConfirm]);

//   // 프리뷰 이미지
//   const imageInput = imgRef;

//   const onClickImageUpload = () => {
//     imageInput.current.click();
//   };

//   //뒤로가기 버튼
//   const onClickbackmain = (e) => {
//     navigate("/");
//   };

//   return (
//     <div>
//       <Logout />
//       <Withdraw />
//     </div>
//   );
// };

// export default EditMyInfo;
