import React from "react";
import { url } from "../apis/api";

function numberWithCommas(num: number) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TicketItem = ({ item }: any) => {
  return (
    <li>
      <div className="img">
        <img
          src={`${url}img/${item.img}`}
          alt={`${item.category} ${item.title}`}
        />
      </div>
      <p className="ticket">
        {item.ticket_type}
        <span>{item.discount_percent}%</span>
      </p>
      <h3 className="title">
        <span className="fontSize">[{item.category}]</span>
        <span>{item.title}</span>
      </h3>
      <p className="price">
        <span className="ticketPrice">
          <em>{numberWithCommas(item.ticket_price)}</em>원
        </span>
        <span className="discount">
          <em>{numberWithCommas(item.discount_price)}</em>원
        </span>
      </p>
    </li>
  );
};

export default TicketItem;
