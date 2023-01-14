import React from "react";
// import StatusBar from "../../components/layout/appBar/StatusBar";
import IconNavigationBar from "../../components/layout/navigationBar/IconNavigationBar";
import Search from "../../components/main/Search";

const Main = () => {
  return (
    <div>
      {/* <StatusBar /> */}
      <Search />
      <IconNavigationBar />
    </div>
  );
};

export default Main;
