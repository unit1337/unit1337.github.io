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
							Criptografia, Pentest Web e outras tantas. A segunda é algo mais insano onde equipes se enfrentam em
							servidores reais, onde cada equipe precisa atacar o ambiente das equipes adversárias e defender o próprio.
						</p>
					</div>

					<h2 className="tc f1 lh-title white center">
						<strong>Regras</strong>
					</h2>
					<div className="w-75 center">
						<div class="fl w-third">
							<div class="flex items-center lh-copy pa3 tl">
								<i class="fa fa-users f1 w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
								<div class="pl3 flex-auto">
									<h2 class="db white-70 f4">Membros</h2>
									<span class="f6 db white-70">
										Tamanho máximo de 4 integrantes por equipe (somente na edição do dia 23/03/2018)
									</span>
								</div>
							</div>
						</div>
						<div class="fl w-third">
							<div class="flex items-center lh-copy pa3 tl">
								<i class="fa fa-gamepad f1 w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
								<div class="pl3 flex-auto">
									<h2 class="db white-70 f4">Game</h2>
									<span class="f6 db white-70">
										Cada participante deve levar suas próprias ferramentas para ter o melhor ambiente possível
									</span>
								</div>
							</div>
						</div>
						<div class="fl w-third">
							<div class="flex items-center lh-copy pa3 tl">
								<i class="fa fa-server f1 w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
								<div class="pl3 flex-auto">
									<h2 class="db white-70 f4">Infraestrutura</h2>
									<span class="f6 db white-70">
										É proibido qualquer tipo de ataques a infraestrutura, havendo possibilidade de desclassificação para
										a equipe atacante
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="w-75 center">
						<div class="fl w-third">
							<div class="flex items-center lh-copy pa3 tl">
								<i class="fa fa-server f1 w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
								<div class="pl3 flex-auto">
									<h2 class="db white-70 f4">Infraestrutura</h2>
									<span class="f6 db white-70">
										É proíbido o ataque a outros competidores do evento, visando indisponibilidade
									</span>
								</div>
							</div>
						</div>
						<div class="fl w-third">
							<div class="flex items-center lh-copy pa3 tl">
								<i class="fab fa-btc f1 w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
								<div class="pl3 flex-auto">
									<h2 class="db white-70 f4">Flags</h2>
									<span class="f6 db white-70">Proibido vender ou compartilhar flags com outras equipes</span>
								</div>
							</div>
						</div>
						<div class="fl w-third">
							<div class="flex items-center lh-copy pa3 tl">
								<i class="fa fa-trophy f1 w2 h2 w3-ns h3-ns br-100" src="http://tachyons.io/img/avatar-mrmrs.jpg" />
								<div class="pl3 flex-auto">
									<h2 class="db white-70 f4">Premiação</h2>
									<span class="f6 db white-70">A equipe vencedora deverá fornecer seus dados para a premiação</span>
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
