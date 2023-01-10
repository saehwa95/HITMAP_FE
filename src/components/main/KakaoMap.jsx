import React, { useState, useEffect } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = ({ searchPlace }) => {
  const { kakao } = window;
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
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

    // 키워드로 장소를 검색
    ps.keywordSearch(searchPlace, placesSearchCB);

    //키워드 확인을 위한 콘솔
    console.log(searchPlace);

    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, _pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));

          //위치 경도, 위도
          console.log(data[i].y, data[i].x);
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정
        map.setBounds(bounds);
      }
    }

    // 검색 결과 목록과 마커를 표출하는 함수입니다
    function displayMarker(place) {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });
    }
  }, [
    kakao.maps.LatLng,
    kakao.maps.LatLngBounds,
    kakao.maps.Marker,
    kakao.maps.services.Places,
    kakao.maps.services.Status.OK,
    searchPlace,
  ]);

  return (
    <>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "812px",
        }}
        level={3} // 지도의 확대 레벨
        onCreate={setMap}
      >
        {/* 삼항 연산자로 처리 => 내 위치 , 검색했을때 내용 */}
        {!state.isLoading && (
          <MapMarker position={state.center}>
            {/* <div style={{ padding: "5px", color: "#000" }}>
              {state.errMsg ? state.errMsg : "현재 위치!!"}
            </div> */}
          </MapMarker>
        )}
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={state.center}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
    </>
  );
};

export default KakaoMap;
