import React, { Component } from "react";
import { FontsExamplesStyled } from "./_components";

class FontExamples extends Component {
  render() {
    return (
      <FontsExamplesStyled>
        <table>
          <tr>
            <th>
              <h3>Heading</h3>
            </th>
            <th>
              <h3>Example</h3>
            </th>
            <th>
              <h3>Font Size</h3>
            </th>
            <th>
              <h3>Font Family</h3>
            </th>
            <th>
              <h3>Font Weight</h3>
            </th>
            <th>
              <h3>Line Height</h3>
            </th>
          </tr>
          <tr>
            <td>
              <h3>H1</h3>
            </td>
            <td>
              <h1>Lorem ipsum dolor</h1>
            </td>
            <td>
              <h3>54px</h3>
            </td>
            <td>
              <h3>Poppins</h3>
            </td>
            <td>
              <h3>600</h3>
            </td>
            <td>
              <h3>1.1</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>H2</h3>
            </td>
            <td>
              <h2>Lorem ipsum dolor</h2>
            </td>
            <td>
              <h3>36px</h3>
            </td>
            <td>
              <h3>Poppins</h3>
            </td>
            <td>
              <h3>600</h3>
            </td>
            <td>
              <h3>1.125</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>H3</h3>
            </td>
            <td>
              <h3>Lorem ipsum dolor</h3>
            </td>
            <td>
              <h3>24px</h3>
            </td>
            <td>
              <h3>Lato</h3>
            </td>
            <td>
              <h3>400</h3>
            </td>
            <td>
              <h3>1.25</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>P</h3>
            </td>
            <td>
              <p>Lorem ipsum dolor</p>
            </td>
            <td>
              <h3>16px</h3>
            </td>
            <td>
              <h3>Lato</h3>
            </td>
            <td>
              <h3>400</h3>
            </td>
            <td>
              <h3>1.5</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>H4</h3>
            </td>
            <td>
              <h4>Lorem ipsum dolor</h4>
            </td>
            <td>
              <h3>12px</h3>
            </td>
            <td>
              <h3>Poppins</h3>
            </td>
            <td>
              <h3>200</h3>
            </td>
            <td>
              <h3>1.5</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>H5</h3>
            </td>
            <td>
              <h5>Lorem ipsum dolor</h5>
            </td>
            <td>
              <h3>12px</h3>
            </td>
            <td>
              <h3>Poppins</h3>
            </td>
            <td>
              <h3>300</h3>
            </td>
            <td>
              <h3>1.5</h3>
            </td>
          </tr>
        </table>
      </FontsExamplesStyled>
    );
  }
}

export default FontExamples;
