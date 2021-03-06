import React from "react";
import { url } from "../apis/api";
import List from "./List/List";
import { Location } from "../apis/type";

type LocationItemProps = {
  item: Location;
  index: number;
};

const LocationItem = ({ item, index }: LocationItemProps) => {
  return (
    <List
      index={index}
      title={item.title}
      description={item.description}
      sightsTitle={"추천명소 : "}
      sights={item.sights}
      img={`${url}img/${item.img}`}
    ></List>
  );
};

export default LocationItem;
