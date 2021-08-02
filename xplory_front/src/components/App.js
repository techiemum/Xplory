import React, { useState } from "react"
import About from "./About"
import Filter from "./Filter"
import Friends from "./Friends"
import LoginForm from "./LoginForm"
import Navigation from "./Navigation"
import NotFound from "./NotFound"
import Park from "./Park"
import ParksForm from "./ParksForm"
import Parks from "./Parks"


// routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
