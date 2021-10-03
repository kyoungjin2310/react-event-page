import React from "react";
import { url } from "../apis/api";

const TitlePage = () => {
  return (
    <div className="main">
      <h1 className="mainTitle">
        <span className="jeju">JEJU</span>
        <span>쉬고 싶으면? 제주! 인생 사진도? 제주!</span>
        <span className="title">인생제주</span>
      </h1>
      <h2 className="mainSubTitle">COTRIP</h2>
      <img src={`${url}img/사진.png`} alt="인생제주" />
    </div>
  );
};

export default TitlePage;
