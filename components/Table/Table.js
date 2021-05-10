import React, { Component } from "react";
import {
  CellPadding,
  Heading,
  HeadingCell,
  Row,
  TableBody,
  TableStyled
} from "./_components";
import { LightSpan } from "../mainComponents";

class Table extends Component {
  render() {
    return (
      <TableStyled>
        <TableBody>
          <Heading>
            <HeadingCell>
              <LightSpan>TestHead</LightSpan>
            </HeadingCell>
            <HeadingCell>
              <LightSpan>TestHead2</LightSpan>
            </HeadingCell>
            <HeadingCell>
              <LightSpan>TestHead3</LightSpan>
            </HeadingCell>
          </Heading>
          <Row>
            <CellPadding>
              <p>Test</p>
            </CellPadding>
            <CellPadding>
              <p>Test</p>
            </CellPadding>
            <CellPadding>
              <p>Test</p>
            </CellPadding>
          </Row>
          <Row>
            <CellPadding>
              <p>Test</p>
            </CellPadding>
            <CellPadding>
              <p>Test</p>
            </CellPadding>
            <CellPadding>
              <p>Test</p>
            </CellPadding>
          </Row>
          <Row>
            <CellPadding>
              <p>Test</p>
            </CellPadding>
            <CellPadding>
              <p>Test</p>
            </CellPadding>
            <CellPadding>
              <p>Test</p>
            </CellPadding>
          </Row>
        </TableBody>
      </TableStyled>
    );
  }
}

export default Table;
