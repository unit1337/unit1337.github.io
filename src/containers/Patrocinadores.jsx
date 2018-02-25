import React from 'react';
import Navbar from '../components/NavbarWithoutImg';
import PatrocinioList from '../components/PatrocinioList';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import ctif1 from '../assets/ctif.jpg';

export default class OutFlag extends React.Component {
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
				<Navbar />
				<div className="cf ph2-ns">
					<h2 className="tc f1 lh-title white center">
						<strong>Patrocinadores</strong>
					</h2>
					<div className="w-75 center">
						<p className="tj">
							A Unit1337 conta com o apoio de seus patrocinadores para manter vivo o projeto, seja com apoio financeiro,
							equipamentos, softwares e staff. Deixamos aqui o nosso <strong>Muito obrigado. xD</strong>
						</p>
					</div>
					<PatrocinioList />
				</div>
				<Footer />
			</div>
		);
	}
}
