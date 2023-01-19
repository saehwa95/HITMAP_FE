import styled from "styled-components";

function ModalBasic({ setModalOpen }) {
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };
  // onClick = { closeModal };
  return (
    <StModalContainer>
      <StModifypage>게시글 수정하기</StModifypage>
      <StDeletePost>삭제하기</StDeletePost>
    </StModalContainer>
  );
}
export default ModalBasic;

const StModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 150px;
  height: 112px;
  left: 175px;
  top: 52px;

  z-index: 1050;

  /* Gray/Gray_600 */

  background: #3f3f3f;
  border-radius: 16px;
`;

const StModifypage = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 150px;
  height: 56px;

  /* Gray/Gray_500 */

  border-bottom: 1px solid #979797;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  color: #ffffff;
`;

const StDeletePost = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 150px;
  height: 56px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  /* identical to box height, or 24px */

  color: #ffffff;
`;
