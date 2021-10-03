import React from "react";
import { Location } from "../apis/type";
import LocationItem from "./LocationItem";

const LocationList = ({ list }: any) => {
  return (
    <ul>
      {list.map((item: Location) => (
        <LocationItem item={item} key={list.id} />
      ))}
    </ul>
  );
};

export default LocationList;
