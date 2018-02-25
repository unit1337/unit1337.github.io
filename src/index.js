import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'tachyons';
import './styles/index.css';
import Main from './containers/Main';
import Projects from './containers/Projects';
import OutFlag from './containers/Outflag';
import Patrocinadores from './containers/Patrocinadores';
import registerServiceWorker from './registerServiceWorker';

const Routes = () => (
	<Router>
		<div>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/outflag" component={OutFlag} />
				<Route exact path="/projects" component={Projects} />
				<Route exact path="/patrocinadores" component={Patrocinadores} />
			</Switch>
		</div>
	</Router>
);
// <Route component={Error404} />

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
