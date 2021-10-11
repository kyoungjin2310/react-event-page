import React from "react";
import styled from "styled-components";

const StyledList = styled.li`
  position: relative;
  min-height: 100px;
  margin-bottom: 42px;

  .odd {
    padding-left: 124px;
    .locationImg {
      left: 0;
    }
  }
  .even {
    padding-right: 124px;
    .locationImg {
      right: 0;
    }
  }
  .locationTitle {
    margin-bottom: 10px;
    font-size: 22px;
    line-height: 22px;
    letter-spacing: -0.6px;
    font-weight: 700;
    color: #000;

    .num {
      color: ${(props: any) => props.numColor};
      font-family: $Roboto;
    }
  }
  .fontColor {
    color: ${(props: any) => props.fontColor};
  }
  .locationImg {
    position: absolute;
    top: -5px;
  }
`;
function List({ children, ...rest }: any) {
  return (
    <StyledList
      {...rest}
      className={(rest.index - 1) % 2 === 0 ? "odd" : "even"}
    >
      <div>
        <h3 className="locationTitle">
          <span className="num">{rest.index}</span>
          <span>{rest.title}</span>
        </h3>
        <p>{rest.description}</p>
        <p className="fontColor">
          {rest.sightsTitle + ` `} {rest.sights}
        </p>
        <p className="locationImg">
          <img src={rest.img} alt={rest.title} />
        </p>
      </div>
      {children}
    </StyledList>
  );
}

List.defaultProps = {
  numColor: "#ee5714",
  fontColor: "#62931f",
};

export default List;
