import React from "react";
import { url } from "../apis/api";
import List from "./List/List";

type LocationItemProps = {
  item: any;
  index: number;
};

const LocationItem = ({ item, index }: LocationItemProps) => {
  return (
    <List
      index={`0${index + 1}. `}
      title={item.title}
      description={item.description}
      sightsTitle={"추천명소 : "}
      sights={item.sights}
      img={`${url}img/${item.img}`}
    ></List>
  );
};

export default LocationItem;
