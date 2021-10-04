import React from "react";
import { url } from "../apis/api";
type LocationItemProps = {
  item: any;
  index: number;
};

const LocationItem = ({ item, index }: LocationItemProps) => {
  return (
    <li className={index % 2 === 0 ? "odd" : "even"}>
      <div>
        <h3 className="locationTitle">
          <span className="num">{`0${index + 1}. `}</span>
          <span>{item.title}</span>
        </h3>
        <p>{item.description}</p>
        <p>추천명소 : {item.sights}</p>
        <p className="img">
          <img src={`${url}img/${item.img}`} alt={`${item.title}`} />
        </p>
      </div>
    </li>
  );
};

export default LocationItem;
