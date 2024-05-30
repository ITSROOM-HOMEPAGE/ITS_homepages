import { useEffect } from "react";

const { kakao } = window;

export default function Kakaomap() {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=1cb22d0e18abc571542487e53c65c3b2&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            35.54214322212964,
            129.31287511752132
          ),
          level: 2,
        };
        new window.kakao.maps.Map(container, options);
        new window.kakao.maps.Marker({
          position: options.center,
        }).setMap(new window.kakao.maps.Map(container, options));
        // 마커 추가 후추수정
        // test용
        // const marker = new window.kakao.maps.Marker({
        //   position: options.center,
        // });
        // const infowindow = new kakao.maps.InfoWindow({
        //   position: options.center,
        //   content:
        //     '<div style="padding:5px; ">Sandburg Office<br/>ITS Space</div>',
        // });
        // marker.setMap(map);
        // infowindow.open(map, marker);
        // const marker = new window.kakao.maps.Marker({
        //   position: options.center,
        // });

        const infowindow = new kakao.maps.InfoWindow({
          position: options.center,
          content:
            '<div style="padding:5px; ">Sandburg Office<br/>ITS Space</div>',
        });
        // marker.setMap(map);
        // infowindow.open(map, marker);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <div
      id="map"
      className="text-black rounded-[24px] border-2 w-[1500px] h-[500px]"
    ></div>
  );
}
