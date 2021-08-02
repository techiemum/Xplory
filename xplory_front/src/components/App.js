import React, { useState, useMemo } from "react";

// routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Utils
import { createMuiTheme, ThemeProvider, CssBaseline, useMediaQuery, switchPage } from "@material-ui/core";

//Styles
import "./assets/scss/app.scss";

import Home from "./pages/Home";
import Login from "./pages/Login";


const App = () => {
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
	const [page, setPage] = useState(0);
	const theme = useMemo(
		() =>
			createMuiTheme({
				palette: {
					type: prefersDarkMode ? "dark" : "light"
				}
			}),
		[prefersDarkMode]
	);

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
		<ThemeProvider theme={theme}>
		<Router>
		<Switch>
		<Route exact path='/' component={Home} />
		<Route exact path='/login' component={Login} />
		</Switch>
		</Router>
		</ThemeProvider>
	);
};

export default App;
