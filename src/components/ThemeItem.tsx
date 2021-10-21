import React from "react";
import { url } from "../apis/api";
import Card from "./Card/Card";
import { ThemeData } from "../apis/type";

type TicketItemType = {
  item: ThemeData;
};

function numberWithCommas(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TicketItem = ({ item }: TicketItemType) => {
  return (
    <Card
      imgUrl={`${url}img/${item.img}`}
      imgAlt={`${item.category} ${item.title}`}
      ticketType={item.ticket_type}
      discountPercent={item.discount_percent + "%"}
      category={item.category}
      title={item.title}
      ticketPrice={numberWithCommas(item.ticket_price)}
      discountPrice={numberWithCommas(item.discount_price)}
    ></Card>
  );
};

export default TicketItem;
