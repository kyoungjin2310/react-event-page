import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const StyledCard = styled.li`
  float: left;
  width: 50%;
  margin-top: 22px;
  padding-left: 15px;
  box-sizing: border-box;
  .ticketImg {
    margin-bottom: 14px;
  }
  .ticket {
    position: relative;
    margin-bottom: 5px;
    color: #000;
    overflow: hidden;
    span {
      float: right;
      padding: 0 4px;
      line-height: 14px;
      border-radius: 14px;
      background-color: #eb6226;
      color: #fff;
      font-family: $Rowdies;
    }
  }
  .title {
    span {
      display: block;
      margin-bottom: 13px;
      color: #010101;
      font-size: 14px;
      line-height: 18px;
      font-weight: 700;
      letter-spacing: -0.7px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .fontSize {
      margin-bottom: 0px;
      font-size: ${(props: CardProps) => props.fontSize + "px"};
    }
  }
  .price {
    line-height: 18px;
    letter-spacing: -0.7px;
    color: #4f4f4f;
    font-size: 14px;
  }
  .discount {
    text-decoration: none;
    font-weight: 700;
    color: #010101;
    em {
      margin-left: 5px;
      font-family: $Rowdies;
      font-weight: 900;
      letter-spacing: -0.7px;
    }
  }

  .ticketPrice {
    text-decoration: line-through;
  }
`;

type CardProps = {
  children?: ReactNode;
  category: string;
  title: string;
  ticketType: string;
  imgUrl: string;
  imgAlt: string;
  discountPercent: string;
  ticketPrice: string;
  discountPrice: string;
  fontSize?: number;
};

function Card({ children, ...rest }: CardProps) {
  return (
    <StyledCard {...rest}>
      <a href="#" title={`${rest.category} ${rest.title}`}>
        <p className="ticketImg">
          <img src={rest.imgUrl} alt={rest.imgAlt} />
        </p>
        <p className="ticket">
          {rest.ticketType}
          <span>{rest.discountPercent}</span>
        </p>
        <h3 className="title">
          <span className="fontSize">[{rest.category}]</span>
          <span>{rest.title}</span>
        </h3>
        <p className="price">
          <span className="ticketPrice">
            <em>{rest.ticketPrice}</em>원
          </span>
          <span className="discount">
            <em>{rest.discountPrice}</em>원
          </span>
        </p>
      </a>
      {children}
    </StyledCard>
  );
}

Card.defaultProps = {
  fontSize: 15,
};

export default Card;
