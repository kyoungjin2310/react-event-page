import React from "react";
import { url } from "../apis/api";

const LocationItem = ({ item }: any) => {
  return (
    <div>
      <div key={item.id}>
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>추천명소 : {item.sights}</p>
          <p>
            <img src={`${url}img/${item.img}`} alt={`${item.title}`} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationItem;
