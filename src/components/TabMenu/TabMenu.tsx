import React, { ReactNode } from "react";
import styled, { css } from "styled-components";

const StyledTabMenu = styled.h3`
  background-color: #fff;
  height: 35px;
  text-align: center;
  font-weight: 300;
  transition: 0.25s background-color ease;

  /* 색상 */
  ${(props: TabMenu) => {
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

type TabMenu = {
  children?: ReactNode;
  className?: string;
  bdColor?: string;
};

function TabMenu({ children, ...rest }: TabMenu) {
  return <StyledTabMenu {...rest}>{children}</StyledTabMenu>;
}

TabMenu.defaultProps = {
  bdColor: "#c45722",
};

export default TabMenu;
