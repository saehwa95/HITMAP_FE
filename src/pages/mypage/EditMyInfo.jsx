import React from "react";
import EditMypageAppBar from "../../components/layout/appBar/EditMypageAppBar";
import UserEdit from "../../components/myPage/EditMyInfo/UserEdit";
import Logout from "../../components/myPage/EditMyInfo/Logout";
import Withdraw from "../../components/myPage/EditMyInfo/Withdraw";
import LogoutWithdraw from "../../components/myPage/EditMyInfo/LogoutWithdraw/LogoutWithdraw";

const EditMyInfo = () => {
  return (
    <div>
      <EditMypageAppBar />
      <UserEdit />
      <Logout />
      <Withdraw />
      <LogoutWithdraw />
    </div>
  );
};

export default EditMyInfo;
