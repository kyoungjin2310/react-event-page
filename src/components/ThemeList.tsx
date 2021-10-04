import React, { MouseEvent, useState, useEffect } from "react";
import { Theme, ThemeData } from "../apis/type";
import ThemeItem from "./ThemeItem";

const ThemeList = ({ list }: any) => {
  const [arrNum, setNum] = useState(1);
  const onClick = (e: MouseEvent<HTMLAnchorElement>, id: number) => {
    e.preventDefault();
    setNum(id);
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <div className="theme">
      <h2 className="themeTitle"># 내가 원하는 제주 여행은?</h2>
      <ul className="themeList">
        {list.map((item: Theme) => (
          <li key={item.id}>
            <h3 className="themeLink">
              <a href="#" onClick={(e) => onClick(e, item.id)}>
                {item.tag}
              </a>
            </h3>
            {item.id === arrNum ? (
              <ul className="themeItem">
                {item.data.map((item: ThemeData) => (
                  <ThemeItem item={item} key={item.id} />
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
      <a href="#" className="btn">
        제주 상품 더 보기
      </a>
    </div>
  );
};

export default ThemeList;
