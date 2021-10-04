import React from "react";
import { Location } from "../apis/type";
import LocationItem from "./LocationItem";

const LocationList = ({ list }: any) => {
  return (
    <ul className="locationList">
      {list.map((item: Location, index: number) => (
        <LocationItem item={item} index={index} key={list.id} />
      ))}
    </ul>
  );
};

export default LocationList;
