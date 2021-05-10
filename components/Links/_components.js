import styled from "@emotion/styled";
import {themes} from "../theming";

export const LinksStyled = styled.div`
	margin: 0 2em;
	  table {
    tr {
      th,
      td {
        padding: 0.5em;
       
        h3 {
          text-align: left;
          margin: 0.5em;
        }
      }
    }
  }
`;
export const PlatformLink = styled.div`
 a{
	color: ${themes.dark.color.deepgreen.deepgreen};
	font-family: Poppins, sans-serif;
	font-size: 1.2rem;
    line-height: 1.5;
    font-weight: 600;
    cursor: pointer;
	}
`;
export const WebsiteLink = styled.div`
	
 a{
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 400;
    font-family: Lato, sans-serif;
    position: relative;
    text-decoration: none;
    z-index: 1;
    cursor: pointer;
	padding: 0 10px 5px;
     ::before{
     	content: "";
	 	width: 100%;
	 	height: 100%;
	 	border-bottom: 1px solid  ${themes.dark.color.deepgreen.deepgreen};
	 	position: absolute;
	 	left: 0;
	 	z-index: -1;
	 	will-change: width;
	 	transform: rotate(-2deg);
	 	transform-origin: left bottom;

}

	}
`;