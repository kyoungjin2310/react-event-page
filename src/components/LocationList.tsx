import React from "react";
import { Location } from "../apis/type";
import LocationItem from "./LocationItem";

type LocationListProps = {
  list: Location[];
};

const LocationList = ({ list }: LocationListProps) => {
  return (
    <ul className="locationList">
      {list.map((item: Location, index: number) => (
        <LocationItem item={item} index={index} key={item.id} />
      ))}
    </ul>
  );
};

export default LocationList;
