import React from "react";
import { Button } from "reactstrap";
import Maps from './Maps'

export default function Home(props) {
	return (
		<div>
			<h1>Xplory</h1>

			<Button onClick={()=>props.history.push('LoginForm')} color='primary'>
				Login
			</Button>
			<Maps/>
		</div>
	);
}

