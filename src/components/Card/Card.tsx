import React from "react";
import styled from "styled-components";

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
      font-size: 15px;
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

function Card({ children, ...rest }: any) {
  return (
    <StyledCard {...rest}>
      <div className="ticketImg">
        <img src={rest.imgUrl} alt={rest.imgAlt} />
      </div>
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
      {children}
    </StyledCard>
  );
}

Card.defaultProps = {
  fontSize: "15px",
};

export default Card;
