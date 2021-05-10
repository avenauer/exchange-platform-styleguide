import React, { Component } from "react";
import {
  Color,
  ColorWrapper,
  HexSpan,
  NameSpan,
  PaletteStyled
} from "./_components";
import { themes } from "../theming";

class Palette extends Component {
  existingThemes = Object.keys(themes.dark.color);
  styles = this.existingThemes.map(d => {
    return Object.entries(themes.dark.color[d]);
  });
  render() {
    return (
      <PaletteStyled>
        {this.styles.map(d => {
          return (
            <ColorWrapper>
              {d.map(obj => {
                return (
                  <Color style={{ backgroundColor: obj[1] }}>
                    <NameSpan>{obj[0]}</NameSpan>
                    <HexSpan>{obj[1]}</HexSpan>
                  </Color>
                );
              })}{" "}
            </ColorWrapper>
          );
        })}
      </PaletteStyled>
    );
  }
}

export default Palette;
