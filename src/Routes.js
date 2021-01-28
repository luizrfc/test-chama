import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from 'pages/home';
import History from 'pages/history';

const Routes = () => {
		return <BrowserRouter>
			<Switch>
					<Route path='/history' component={History} />
					<Route path='/*' component={Home} />
			</Switch>
		</BrowserRouter>
}

export default Routes;
