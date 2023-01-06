import React from "react";
import StatusBar from "../../components/layout/appBar/StatusBar";
import IconNavigationBar from "../../components/layout/navigationBar/IconNavigationBar";
import KakaoMap from "../../components/main/KakaoMap";

const Main = () => {
  return (
    <div>
      <StatusBar />
      <KakaoMap />
      <IconNavigationBar />
    </div>
  );
};

export default Main;