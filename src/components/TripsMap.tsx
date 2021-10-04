import React from "react";
import { url } from "../apis/api";

const TripsMap = () => {
  return (
    <div className="map">
      <h2 className="mapTitle">
        <span className="color">제주 쉬기좋은 </span>
        <span>지역별 안내</span>
      </h2>
      <p>제주 지역별 안내 지도</p>
      <p className="img">
        <img src={`${url}img/제주지도2.png`} alt="제주지도" />
      </p>
    </div>
  );
};

export default TripsMap;
