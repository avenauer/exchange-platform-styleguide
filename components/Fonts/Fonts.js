import React, {Component} from "react";
import {
	Bold,
	ExtraLight,
	FontsStyled,
	Light,
	Regular,
	SemiBold
} from "./_components";

class Fonts extends Component {
	render() {
		return (
			<FontsStyled>
				{/*POPPINS*/}
				<h3>Font weights</h3>
				<h2>- Poppins</h2>
				<ExtraLight>
					<h1>Aa</h1>
					<p>
						ExtraLight <b>200</b>
					</p>
				</ExtraLight>
				<Regular>
					<h1>Aa</h1>
					<p>
						Regular <b>400</b>
					</p>
				</Regular>
				<SemiBold>
					<h1>Aa</h1>
					<p>
						SemiBold <b>600</b>
					</p>
				</SemiBold>
				<Bold>
					<h1>Aa</h1>
					<p>
						Bold <b>700</b>
					</p>
				</Bold>
				{/*LATO*/}
				<h2>- Lato</h2>
				<Light>
					<h1>Aa</h1>
					<p>
						Light <b>300</b>
					</p>
				</Light>
				<Regular>
					<h1>Aa</h1>
					<p>
						Regular <b>400</b>
					</p>
				</Regular>
				<SemiBold>
					<h1>Aa</h1>
					<p>
						SemiBold <b>600</b>
					</p>
				</SemiBold>
			</FontsStyled>
		);
	}
}

export default Fonts;
