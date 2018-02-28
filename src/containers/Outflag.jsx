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
							Minha jornada em cybersegurança começou quando participei de um Capture The Flag, CTF são como se fosse as
							Olimpiadas para os Hackers. Eu era só um lammer e naquele dia não fiz muito mais do que apenas assistir
							mas isso não me desmotivou, continuei lendo, estudando e participando de campeonatos de CTF e hoje eu
							tenho skills suficientes para não simplesmente ficar apenas assistindo. Pensando um pouco sobre como um
							campeonato de CTF mudou a perpectiva da minha vida eu tive a ideia de tentar incentivar outras pessoas da
							mesma forma através de campeonatos de CTF. Existem dois tipos de CTF:{' '}
							<ul>
								<li>
									Jeopardy Style e Attack/Defense, o primeiro é semelhante à quiz, uma plataforma composta de vários
									desafios das áreas de cybersegurança, Forense Computacional, Criptografia, Pentest Web e outras
									tantas.
								</li>
								<li>
									A segunda é algo mais insano onde equipes se enfrentam em servidores reais com vulnerabilidades
									implantadas que precisam ser corrigidas enquanto os seus adversários tentam entrar e vice versa.
								</li>
							</ul>{' '}
							Agora o 0utFl4g é o nome do evento que nós da Unit1337 criamos, um evento de CTF. No momento estamos
							próximos de ter realizado 5 edições, abaixo segue as universidades que nós já passamos, {' '}
							<strong>IF Sudeste MG - Campus JF</strong>, <strong>Estacio Polo Rio Branco</strong> Todos nossos eventos são sem fins
							lucrativos visando apenas na disseminação do entretenimento. Claro que precisamos de infraestrutura para
							rodar o evento, infraestrutura qual deve ser fornecida pela Instituição.
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
