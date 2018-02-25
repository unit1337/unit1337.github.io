import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
											backgroundImage:
												'url(https://orig00.deviantart.net/e145/f/2013/153/d/d/deadpool_button_design_by_fonteart-d67l01u.png)'
										}}
										className="link mw5 dt db hide-child br2 cover bg-center center"
									>
										<span className="white dtc v-mid w-100 h-100 child bg-black-70 pa5">Hack the planet</span>
									</a>
									<div className="pa2 bt b--black-20">
										<a className="f6 db link dark-green hover-blue" href="#">
											Whoarei
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
											backgroundImage:
												'url(https://orig00.deviantart.net/e145/f/2013/153/d/d/deadpool_button_design_by_fonteart-d67l01u.png)'
										}}
										className="link mw5 dt db hide-child br2 cover bg-center center"
									>
										<span className="white dtc v-mid w-100 h-100 child bg-black-70 pa5">Hello World</span>
									</a>
									<div className="pa2 bt b--black-20">
										<a className="f6 db link dark-green hover-blue" href="#">
											AfterByte
										</a>
										<p className="f6 gray mv1">The Developer</p>
									</div>
								</article>
							</section>
						</div>
						<div className="fl w-third">
							<section className="tc pa1 pa1-ns">
								<article className="hide-child relative ba b--black-20 mw5 center">
									<a
										style={{
											backgroundImage:
												'url(https://orig00.deviantart.net/e145/f/2013/153/d/d/deadpool_button_design_by_fonteart-d67l01u.png)'
										}}
										className="link mw5 dt db hide-child br2 cover bg-center center"
									>
										<span className="white dtc v-mid w-100 h-100 child bg-black-70 pa5">Hello friend</span>
									</a>
									<div className="pa2 bt b--black-20">
										<a className="f6 db link dark-green hover-blue" href="#">
											J0hnW1ck
										</a>
										<p className="f6 gray mv1">The Design</p>
									</div>
								</article>
							</section>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
