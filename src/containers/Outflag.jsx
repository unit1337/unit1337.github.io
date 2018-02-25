import React from 'react';
import Navbar from '../components/NavbarWithoutImg';
import Footer from '../components/Footer';

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
						<strong>OutFlag</strong>
					</h2>
					<div className="w-75 center">
						<p className="tj">
							OutFlag é um projeto de CTF. CTF significa Capture the Flag, caso você não saiba, CTF's são como
							olimpiadas para os hackers, existem dois tipos de CTF, Jeopardy e Attack/Defense, o primeiro é semelhante
							à quiz, uma plataforma composta de vários desafios das áreas de cybersegurança, Forense Computacional,
							Criptografia, Pentest Web e outras tantas. A segunda é algo mais insano onde equipes se infrentam em
							servidores reais, onde cada equipe precisa atacar o ambiente das equipes adversárias e defender o próprio.
						</p>
					</div>

					<h2 className="tc f1 lh-title white center">
						<strong>Regras</strong>
					</h2>
					<div className="w-75 center">
						<div class="fl w-third">
							<div class="ba b--white-30 flex items-center lh-copy pa3 bb tj">
								<i class="fa fa-users f1 w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
								<div class="pl3 flex-auto">
									<h2 class="db white-70 f4">Membros</h2>
									<span class="f6 db white-70">
										Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Em pé sem
										cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Pra lá , depois divoltis porris,
										paradis. Cevadis im ampola pa arma uma pindureta.
									</span>
								</div>
							</div>
						</div>
						<div class="fl w-third">
							<div class="ba b--white-30 flex items-center lh-copy pa3 bb tj">
								<i class="fa fa-users f1 w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
								<div class="pl3 flex-auto">
									<h2 class="db white-70 f4">Membros</h2>
									<span class="f6 db white-70">
										Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Em pé sem
										cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Pra lá , depois divoltis porris,
										paradis. Cevadis im ampola pa arma uma pindureta.
									</span>
								</div>
							</div>
						</div>
						<div class="fl w-third">
							<div class="ba b--white-30 flex items-center lh-copy pa3 bb tj">
								<i class="fa fa-users f1 w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
								<div class="pl3 flex-auto">
									<h2 class="db white-70 f4">Membros</h2>
									<span class="f6 db white-70">
										Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Em pé sem
										cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Pra lá , depois divoltis porris,
										paradis. Cevadis im ampola pa arma uma pindureta.
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-75 center">
						<div class="fl w-third">
							<div class="ba b--white-30 flex items-center lh-copy pa3 bb tj">
								<i class="fa fa-users f1 w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
								<div class="pl3 flex-auto">
									<h2 class="db white-70 f4">Membros</h2>
									<span class="f6 db white-70">
										Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Em pé sem
										cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Pra lá , depois divoltis porris,
										paradis. Cevadis im ampola pa arma uma pindureta.
									</span>
								</div>
							</div>
						</div>
						<div class="fl w-third">
							<div class="ba b--white-30 flex items-center lh-copy pa3 bb tj">
								<i class="fa fa-users f1 w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
								<div class="pl3 flex-auto">
									<h2 class="db white-70 f4">Membros</h2>
									<span class="f6 db white-70">
										Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Em pé sem
										cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Pra lá , depois divoltis porris,
										paradis. Cevadis im ampola pa arma uma pindureta.
									</span>
								</div>
							</div>
						</div>
						<div class="fl w-third">
							<div class="ba b--white-30 flex items-center lh-copy pa3 bb tj">
								<i class="fa fa-users f1 w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
								<div class="pl3 flex-auto">
									<h2 class="db white-70 f4">Membros</h2>
									<span class="f6 db white-70">
										Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Em pé sem
										cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Pra lá , depois divoltis porris,
										paradis. Cevadis im ampola pa arma uma pindureta.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
