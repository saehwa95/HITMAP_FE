import React, { useEffect } from "react";

const KakaoMap = () => {
  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        const locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
        const content = '<div style="textAlign:center">카카오!</div>'; // 커스텀 오버레이에 표시할 내용입니다
        // HTML 문자열 또는 Dom Element 입니다

        // 마커와 커스텀 오버레이를 표시합니다
        displayMarker(locPosition, content);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      const locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        content = "geolocation을 사용할수 없어요..";

      displayMarker(locPosition, content);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, content) {
      // 마커를 생성합니다
      const icon = new kakao.maps.MarkerImage(
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
        new kakao.maps.Size(51, 55), // 마커이미지의 크기입니다
        {
          offset: new kakao.maps.Point(16, 34), // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
          alt: "",
          shape: "poly",
          coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33",
        }
      );
      const marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
        image: icon,
      });

      const iwContent = content; // 인포윈도우에 표시할 내용

      // 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
      });

      // 마커에 마우스오버 이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "mouseover", function () {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        infowindow.open(map, marker);
      });

      // 마커에 마우스아웃 이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "mouseout", function () {
        // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
        infowindow.close();
      });
      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }
  }, [
    kakao.maps.LatLng,
    kakao.maps.Map,
    kakao.maps.Marker,
    kakao.maps.InfoWindow,
    kakao.maps.MarkerImage,
    kakao.maps.Point,
    kakao.maps.Size,
    kakao.maps.event,
  ]);

  return <div id="map" style={{ width: "100%", height: "812px" }}></div>;
};

export default KakaoMap;
