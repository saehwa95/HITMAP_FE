import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { __nickItem } from "../../redux/modules/userSlice";

const UseInputNickname = () => {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [nicklValid, SetNickValid] = useState(false);
  const [isnick, setIsNick] = useState(false);
  const [nickMessage, setNickeMessage] = useState("");
  const [emptynickmessage, SetEmptyNcimessage] = useState("");
  const nickRef = useRef(null);

  const onNickChangeHandler = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
    setNickeMessage("");
    setIsNick(false);

    const regex =
      // eslint-disable-next-line
      /^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,10}$/;
    if (regex.test(nickname)) {
      SetNickValid(true);
    } else {
      SetNickValid(false);
    }
  };

  //nickname 유효성 서버
  const onnick = (e) => {
    e.preventDefault();

    const regex =
      // eslint-disable-next-line
      /^(?=.*[A-Za-z0-9가-힣])[A-Za-z0-9가-힣]{2,10}$/;
    if (regex.test(nickname)) {
      setIsNick(true);

      const payload = {
        nickname: nickname,
      };

      dispatch(__nickItem(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          SetNickValid(true);
          setNickeMessage("사용 가능한 닉네임입니다.");
          setIsNick(true);
          nickRef.current.focus();
        } else if (res.meta.requestStatus === "rejected") {
          SetNickValid(true);
          setNickeMessage("이미 사용중인 닉네임입니다.");
          setIsNick(false);

          nickRef.current.focus();
        } else {
          setNickeMessage("닉네임 형식이 바르지 않습니다.");
          setIsNick(false);

          nickRef.current.focus();
        }
      });
    } else {
      setNickeMessage("닉네임 형식이 바르지 않습니다.");
      SetNickValid(true);
      setIsNick(false);
      nickRef.current.focus();
    }
  };
  const emptyvalue = (e) => {
    if (nickname.length === 0) {
      SetEmptyNcimessage("닉네임이 입력되지 않았습니다.");
    }
  };

  return {
    nickname,
    onNickChangeHandler,
    isnick,
    nickMessage,
    nicklValid,
    onnick,
    emptyvalue,
    emptynickmessage,
    nickRef,
  };
};

export default UseInputNickname;
