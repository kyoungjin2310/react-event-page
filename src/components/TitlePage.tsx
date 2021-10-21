import React from "react";
import { url } from "../apis/api";
import MainTitle from "./Title/MainTitle";

const TitlePage = () => {
  return (
    <div className="main">
      <MainTitle
        imgUrl={`${url}img/Jeju.png`}
        imgAlt={"JEJU"}
        text={"쉬고 싶으면? 제주! 인생 사진도? 제주!"}
        title={"인생제주"}
      ></MainTitle>
      <h2 className="mainSubTitle">COTRIP</h2>
      <img className="mainImg" src={`${url}img/사진.png`} alt="인생제주" />
    </div>
  );
};

export default TitlePage;
