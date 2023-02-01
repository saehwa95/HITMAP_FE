import { useState } from "react";
import { useDispatch } from "react-redux";
import { __myNick } from "../redux/modules/userSlice";

const useInputnickname = () => {
  const [nickdata, SetNickdata] = useState();
  const [nicklValid, SetNickValid] = useState(false);
  const [nickname, setNickname] = useState("");
  const dispatch = useDispatch();
  const [isnick, setIsNick] = useState();
  const [nickMessage, setNickeMessage] = useState("");

  const onNickChangeHandler = (e) => {
    setNickname(e.target.value);

    const regex =
      // eslint-disable-next-line
      /^(?=.*[A-Za-z0-9가-힣])[A-Za-z0-9가-힣]{2,10}$/;
    if (regex.test(nickname)) {
      SetNickValid(true);
    } else {
      SetNickValid(false);
    }
  };

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

      dispatch(__myNick(payload)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          setNickeMessage("사용 가능한 닉네임입니다.");
          setIsNick(true);
          SetNickdata(nickname);
        } else if (res.meta.requestStatus === "rejected") {
          setNickeMessage("이미 사용중인 닉네임입니다.");
          setIsNick(false);
        } else {
          setNickeMessage("닉네임 형식이 바르지 않습니다.");
          setIsNick(false);
        }
      });
    } else {
      setNickeMessage("닉네임 형식이 바르지 않습니다.");
      setIsNick(false);
    }

    setIsNick();
  };

  return {
    nickdata,
    nickname,
    onNickChangeHandler,
    isnick,
    nickMessage,
    nicklValid,
    onnick,
  };
};

export default useInputnickname;
