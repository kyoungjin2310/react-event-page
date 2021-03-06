import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledMainTitle = styled.h1`
  margin-top: 86px;
  display: inline-block;
  font-weight: 700;

  span {
    display: block;
  }

  .jeju {
    text-align: left;
    img {
      width: auto;
    }
  }

  .title {
    color: ${(props: MainTitle) => props.color};
    font-size: 79px;
    letter-spacing: -3px;
    font-weight: 800;
    line-height: 79px;
    -webkit-text-stroke: 1px #d25c27;
  }

  .txt {
    color: #eb6223;
    font-size: 12px;
    line-height: 15px;
    text-align: right;
  }
`;

type MainTitle = {
  children?: ReactNode;
  imgUrl: string;
  imgAlt: string;
  text: string;
  title: string;
  color?: string;
};

function MainTitle({ children, ...rest }: MainTitle) {
  return (
    <StyledMainTitle {...rest}>
      <span className="jeju">
        <img src={rest.imgUrl} alt={rest.imgAlt} />
      </span>
      <span className="txt">{rest.text}</span>
      <span className="title">{rest.title}</span>
      {children}
    </StyledMainTitle>
  );
}

MainTitle.defaultProps = {
  color: "#ea6327",
};

export default MainTitle;
