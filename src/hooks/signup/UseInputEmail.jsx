import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { __emailItem } from "../../redux/modules/userSlice";

const UseInputEmail = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailValid, SetEmailValid] = useState(false);
  const [isemail, setIsEmail] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [emptyemailmessage, SetEmptyemailmessage] = useState("");
  const emailRef = useRef(null);
  //email 유효성 확인
  const onEmailChangeHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    setEmailMessage("");
    setIsEmail(false);

    const regexcom =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.com/;
    const regexnet =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.net/;
    if (regexcom.test(email) || regexnet.test(email)) {
      SetEmailValid(true);
    } else {
      SetEmailValid(false);
    }
  };
  //email 유효성 서버
  const onemail = (e) => {
    e.preventDefault();
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
          SetEmailValid(true);
          setEmailMessage("사용 가능한 이메일 입니다.");
          setIsEmail(true);
          emailRef.current.focus();
        } else if (res.meta.requestStatus === "rejected") {
          SetEmailValid(true);
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
      setEmailMessage("이메일 형식이 바르지 않습니다.");
      SetEmailValid(true);
      setIsEmail(false);
      emailRef.current.focus();
    }
  };
  const emptyemailvalue = (e) => {
    if (email.length === 0) {
      SetEmptyemailmessage("이메일이 입력되지 않았습니다.");
    }
  };
  return {
    email,
    isemail,
    emailValid,
    emailMessage,
    emptyemailmessage,
    onemail,
    onEmailChangeHandler,
    emptyemailvalue,
    emailRef,
  };
};

export default UseInputEmail;
