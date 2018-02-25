import React from 'react';

export default class PatrocinioList extends React.Component {
	constructor(props) {
		super();
		this.state = {};
	}

	componentWillMount() {}
	componentDidMount() {}
	componentWillReceiveProps() {}

	render() {
		return (
			<div className="cf pa2 mw6 center">
				<article>
					<a className="link dt w-100 bb b--white-10 pb2 mt2 blue" href="#0">
						<div className="dtc w4">
							<img src="http://www.grupocomp.com.br/logo_gc.jpeg" className="db w-100" />
						</div>
						<div className="dtc v-top pl2">
							<h1 className="f6 f5-ns fw6 lh-title white mv0">Grupo Comp Soluções</h1>
							<h2 className="f6 fw4 mt2 mb0 white-60">Grupo de treinamento</h2>
						</div>
					</a>
				</article>
				<article>
					<a className="link dt w-100 bb b--white-10 pb2 mt2 blue" href="#0">
						<div className="dtc w4">
							<img
								src="https://avatars0.githubusercontent.com/u/25186237?s=400&u=be5d248548e839dd16e9c704a9d76bca73e2ad15&v=4"
								className="db w-100"
							/>
						</div>
						<div className="dtc v-top pl2">
							<h1 className="f6 f5-ns fw6 lh-title white mv0">Uname Corp</h1>
							<h2 className="f6 fw4 mt2 mb0 white-60">
								Empresa de projetos OpenSource, fornecedora da nossa plataforma de CTF
							</h2>
						</div>
					</a>
				</article>
			</div>
		);
	}
}
