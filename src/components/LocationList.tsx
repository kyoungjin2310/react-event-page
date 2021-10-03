import React from "react";
import { Location } from "../apis/type";
import LocationItem from "./LocationItem";

const LocationList = ({ list }: any) => {
  return (
    <div>
      {list.map((item: Location) => (
        <LocationItem item={item} />
      ))}
    </div>
  );
};

export default LocationList;
