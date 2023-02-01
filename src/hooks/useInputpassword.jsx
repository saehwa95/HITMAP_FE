import { useState } from "react";

const useInputpassword = () => {
  const [prevPassword, SetPrevPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCh, setPasswordCh] = useState("");
  const [isPassword, SetisPassword] = useState(false);
  const [isPasswordConfirm, SetisPasswordConfirm] = useState(false);
  const [passwordMessage, SetpasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    const passwordeCurrent = e.target.value;
    setPassword(passwordeCurrent);

    if (!passwordRegex.test(passwordeCurrent)) {
      SetpasswordMessage("비밀번호 조건에 충족하지않습니다.");
      SetisPassword(false);
    } else {
      SetpasswordMessage("");
      SetisPassword(true);
    }
  };

  const onChangeprevPassword = (e) => {
    SetPrevPassword(e.target.value);
  };

  //paassword 확인
  const onChangePassWordCh = (e) => {
    const passwordeConfirmCurrent = e.target.value;
    setPasswordCh(passwordeConfirmCurrent);

    if (password === passwordeConfirmCurrent) {
      setPasswordConfirmMessage("");
      SetisPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      SetpasswordMessage("");
      SetisPasswordConfirm(false);
    }
  };
  return {
    prevPassword,
    password,
    passwordCh,
    isPassword,
    isPasswordConfirm,
    passwordMessage,
    passwordConfirmMessage,
    onChangeprevPassword,
    onChangePassword,
    onChangePassWordCh,
  };
};

export default useInputpassword;
