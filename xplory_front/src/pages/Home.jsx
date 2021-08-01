import React from "react";

import { Button } from "@material-ui/core";

export default function Home(props) {
	return (
		<div>
			<h1>Home Page</h1>

			<Button onClick={()=>props.history.push('login')} variant='contained' color='primary'>
				Hello Team
			</Button>
		</div>
	);
}
