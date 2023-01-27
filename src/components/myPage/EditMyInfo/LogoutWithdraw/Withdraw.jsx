import React from "react";
import StatusBar from "../../../layout/appBar/StatusBar";
import WithdrawAppBar from "../../../layout/appBar/WithdrawAppBar";
import WithdrawForm from "./WithdrawForm";

const Withdraw = () => {
  return (
    <>
      <StatusBar />
      <WithdrawAppBar />
      <WithdrawForm />
    </>
  );
};

export default Withdraw;
