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
    <div>
      {list.map((item: Theme) => (
        <div key={item.id}>
          <h3>
            <a href="#" onClick={(e) => onClick(e, item.id)}>
              {item.tag}
            </a>
          </h3>
          {item.id === arrNum
            ? item.data.map((item: ThemeData) => <ThemeItem item={item} />)
            : null}
        </div>
      ))}
    </div>
  );
};

export default ThemeList;
