import React from "react";
import { url } from "../apis/api";

const TicketItem = ({ item }: any) => {
  return (
    <div>
      <h3>
        <span>{item.category}</span>
        <span>{item.title}</span>
      </h3>
      <p>{item.ticket_type}</p>
      <p>{item.discount_percent}</p>
      <p>
        <span>{item.ticket_price}</span>
        <span>{item.discount_price}</span>
      </p>
      <p>
        <img
          src={`${url}img/${item.img}`}
          alt={`${item.category} ${item.title}`}
        />
      </p>
    </div>
  );
};

export default TicketItem;
