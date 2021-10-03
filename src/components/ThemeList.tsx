import React, { MouseEvent, useState, useEffect } from "react";
import { Theme, ThemeData } from "../apis/type";
import ThemeItem from "./ThemeItem";
import { Link } from "react-router-dom";
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
            <Link to="#" onClick={(e) => onClick(e, item.id)}>
              {item.tag}
            </Link>
          </h3>
          <ul>
            {item.id === arrNum
              ? item.data.map((item: ThemeData) => <ThemeItem item={item} />)
              : null}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default ThemeList;
