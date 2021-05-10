import React, { Component } from "react";
import { PaginationStyled } from "./_components";
import ArrowLeft from "../../assets/icons/arrow-left.svg";
import DoubleArrowLeft from "../../assets/icons/double-arrow-left.svg";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import DoubleArrowRight from "../../assets/icons/double-arrow-right.svg";

class Pagination extends Component {
  render() {
    return (
      <PaginationStyled>
        <img alt={"doubleArrowLeft"} src={DoubleArrowLeft} />
        <img alt={"arrowLeft"} src={ArrowLeft} />
        {this.props.children}
        <img alt={"arrowRight"} src={ArrowRight} />
        <img alt={"doubleArrowRight"} src={DoubleArrowRight} />
      </PaginationStyled>
    );
  }
}

export default Pagination;
