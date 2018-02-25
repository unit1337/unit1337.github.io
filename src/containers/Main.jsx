import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PatrocinioList from '../components/PatrocinioList';
import tron from '../assets/tron.jpg';
import dead from '../assets/deadrebel.jpg';
import design from '../assets/design.png';

export default class Main extends React.Component {
	constructor(props) {
		super();
		this.state = {};
	}

	componentWillMount() {
		document.title = 'Unit1337 - Hello Friend';
	}

	render() {
		return (
			<div>
				<Navbar />
				<div className="cf ph2-ns">
					<div className="fl w-100">
						<h2 className="tc f1 lh-title white center">
							<strong>Our Team</strong>
						</h2>
						<div className="fl w-third">
							<section className="tc pa1 pa1-ns">
								<article className="hide-child relative ba b--black-20 mw5 center">
									<a
										style={{
											backgroundImage: `url(${tron})`
										}}
										className="link mw5 dt db hide-child br2 cover bg-center center"
									>
										<span className="white dtc v-mid w-100 h-100 child bg-black-70 pa5">Hack the planet</span>
									</a>
									<div className="pa2 bt b--black-20">
										<a className="f6 db link dark-green hover-blue" href="#">
											7r0n
										</a>
										<p className="f6 gray mv1">The Hacker</p>
									</div>
								</article>
							</section>
						</div>
						<div className="fl w-third">
							<section className="tc pa1 pa1-ns">
								<article className="hide-child relative ba b--black-20 mw5 center">
									<a
										style={{
											backgroundImage: `url(${dead})`
										}}
										className="link mw5 dt db hide-child br2 cover bg-center center"
									>
										<span className="white dtc v-mid w-100 h-100 child bg-black-70 pa5">Hello World</span>
									</a>
									<div className="pa2 bt b--black-20">
										<a className="f6 db link dark-green hover-blue" href="#">
											D34dReb3l
										</a>
										<p className="f6 gray mv1">The Hacker</p>
									</div>
								</article>
							</section>
						</div>
						<div className="fl w-third">
							<section className="tc pa1 pa1-ns">
								<article className="hide-child relative ba b--black-20 mw5 center">
									<a
										style={{
											backgroundImage: `url(${design})`
										}}
										className="link mw5 dt db hide-child br2 cover bg-center center"
									>
										<span className="white dtc v-mid w-100 h-100 child bg-black-70 pa5">Hello friend</span>
									</a>
									<div className="pa2 bt b--black-20">
										<a className="f6 db link dark-green hover-blue" href="#">
											Pl3xu5
										</a>
										<p className="f6 gray mv1">The Designer</p>
									</div>
								</article>
							</section>
						</div>
					</div>
					<div className="fl w-100">
						<div className="pt2 mt2">
							<h2 className="tc f1 lh-title white center">
								<strong>Patrocinadores</strong>
							</h2>
							<div className="center mw7">
								<PatrocinioList />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
