import React from 'react';
import Links from './Links';
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
				<div
					className="cover bg-left bg-center-l"
					style={{ backgroundImage: 'url(https://i.redd.it/oenwl8eze40y.jpg)' }}
				>
					<div className="bg-black-70 pb6 pb6-m pb6-l">
						<nav className="dt w-100 w-100-m w-100-l center">
							<Links />
						</nav>
						<div className="tc-l mt6 mt6-m mt6-l ph3">
							<h1 className="f2 f1-l fw2 white-90 mb0 lh-title">
								<strong>Awesome CTF Team</strong>
							</h1>
							<h2 className="fw1 f3 white-80 mt3 mb4">
								<strong>Unit1337, We are Leet</strong>
							</h2>
							<Link className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" to="/">
								<i className="fa fa-music white" /> Our Playlist
							</Link>
							<span className="dib v-mid ph3 white-70 mb3">or</span>
							<a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="https://github.com/unit1337">
								<i className="fab fa-github white" /> Github
							</a>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
