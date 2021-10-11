import React from "react";
import styled, { css } from "styled-components";

const StyledTabButton = styled.h3`
  background-color: #fff;
  height: 35px;
  text-align: center;
  font-weight: 300;
  transition: 0.25s background-color ease;

  /* 색상 */
  ${(props: any) => {
    const selected = props.bdColor;
    return css`
      border-top: 1px solid ${selected};
      border-bottom: 1px solid ${selected};
      border-right: 1px solid ${selected};
    `;
  }}

  a {
    display: block;
    line-height: 35px;
    color: #c65d29;
    transition: 0.25s color ease;
  }
  &.active {
    background-color: #ec7742;
    a {
      color: #fff;
    }
  }
`;
function TabButton({ children, ...rest }: any) {
  return <StyledTabButton {...rest}>{children}</StyledTabButton>;
}

TabButton.defaultProps = {
  bdColor: "#c45722",
};

export default TabButton;
