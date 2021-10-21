import React from "react";
import { url } from "../apis/api";
import MapTitle from "./Title/MapTitle";

const TripsMap = () => {
  return (
    <div className="map">
      <MapTitle pointText={"제주 쉬기좋은"} text={"지역별 안내"}></MapTitle>
      <p>제주 지역별 안내 지도</p>
      <p className="mapImg">
        <img src={`${url}img/제주지도2.png`} alt="제주지도" />
      </p>
    </div>
  );
};

export default TripsMap;
