import React from 'react';
import Links from "./Links"
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
	constructor(props) {
		super();
		this.state = {};
	}

	componentWillMount = () => {};
	componentDidMount = () => {};
	componentWillReceiveProps = nextProps => {};

	render() {
		return (
			<header className="sans-serif">
				<div className="cover bg-left bg-center-l">
					<div className="bg-black-70 pb2 pb2-m pb2-l">
						<nav className="dt w-100 mw8 center">
							<Links />
						</nav>
					</div>
				</div>
			</header>
		);
	}
}
