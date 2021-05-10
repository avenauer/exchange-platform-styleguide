import React, {Component} from "react";
import {LinksStyled, PlatformLink, WebsiteLink} from "./_components";


class Links extends Component {
	render() {
		return (
			<LinksStyled>
				<h2>Platform</h2>
				<table>
					<tr>
						<th><h3>Example</h3></th>
						<th><h3>Font size</h3></th>
						<th><h3>Font family</h3></th>
						<th><h3>Font weight</h3></th>
						<th><h3>Line height</h3></th>
					</tr>
					<tr>
						<td><PlatformLink><a>Reset your password</a>
							<h5>No account? <a>Register</a></h5>
						</PlatformLink></td>
						<td><h3>12px</h3></td>
						<td><h3>Poppins</h3></td>
						<td><h3>600</h3></td>
						<td><h3>1.5</h3></td>
					</tr>
				</table>
				<h2>Website</h2>
				<table>
					<tr>
						<th><h3>Example</h3></th>
						<th><h3>Font size</h3></th>
						<th><h3>Font family</h3></th>
						<th><h3>Font weight</h3></th>
						<th><h3>Line height</h3></th>
					</tr>
					<tr>
						<td><WebsiteLink><a>LOREM IPSUM</a>
						</WebsiteLink></td>
						<td><h3>16px</h3></td>
						<td><h3>Lato</h3></td>
						<td><h3>600</h3></td>
						<td><h3>1.5</h3></td>
					</tr>
				</table>
			</LinksStyled>
		);
	}
}

export default Links;

