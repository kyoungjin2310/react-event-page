import React from "react";
import { url } from "../apis/api";

const LocationItem = ({ item }: any) => {
  return (
    <li key={item.id} className="locationList">
      <div>
        <h3 className="locationTitle">{item.title}</h3>
        <p>{item.description}</p>
        <p>추천명소 : {item.sights}</p>
        <p>
          <img src={`${url}img/${item.img}`} alt={`${item.title}`} />
        </p>
      </div>
    </li>
  );
};

export default LocationItem;
