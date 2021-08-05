import React, { useState } from "react"
import About from "./About"
import Filter from "./Filter"
import Friends from "./Friends"
import LoginForm from "./LoginForm"
import Navigation from "./Navigation"
import NotFound from "./NotFound"
import Park from "./Park"
import ParkForm from "./ParkForm"
import Parks from "./Parks"


// routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";
import Login from "./LoginForm";

import '../assets/scss/pages/app.scss'

const App = () => {
	// const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [page, setPage] = useState(0);
	// const theme = useMemo(
	// 	() =>
	// 		createMuiTheme({
	// 			palette: {
	// 				type: prefersDarkMode ? "dark" : "light"
	// 			}
	// 		}),
	// 	[prefersDarkMode]
	// );

	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};
	const switchPage = () => {
		switch (page) {
			case 0:
				return <Home changePage={handleChangePage} />;
			default:
				return <h1>404 Page</h1>;
		}
	};

	return (
		
		<Router>
		<Switch>
		<Route exact path='/Home' component={Home} />
		<Route exact path='/Navigation' component={Navigation} />
		<Route exact path='/Filter' component={Filter} />
		<Route exact path='/About' component={About} />
		<Route exact path='/LoginForm' component={LoginForm} />
		<Route exact path='/Friends' component={Friends} />
		<Route exact path='/Park' component={Park} />
		<Route exact path='/Parks' component={Parks} />
		<Route exact path='/NotFount' component={NotFound} />
		</Switch>
		</Router>
		
	);
};

export default App;
