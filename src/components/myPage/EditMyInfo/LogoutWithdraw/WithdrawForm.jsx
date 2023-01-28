import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SelectIcon } from "../../../../asset/icon/SelectIcon.svg";
import { ReactComponent as SelectActive } from "../../../../asset/icon/SelectActive.svg";
import WithdrawConfirmModal from "./WithdrawConfirmModal";
import { instance } from "../../../../redux/api/instance";
import { deleteCookie } from "../../../../shared/cookie";

const WithdrawForm = () => {
  const [click, setClick] = useState(false);
  const [password, setPassword] = useState("");
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const withdrawMutation = useMutation({
    mutationFn: async (withdraw) => {
      return await instance.post("/me", withdraw);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["withdrawPost"] });
      setSuccessModalOpen(true);
      deleteCookie("auth");
    },
    onError: () => {
      setWithdrawModalOpen(false);
    },
  });
  console.log(withdrawMutation.isError);

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const showModal = () => {
    setWithdrawModalOpen(true);
  };

  return (
    <WithdrawFormWrapper>
      <GuideText>
        <span>히트맵 탈퇴 전, 확인하세요</span>
        <div className="guide_text">
          <ul>
            <li>탈퇴하시면 이용 중인 히트맵이 폐쇄됩니다.</li>
            <li>모든 데이터는 복구가 불가능합니다.</li>
            <li>글,댓글,프로필 등 모든 정보가 삭제됩니다.</li>
          </ul>
        </div>
        <div className="check_text">
          {click ? (
            <SelectActive
              className="selectIcon"
              onClick={() => setClick(false)}
            />
          ) : (
            <SelectIcon className="selectIcon" onClick={() => setClick(true)} />
          )}
          <span>안내사항을 모두 확인하였으며, 이에 동의합니다.</span>
        </div>
      </GuideText>
      <form>
        <div className="password_input">
          <span>사용중인 비밀번호</span>
          {withdrawMutation.isError ? (
            <>
              <input
                type="password"
                placeholder="현재 비밀번호를 입력해주세요."
                value={password}
                onChange={handlePassword}
                className="error-input"
              />
              <span className="error-message">
                비밀번호가 일치하지 않습니다.
              </span>
            </>
          ) : (
            <input
              type="password"
              placeholder="현재 비밀번호를 입력해주세요."
              value={password}
              onChange={handlePassword}
            />
          )}
        </div>
        <div className="withdrawButton">
          <button
            type="button"
            onClick={showModal}
            disabled={!password || !click}
          >
            탈퇴하기
          </button>
        </div>
        {withdrawModalOpen && (
          <WithdrawConfirmModal
            setWithdrawModalOpen={setWithdrawModalOpen}
            password={password}
            withdrawMutation={withdrawMutation}
            successModalOpen={successModalOpen}
          />
        )}
      </form>
    </WithdrawFormWrapper>
  );
};

export default WithdrawForm;
const WithdrawFormWrapper = styled.div`
  span {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
  }
  .password_input {
    display: flex;
    flex-direction: column;
    gap: 12px;
    input {
      box-sizing: border-box;
      justify-content: center;
      width: 343px;
      height: 48px;
      padding: 12px 135px 12px 16px;
      border: 1px solid #dfdfdf;
      border-radius: 8px;
    }
    .error-input {
      border: 2px solid #e5294a;
    }
    .error-message {
      font-size: 16px;
      color: #e5294a;
    }
  }
  .withdrawButton {
    position: fixed;
    bottom: 27px;
    button {
      width: 343px;
      height: 48px;
      background: #006981;
      border-radius: 8px;
      border: #006981;
      color: #ffffff;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      cursor: pointer;
      &:disabled {
        cursor: default;
        background-color: #a6cad3;
      }
    }
  }
`;

const GuideText = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 238px;
  padding: 24px 16px 20px 16px;
  span {
    font-family: "Pretendard";
    font-style: normal;
  }
  .guide_text {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    width: 343px;
    height: 111px;
    background: #f6f6f6;
    border-radius: 8px;
    margin-top: 20px;
    li {
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: #979797;
    }
  }
  .check_text {
    box-sizing: border-box;
    display: flex;
    margin-top: 20px;
    width: 343px;
    height: 24px;
    .selectIcon {
      cursor: pointer;
    }
    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      color: #c2c2c2;
      margin-left: 16px;
    }
  }
  li {
    font-size: 14px;
    font-weight: 500;
    color: #979797;
  }
`;
