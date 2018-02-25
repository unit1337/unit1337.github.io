import React from 'react';
import Navbar from '../components/NavbarWithoutImg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

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

					<div className="cf pa2">
						<div className="fl w-50 w-25-m w-20-l pa2">
							<a
								href="http://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"
								target="_blank"
								className="db link dim tc"
							>
								<img
									src="http://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"
									className="w-100 db outline black-10"
								/>
								<dl className="mt2 f6 lh-copy">
									<dd className="ml0 white truncate w-100">23/03/2018 - 13:37</dd>
									<dd className="ml0 white truncate w-100">OutFlag - CTiF 4ª Edição</dd>
								</dl>
							</a>
						</div>
						<div className="fl w-50 w-25-m w-20-l pa2">
							<a href="" className="db link dim tc">
								<img
									src="http://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"
									className="w-100 db outline black-10"
								/>
								<dl className="mt2 f6 lh-copy">
									<dd className="ml0 white truncate w-100">23/03/2018 - 13:37</dd>
									<dd className="ml0 white truncate w-100">OutFlag - CTiF 4ª Edição</dd>
								</dl>
							</a>
						</div>
						<div className="fl w-50 w-25-m w-20-l pa2">
							<a href="" className="db link dim tc">
								<img
									src="http://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"
									className="w-100 db outline black-10"
								/>
								<dl className="mt2 f6 lh-copy">
									<dd className="ml0 white truncate w-100">23/03/2018 - 13:37</dd>
									<dd className="ml0 white truncate w-100">OutFlag - CTiF 4ª Edição</dd>
								</dl>
							</a>
						</div>
						<div className="fl w-50 w-25-m w-20-l pa2">
							<a href="" className="db link dim tc">
								<img
									src="http://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"
									className="w-100 db outline black-10"
								/>
								<dl className="mt2 f6 lh-copy">
									<dd className="ml0 white truncate w-100">23/03/2018 - 13:37</dd>
									<dd className="ml0 white truncate w-100">OutFlag - CTiF 4ª Edição</dd>
								</dl>
							</a>
						</div>
						<div className="fl w-50 w-25-m w-20-l pa2">
							<a href="" className="db link dim tc">
								<img
									src="http://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg"
									className="w-100 db outline black-10"
								/>
								<dl className="mt2 f6 lh-copy">
									<dd className="ml0 white truncate w-100">23/03/2018 - 13:37</dd>
									<dd className="ml0 white truncate w-100">OutFlag - CTiF 4ª Edição</dd>
								</dl>
							</a>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
