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
			<div>
				<div className="dtc w2 v-mid pa3">
					<Link to="/" className="dib w2 h2 pa1 grow-large border-box">
						<i className="fa fa-flag white" />
					</Link>
				</div>
				<div className="dtc v-mid tr pa3 w-100">
					<Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/outflag">
						OutFlag
					</Link>
					<Link className="f6 fw4 hover-white no-underline white-70 dn dib-ns pv2 ph3" to="/outflag">
						Writeups
					</Link>
					<Link className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" to="/outflag">
						CodingDojo
					</Link>
					<Link className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3" to="/projects">
						Projects
					</Link>
				</div>
			</div>
		);
	}
}
