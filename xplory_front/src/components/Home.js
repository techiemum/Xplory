import React from "react";

import { Button } from "reactstrap";

import Maps from './Maps'

export default function Home(props) {
	return (
		<div>
			<h1>Home Page</h1>

			<Button onClick={()=>props.history.push('login')} color='primary'>
				Hello Team
			</Button>
			<Maps/>
		</div>
	);
}

