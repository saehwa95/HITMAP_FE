import React from "react";
import EditMypageAppBar from "../../components/layout/appBar/EditMypageAppBar";
import UserEdit from "../../components/myPage/EditMyInfo/UserEdit";
import LogoutWithdraw from "../../components/myPage/EditMyInfo/LogoutWithdraw/LogoutWithdraw";

const EditMyInfo = () => {
  return (
    <div>
      <EditMypageAppBar />
      <UserEdit />
      <LogoutWithdraw />
    </div>
  );
};

export default EditMyInfo;
