import React from 'react';
import { Link } from 'react-router-dom';

export default class Links extends React.Component {
	constructor(props) {
		super();
		this.state = {};
	}

	componentWillMount() {}
	componentDidMount() {}
	componentWillReceiveProps() {}

	render() {
		return (
			<header class="bg-black-70 fixed w-100 ph3 pv2 pv2-ns ph4-m ph5-l">
				<nav class="f6 fw6 ttu tracked">
					<Link className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3 dib mr1 link dim" to="/">
						<i className="fa fa-flag" />
					</Link>
					<Link className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3 dib mr1 link dim" to="/outflag">
						OutFlag
					</Link>
					<div class="dropdown white dib mr1">
						<Link className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3 dib mr1 link dim" to="/projects">
							Projetos
						</Link>
						<div class="dropdown-content">
							<p className="white hover-green pointer ml3 bg-hover-black pv2 ph2">Hello World!</p>
							{/* <p className="white hover-green pointer bg-hover-black pv2 ph2 ml3">Hello World!</p> */}
							{/* <p className="white hover-green pointer ml3 bg-hover-black pv2 ph2">Hello World!</p> */}
						</div>
					</div>
					<Link
						className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3 dib mr1 link dim"
						to="/patrocinadores"
					>
						Patrocinadores
					</Link>
				</nav>
			</header>
		);
	}
}
