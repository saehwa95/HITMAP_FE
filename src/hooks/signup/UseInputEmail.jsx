import { useState, useRef } from "react";
import { __emailItem } from "../../redux/modules/userSlice";
import { useDispatch } from "react-redux";

const UseInputEmail = () => {
  const [email, setEmail] = useState("");
  const [emailValid, SetEmailValid] = useState(false);
  const [isemail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [emptyemailmessage, SetEmptyemailmessage] = useState("");
  const emailRef = useRef(null);
  const dispatch = useDispatch();
  //email 유효성 확인
  const onEmailChangeHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    setEmailMessage("");
    setIsEmail(false);

    const regex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (regex.test(email)) {
      SetEmailValid(true);
    } else {
      SetEmailValid(false);
    }
  };
  //email 유효성 서버
  const onemail = (e) => {
    const regexcom =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.com/;
    const regexnet =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.net/;
    if (regexcom.test(email) || regexnet.test(email)) {
      setIsEmail(true);
      const payload = {
        email: email,
      };

      dispatch(__emailItem(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setEmailMessage("사용 가능한 이메일 입니다.");
          setIsEmail(true);
          emailRef.current.focus();
        } else if (res.error.message === "Rejected") {
          setEmailMessage("이미 사용중인 이메일입니다.");
          setIsEmail(false);
          emailRef.current.focus();
        } else {
          setEmailMessage("이메일 형식이 바르지 않습니다.");
          setIsEmail(false);
          emailRef.current.focus();
        }
      });
    } else {
      setEmailMessage("이메일 형식이 바르지 않습니다");
      emailRef.current.focus();
      setIsEmail(false);
    }
  };

  //nickname 유효성 검사

  const emptyemailvalue = (e) => {
    if (email.length === 0) {
      SetEmptyemailmessage("이메일이 입력되지 않았습니다.");
    }
  };
  return {
    email,
    emailValid,
    isemail,
    emailMessage,
    emptyemailmessage,
    onemail,
    emptyemailvalue,
    onEmailChangeHandler,
    emailRef,
  };
};

export default UseInputEmail;
