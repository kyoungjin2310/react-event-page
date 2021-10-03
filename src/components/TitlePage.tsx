import React from "react";
import { url } from "../apis/api";

const TitlePage = () => {
  return (
    <div>
      <h1>
        <span>JEJU</span>
        <span>쉬고 싶으면? 제주! 인생 사진도? 제주!</span>
        <span>인생제주</span>
      </h1>
      <img src={`${url}img/사진.png`} alt="인생제주" />
    </div>
  );
};

export default TitlePage;
