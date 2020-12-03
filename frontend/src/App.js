import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Registration from "./components/Registration";

function App() {
	return (
    

	<Router>
			<div>
				<Switch>
					<Route path="/register" component={Registration} />
					<Route path="/login" component={Login} />
          <Route path="/success" component={Logout} />
				</Switch>
			</div>
		</Router>
  
	
	);
}

export default App;
