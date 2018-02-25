import React from 'react';
import Navbar from '../components/NavbarWithoutImg';
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
						<strong>Projetos e Eventos</strong>
					</h2>
					<div className="w-75 center">
						<p className="tj">
							A Unit1337 incentiva eventos comunitários e universitários (OutFlag). Nesta seção, você pode conferir
							alguns dos projetos já realizados pela Unit1337 e ficar por dentro dos que estão por vir
						</p>
					</div>

					<div className="cf pa2 mw6 center">
						<article>
							<a class="link dt w-100 bb b--white-10 pb2 mt2 blue" href="#0">
								<div class="dtc w4">
									<img src={ctif1} class="db w-100" />
								</div>
								<div class="dtc v-top pl2">
									<h1 class="f6 f5-ns fw6 lh-title white mv0">CTiF v4</h1>
									<h2 class="f6 fw4 mt2 mb0 white-60">Será realizado no dia 23/03/2018</h2>
									<dl class="mt2 f6">
										<dd class="ml0 gray">Equipe vencedora: -----</dd>
									</dl>
								</div>
							</a>
						</article>
						<article>
							<a class="link dt w-100 bb b--white-10 pb2 mt2 blue" href="#0">
								<div class="dtc w4">
									<img src={ctif1} class="db w-100" />
								</div>
								<div class="dtc v-top pl2">
									<h1 class="f6 f5-ns fw6 lh-title white mv0">CTiF v2</h1>
									<h2 class="f6 fw4 mt2 mb0 white-60">Realizado no dia 19/07/2017</h2>
									<dl class="mt2 f6">
										<dd class="ml0 gray">Equipe vencedora: 4 pokemóns perdidos</dd>
									</dl>
								</div>
							</a>
						</article>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
