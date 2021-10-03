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
    <ul className="ThemeList">
      {list.map((item: Theme) => (
        <li key={item.id}>
          <h3 className="themeLink">
            <a href="#" onClick={(e) => onClick(e, item.id)}>
              {item.tag}
            </a>
          </h3>
          <ul>
            {item.id === arrNum
              ? item.data.map((item: ThemeData) => (
                  <ThemeItem item={item} key={item.id} />
                ))
              : null}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ThemeList;
