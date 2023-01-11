import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import myLocationRed from "../../asset/icon/myLocationRed.svg";
import small from "../../asset/icon/small.svg";

const KakaoMap = ({ searchPlace }) => {
  const { kakao } = window;
  const markers = [];
  const [map, setMap] = useState();
  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }

    // 장소 검색 객체를 생성합니다
    const ps = new kakao.maps.services.Places();

    // 키워드로 장소를 검색합니다
    searchPlaces();

    // 키워드 검색을 요청하는 함수
    function searchPlaces() {
      const keyword = searchPlace;
      if (!keyword.replace(/^\s+|\s+$/g, "")) {
        return false;
      }
      // 장소검색 객체를 통해 키워드로 장소검색을 요청
      ps.keywordSearch(searchPlace, placesSearchCB);
    }

    //키워드 확인을 위한 콘솔
    // console.log(searchPlace);

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, _pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
          //경도, 위도
          // console.log(data[i].y, data[i].x);
        }
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        map.setBounds(bounds);
      }
    }

    // 검색 결과 목록과 마커를 표출하는 함수입니다
    function displayMarker(place) {
      const imageSrc = small;
      const imageSize = new kakao.maps.Size(32, 40);
      const imageOption = { offset: new kakao.maps.Point(17, 36) };

      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      // console.log(place);
      // console.log(typeof place.x);
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        image: markerImage,
      });

      // 마커에 표시할 인포윈도우를 생성합니다
      const infowindow = new kakao.maps.InfoWindow({
        content: place.place_name, // 인포윈도우에 표시할 내용
      });

      (function (marker, infowindow) {
        // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다
        kakao.maps.event.addListener(marker, "mouseover", function () {
          infowindow.open(map, marker);
        });

        // 마커에 mouseout 이벤트를 등록하고 마우스 아웃 시 인포윈도우를 닫습니다
        kakao.maps.event.addListener(marker, "mouseout", function () {
          infowindow.close();
        });
      })(marker, infowindow);
    }
  }, [
    searchPlace,
    kakao.maps.LatLng,
    kakao.maps.LatLngBounds,
    kakao.maps.Marker,
    kakao.maps.services.Places,
    kakao.maps.services.Status.OK,
    map,
    kakao.maps.CustomOverlay,
    kakao.maps.event,
    kakao.maps.InfoWindow,
    kakao.maps.Point,
    kakao.maps.MarkerImage,
    kakao.maps.Size,
  ]);

  return (
    <>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100vh",
        }}
        level={3} // 지도의 확대 레벨
        onCreate={setMap}
      >
        {!state.isLoading && (
          <MapMarker
            position={state.center}
            image={{
              src: myLocationRed, // 마커이미지의 주소입니다
              size: {
                width: 58,
                height: 58,
              }, // 마커이미지의 크기입니다
              options: {
                offset: {
                  x: 0,
                  y: 0,
                }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              },
            }}
          />
        )}
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={state.center}
          ></MapMarker>
        ))}
      </Map>
    </>
  );
};

export default KakaoMap;
