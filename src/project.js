require = function t(e, o, s) {
function a(n, r) {
if (!o[n]) {
if (!e[n]) {
var c = "function" == typeof require && require;
if (!r && c) return c(n, !0);
if (i) return i(n, !0);
var p = new Error("Cannot find module '" + n + "'");
throw p.code = "MODULE_NOT_FOUND", p;
}
var l = o[n] = {
exports: {}
};
e[n][0].call(l.exports, function(t) {
var o = e[n][1][t];
return a(o || t);
}, l, l.exports, t, e, o, s);
}
return o[n].exports;
}
for (var i = "function" == typeof require && require, n = 0; n < s.length; n++) a(s[n]);
return a;
}({
alvo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "658ffRcKz5CYKrwFy/wcuUj", "alvo");
cc.Class({
extends: cc.Component,
properties: {
pickRadios: 0
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnAcessoARede: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c9918FY9ixM5rmy9w8Y/uEr", "btnAcessoARede");
cc.Class({
extends: cc.Component,
properties: {
prof1: {
default: null,
type: cc.Node
},
prof2: {
default: null,
type: cc.Node
},
prof3: {
default: null,
type: cc.Node
},
prof4: {
default: null,
type: cc.Node
},
button1: {
default: null,
type: cc.Node
},
button2: {
default: null,
type: cc.Node
},
button3: {
default: null,
type: cc.Node
},
button4: {
default: null,
type: cc.Node
},
button5: {
default: null,
type: cc.Node
}
},
mudaButton: function() {
this.button1.setPosition(326, -244);
this.button2.setPosition(596, -244);
this.button3.setPosition(596, -244);
this.button4.setPosition(596, -244);
this.button5.setPosition(596, -244);
},
showProfButton: function() {
this.prof1.setOpacity(1e3);
this.prof2.setOpacity(0);
this.prof3.setOpacity(0);
this.prof4.setOpacity(0);
this.mudaButton();
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnAplicacao: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "00df6hAp4hCiIpx+GvpezGv", "btnAplicacao");
cc.Class({
extends: cc.Component,
properties: {
prof1: {
default: null,
type: cc.Node
},
prof2: {
default: null,
type: cc.Node
},
prof3: {
default: null,
type: cc.Node
},
prof4: {
default: null,
type: cc.Node
},
button1: {
default: null,
type: cc.Node
},
button2: {
default: null,
type: cc.Node
},
button3: {
default: null,
type: cc.Node
},
button4: {
default: null,
type: cc.Node
},
button5: {
default: null,
type: cc.Node
}
},
mudaButton: function() {
this.button1.setPosition(596, -244);
this.button2.setPosition(596, -244);
this.button3.setPosition(596, -244);
this.button4.setPosition(326, -244);
this.button5.setPosition(596, -244);
},
showProfButton: function() {
this.prof1.setOpacity(0);
this.prof2.setOpacity(0);
this.prof3.setOpacity(0);
this.prof4.setOpacity(1e3);
this.mudaButton();
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnCarregarJogo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0623bNFMOdOFYwl+o7rDYGV", "btnCarregarJogo");
cc.Class({
extends: cc.Component,
properties: {},
goToSelectFase: function() {
cc.director.loadScene("selectFase");
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnContFase1: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2b869A22TdA5pCE7eonM2Yc", "btnContFase1");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
quadro: {
default: null,
type: cc.Node
},
professor: {
default: null,
type: cc.Node
},
face: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
contador: 0
},
btnVolta: function() {
this.contador = this.contador - 1;
this.mudaTexto();
},
mudaTexto: function() {
var t = this.label.getComponent(cc.Animation), e = this.professor.getComponent(cc.Animation), o = this.face.getComponent(cc.Animation);
if (0 === this.contador) {
t.playAdditive("ApareceTexto");
e.playAdditive("moveProfessor");
var s = o.play("falaProfessor2");
s.speed = .5;
s.repeatCount = Infinity;
this.label.string = "Rede de computadores \né Sistema de comunicação de dados \nconstituído através da interligação entre\ncomputadores e outros dispositivos";
this.contador += 1;
} else if (1 == this.contador) {
t.playAdditive("ApareceTexto");
this.label.string = "distribuídos geograficamente, com a finalidade\nde trocar informações e compartilhar recursos";
this.contador += 1;
} else if (2 == this.contador) {
t.playAdditive("ApareceTexto");
this.label.string = "Para entendermos melhor a rede de computadores\nprecisamos conhecer\nO modelo logico OSI\ne a arquitetura TCP/IP";
this.contador += 1;
} else if (3 == this.contador) {
t.playAdditive("ApareceTexto");
e.playAdditive("animaProfessor1");
(s = o.play("falaProfessor3")).speed = .5;
s.repeatCount = Infinity;
this.label.string = "O modelo OSI se baseia em uma proposta desenvolvida\npela ISO (International Standards Organization)\ncomo um primeiro passo em direção à padronização\ninternacional dos protocolos empregados \nnas diversas camadas";
this.contador += 1;
} else if (4 == this.contador) {
t.playAdditive("ApareceTexto");
this.label.string = "O modelo OSI possui 7 camadas, são elas:\nFísica\nEnlace\nRedes";
this.contador += 1;
} else if (5 == this.contador) {
t.playAdditive("ApareceTexto");
this.label.string = "Transporte\nSessão\nApresentação\nAplicação";
this.contador += 1;
} else if (6 == this.contador) {
t.playAdditive("ApareceTexto");
e.playAdditive("animaProfessor2");
(s = o.play("falaProfessor1")).speed = .5;
s.repeatCount = Infinity;
this.label.string = "Do modelo logico OSI surgiu a arquitetura TCP/IP\nO modelo TCP/IP descreve um conjunto de orientações\ngerais para a concepção e implementação";
this.contador += 1;
} else if (7 == this.contador) {
t.playAdditive("ApareceTexto");
this.label.string = "de protocolos de rede específicos\npara permitir que haja\ncomunicação através de uma rede.";
this.contador += 1;
} else if (8 == this.contador) {
t.playAdditive("ApareceTexto");
e.playAdditive("animaProfessor1");
this.label.string = "A imagem acima demonstra as peculiaridades\nde um modelo para o outro";
this.quadro.setPosition(222, 139);
this.contador += 1;
} else if (9 == this.contador) {
t.playAdditive("ApareceTexto");
(s = o.play("falaProfessor2")).speed = .5;
s.repeatCount = Infinity;
this.label.string = "Como pode ser visto, a arquitetura TCP/IP\nPossui 4 camadas e eu irei explicar sobre a primeira";
this.contador += 1;
} else if (10 == this.contador) {
t.playAdditive("ApareceTexto");
this.quadro.setPosition(1360, 139);
e.playAdditive("animaProfessor2");
this.label.string = "A camada de acesso a rede\ntem como um dos objetivos\ngerar e transmitir o sinal pelo meio. Seja a tecnologia\nEthernet, Wi-fi, Bluetooth, entre outros.";
this.contador += 1;
} else if (11 == this.contador) {
t.playAdditive("ApareceTexto");
(s = o.play("falaProfessor3")).speed = .5;
s.repeatCount = Infinity;
this.label.string = "Um dos serviços dessa camada é a modulação\nda informação através de um sinal\nanalógico ou digital";
this.contador += 1;
} else if (12 == this.contador) {
t.playAdditive("ApareceTexto");
(s = o.play("falaProfessor1")).speed = .5;
s.repeatCount = Infinity;
e.playAdditive("moveProfessor2");
this.label.string = "O minijogo a seguir, demonstra melhor\na diferença entre os sinais e os seus conceitos";
this.contador += 1;
} else 13 == this.contador && cc.director.loadScene("jogoFase1");
},
onLoad: function() {
cc.audioEngine.play(this.gameAudio, !0, .2);
this.contador = 0;
var t = this.label.getComponent(cc.Animation), e = this.professor.getComponent(cc.Animation), o = this.face.getComponent(cc.Animation).play("falaProfessor1");
o.speed = .5;
o.repeatCount = Infinity;
t.playAdditive("ApareceTexto");
e.playAdditive("Aparece");
this.label.string = "Olá, eu sou o professor Sinaldo!\nEu vou te ensinar sobre rede de computadores\narquitetura TCP/IP e a camada de acesso a rede";
},
onDestroy: function() {
cc.audioEngine.pauseAll();
},
update: function(t) {}
});
cc._RF.pop();
}, {} ],
btnContFase2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a6a8f/mkKlANLuxzDKnffKG", "btnContFase2");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
professor: {
default: null,
type: cc.Node
},
face: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
contador: 0
},
mudaTexto: function() {
var t = this.label.getComponent(cc.Animation), e = this.professor.getComponent(cc.Animation);
if (0 === this.contador) {
t.playAdditive("ApareceTexto");
e.play("moveProfessor2-1");
this.label.string = "A camada internet é responsável pela entrega\nde um pacote, de sua origem até o seu\ndestino final.";
this.contador += 1;
} else if (1 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessora2-1");
this.label.string = "Sua principal função é fazer o roteamento\ndos pacotes";
this.contador += 1;
} else if (2 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessora2-2");
this.label.string = "A camada internet define um formato de pacote\ne um protocolo chamado IP(Internet Protocol).";
this.contador += 1;
} else if (3 == this.contador) {
t.playAdditive("ApareceTexto");
this.label.string = "Endereço IP, de forma genérica, é uma identificação\nde um endereço do dispositivo\n (computador, impressora, etc)\nem uma rede local ou pública.";
this.contador += 1;
} else if (4 == this.contador) {
t.playAdditive("ApareceTexto");
this.label.string = "Cada computador na internet possui um IP\n(Internet Protocol ou Protocolo de internet) único\nque é o meio em que as máquinas usam\npara se comunicarem na Internet.";
this.contador += 1;
} else if (5 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("moveProfessora2-2");
this.label.string = 'O endereço IP, na versão 4 do IP (IPv4)\né um número de 32 bits oficialmente escrito\ncom quatro octetos (bytes) representados\nno formato decimal, por exemplo, "192 . 168 . 1 . 2".';
this.contador += 1;
} else if (6 == this.contador) {
t.playAdditive("ApareceTexto");
this.label.string = "A tarefa da camada internet é entregar\npacotes IP onde eles são necessários.";
this.contador += 1;
} else if (7 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("moveProfessor2-1");
this.label.string = "O roteamento de pacotes é uma questão\nde grande importância nessa camada, assim como\na necessidade de evitar o congestionamento.";
this.contador += 1;
} else if (8 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessora2-1");
this.label.string = "Um exemplo de serviço oferecido\npor essa camada é o roteamento de pacotes,\natravés dos endereços de origem/destino.";
this.contador += 1;
} else 9 == this.contador && cc.director.loadScene("jogoFase2");
},
onLoad: function() {
cc.audioEngine.play(this.gameAudio, !0, .2);
cc.audioEngine.setVolume(0, .2);
this.contador = 0;
this.face.getComponent(cc.Animation).play("falaProfessor2");
this.professor.getComponent(cc.Animation).play("Aparece");
this.label.getComponent(cc.Animation).playAdditive("ApareceTexto");
this.label.string = "Olá, eu sou a professora Anette! \nEu vou te ensinar sobre a camada Internet";
},
onDestroy: function() {
cc.audioEngine.pauseAll();
}
});
cc._RF.pop();
}, {} ],
btnContFase3: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "81f93OBl8BM/4SWtEWO0tvv", "btnContFase3");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
professor: {
default: null,
type: cc.Node
},
face: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
contador: 0
},
mudaTexto: function() {
var t = this.label.getComponent(cc.Animation), e = this.professor.getComponent(cc.Animation), o = this.face.getComponent(cc.Animation);
if (0 === this.contador) {
t.playAdditive("ApareceTexto");
e.play("moveProfessor");
o.play("falaProfessor3-2");
this.label.string = "A finalidade dessa camada é permitir que\nas entidades pares dos hosts de origem e de destino\nmantenham uma conversação";
this.contador += 1;
} else if (1 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-3");
this.label.string = "Dois protocolos fim a fim foram definidos aqui.\nO primeiro deles, o TCP(Transmission Control Protocol\n— protocolo de controle de transmissão)";
this.contador += 1;
} else if (2 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-1");
this.label.string = "Um protocolo orientado a conexões confiável\nque permite a entrega sem erros de um fluxo de bytes\noriginário de uma determinada\nmáquina em qualquer computador";
this.contador += 1;
} else if (3 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-2");
this.label.string = "Esse protocolo fragmenta o fluxo de bytes de entrada\nem mensagens discretas. No destino, o processo TCP receptor\nvolta a montar as mensagens recebidas no fluxo de saída.";
this.contador += 1;
} else if (4 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-3");
this.label.string = "O outro protocolo é o UDP(User Datagram Protocol)\nO UDP permite que a aplicação\n envie um datagrama encapsulado\nnum pacote IPv4 ou IPv6, e então enviado ao destino.";
this.contador += 1;
} else if (5 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-3");
this.label.string = "a mensagem viaja entre vários nós\naté chegar em seu destino. \n";
this.contador += 1;
} else if (6 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-3");
this.label.string = "Mas não há qualquer tipo de garantia\nque o pacote irá chegar ou não \nO protocolo UDP não é confiável.";
this.contador += 1;
} else if (7 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-3");
this.label.string = "O UDP é um serviço sem conexão\npois não há necessidade de manter\num relacionamento longo entre cliente e o servidor.";
this.contador += 1;
} else if (8 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-3");
this.label.string = "No entanto, focaremos apenas no TCP\nque é o principal protocolo e \no mais utilizado pelas aplicações.";
this.contador += 1;
} else if (9 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-3");
this.label.string = "O próximo minijogo demonstra como\na mensagem viaja entre vários nós\n até chegar em seu destino";
this.contador += 1;
} else 10 == this.contador && cc.director.loadScene("jogoFase3");
},
onLoad: function() {
cc.audioEngine.play(this.gameAudio, !0, .2);
this.contador = 0;
this.face.getComponent(cc.Animation).play("falaProfessor3-1");
this.professor.getComponent(cc.Animation).play("Aparece");
this.label.getComponent(cc.Animation).playAdditive("ApareceTexto");
this.label.string = "Olá, eu sou o professor Portty!\nEu vou te ensinar sobre a camada Transporte";
},
onDestroy: function() {
cc.audioEngine.pauseAll();
}
});
cc._RF.pop();
}, {} ],
btnContFase4: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "0d608MgM3NBMLjQf0Ozohur", "btnContFase4");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
professor: {
default: null,
type: cc.Node
},
face: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
contador: 0
},
mudaTexto: function() {
var t = this.label.getComponent(cc.Animation), e = this.professor.getComponent(cc.Animation), o = this.face.getComponent(cc.Animation);
if (0 === this.contador) {
t.playAdditive("ApareceTexto");
e.play("moveProfessor");
o.play("falaProfessor2");
this.label.string = "A camada de acesso a rede tem por objetivo\ngerar e transmitir o sinal pelo meio.\nSeja a tecnologia Ethernet, Wi-fi, Bluetooth, entre outros.";
this.contador += 1;
} else if (1 == this.contador) {
t.playAdditive("ApareceTexto");
this.label.string = "A camada Internet tem como objetivo\ngerenciar pacotes na rede, identificando sua origem/destino\ne redes para entrega.";
this.contador += 1;
} else if (2 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor1");
o.play("falaProfessor1");
this.label.string = "A camada de transporte estabelece uma conexão fim a fim\n(conexão confiável) entre a origem e o destino dos dados.";
this.contador += 1;
} else if (3 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor1");
o.play("falaProfessor1");
this.label.string = "Por fim, temos a camada de aplicação\nA camada de aplicação contém todos\n os protocolos de nível mais alto.\n";
this.contador += 1;
} else if (4 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor2");
o.play("falaProfessor2");
this.label.string = "Dentre eles estão o protocolo de terminal virtual(TELNET)\nO protocolo de transferência de arquivos(FTP) e\no protocolo de correio eletrônico(SMTP)";
this.contador += 1;
} else if (5 == this.contador) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor1");
o.play("falaProfessor2");
this.label.string = "Muitos outros protocolos foram incluídos \ncom o decorrer dos anos, como o DNS(Domain Name Service)\nque mapeia os nomes de hosts\npara seus respectivos endereços de rede";
this.contador += 1;
} else 6 == this.contador && cc.director.loadScene("jogoFase4");
},
onLoad: function() {
cc.audioEngine.play(this.gameAudio, !0, .2);
this.contador = 0;
this.face.getComponent(cc.Animation).play("falaProfessor1");
this.professor.getComponent(cc.Animation).play("Aparece");
this.label.getComponent(cc.Animation).playAdditive("ApareceTexto");
this.label.string = " Olá, eu sou o professor Mark!\nVamos recapitular tudo que foi visto até então";
},
onDestroy: function() {
cc.audioEngine.pauseAll();
}
});
cc._RF.pop();
}, {} ],
btnContFase5: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "50dd6EXQ4dK1abMt/33PoSO", "btnContFase5");
cc.Class({
extends: cc.Component,
properties: {
label: {
default: null,
type: cc.Label
},
professor1: {
default: null,
type: cc.Node
},
professor2: {
default: null,
type: cc.Node
},
professor3: {
default: null,
type: cc.Node
},
professor4: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
contador: 0
},
mudaTexto: function() {
var t = this.label.getComponent(cc.Animation), e = this.professor1.getComponent(cc.Animation), o = this.professor2.getComponent(cc.Animation), s = this.professor3.getComponent(cc.Animation), a = this.professor4.getComponent(cc.Animation);
if (0 === this.contador) {
this.professor1.setPosition(-1300, 0);
this.professor2.setPosition(-129, -89);
o.playAdditive("Aparece");
t.playAdditive("ApareceTexto");
this.label.string = "O teste final consiste de um quiz com 10 perguntas\nreferentes as 4 camadas da arquitetura TCP/IP";
this.contador += 1;
} else if (1 == this.contador) {
this.professor2.setPosition(-1300, 0);
this.professor3.setPosition(-129, -89);
s.playAdditive("Aparece");
t.playAdditive("ApareceTexto");
this.label.string = "Para passar nesse teste\nvocê deve acertar pelo menos\n7 das 10 questões apresentadas";
this.contador += 1;
} else if (2 == this.contador) {
this.professor3.setPosition(-1300, 0);
this.professor4.setPosition(-129, -89);
a.playAdditive("Aparece");
t.playAdditive("ApareceTexto");
this.label.string = "Considere esse quiz como uma prova final\nnão tenha pressa em responder as questões\ne analise com cuidado as opções apresentadas";
this.contador += 1;
} else if (3 == this.contador) {
this.professor4.setPosition(-1300, 0);
this.professor1.setPosition(-129, -89);
e.playAdditive("Aparece");
t.playAdditive("ApareceTexto");
this.label.string = "Boa sorte!";
this.contador += 1;
} else 4 == this.contador && cc.director.loadScene("quizFase5");
},
onLoad: function() {
cc.audioEngine.play(this.gameAudio, !0, .2);
this.contador = 0;
this.label.getComponent(cc.Animation).playAdditive("ApareceTexto");
this.label.string = "Olá, bem-vindo ao teste final!\nesta última fase testara todo o seu conhecimento\nadquirido até então, em jogo e na disciplina";
},
onDestroy: function() {
cc.audioEngine.pauseAll();
}
});
cc._RF.pop();
}, {} ],
btnInternet: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "fd4a6mCbvdDg43YYgEZsLRe", "btnInternet");
cc.Class({
extends: cc.Component,
properties: {
prof1: {
default: null,
type: cc.Node
},
prof2: {
default: null,
type: cc.Node
},
prof3: {
default: null,
type: cc.Node
},
prof4: {
default: null,
type: cc.Node
},
button1: {
default: null,
type: cc.Node
},
button2: {
default: null,
type: cc.Node
},
button3: {
default: null,
type: cc.Node
},
button4: {
default: null,
type: cc.Node
},
button5: {
default: null,
type: cc.Node
}
},
mudaButton: function() {
this.button1.setPosition(596, -244);
this.button2.setPosition(326, -244);
this.button3.setPosition(596, -244);
this.button4.setPosition(596, -244);
this.button5.setPosition(596, -244);
},
showProfButton: function() {
this.prof1.setOpacity(0);
this.prof2.setOpacity(1e3);
this.prof3.setOpacity(0);
this.prof4.setOpacity(0);
this.mudaButton();
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnNovoJogo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b94cbMJ8WpDNKS0SpR87W9N", "btnNovoJogo");
cc.Class({
extends: cc.Component,
properties: {
gameAudio: {
default: null,
url: cc.AudioClip
}
},
goToSelectFase: function() {
cc.director.loadScene("selectFase");
},
onLoad: function() {
cc.audioEngine.play(this.gameAudio, !0);
},
onDestroy: function() {
cc.audioEngine.pauseAll();
}
});
cc._RF.pop();
}, {} ],
btnOpcoes: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a6892JACbZPYartnZOolo/y", "btnOpcoes");
cc.Class({
extends: cc.Component,
properties: {},
goToOpcoes: function() {
cc.director.loadScene("opcoes");
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnPlayCamada1: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6ec98tavstF46fC5jCFjmOB", "btnPlayCamada1");
cc.Class({
extends: cc.Component,
properties: {},
goToFase1: function() {
cc.director.loadScene("fase1");
},
onLoad: function() {},
onDestroy: function() {
cc.audioEngine.pauseAll();
}
});
cc._RF.pop();
}, {} ],
btnPlayCamada2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3ae0acxn/9OU7Byg/NIgeR5", "btnPlayCamada2");
cc.Class({
extends: cc.Component,
properties: {},
goToFase2: function() {
cc.director.loadScene("fase2");
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnPlayCamada3: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "aadbdiSWPRH153TsbJGZF8q", "btnPlayCamada3");
cc.Class({
extends: cc.Component,
properties: {},
goToFase3: function() {
cc.director.loadScene("fase3");
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnPlayCamada4: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "aa0b6XCiHlBs62frhBOLeKy", "btnPlayCamada4");
cc.Class({
extends: cc.Component,
properties: {},
goToFase4: function() {
cc.director.loadScene("fase4");
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnPlayCamada5: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5a1c4XzCSVHbp6Ht4+qg7aD", "btnPlayCamada5");
cc.Class({
extends: cc.Component,
properties: {},
goToFase4: function() {
cc.director.loadScene("fase5");
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnQuiz1: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "778d4Y5rCdLXKJdDo4R0k3E", "btnQuiz1");
cc.Class({
extends: cc.Component,
properties: {},
goToQuiz1: function() {
cc.director.loadScene("quizFase1");
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnQuiz2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "34dcbhY1FhPgZPAOgtG1n5n", "btnQuiz2");
cc.Class({
extends: cc.Component,
properties: {},
goToQuiz1: function() {
cc.director.loadScene("quizFase2");
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnQuiz3: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "79ad1jru4tL6LPe8iLw32iV", "btnQuiz3");
cc.Class({
extends: cc.Component,
properties: {},
goToQuiz1: function() {
cc.director.loadScene("quizFase3");
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnQuiz4: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5b4231rmL9Kzqawp2hK9ylc", "btnQuiz4");
cc.Class({
extends: cc.Component,
properties: {},
goToQuiz1: function() {
cc.director.loadScene("quizFase4");
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnQuiz5: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "bf6efU5YexDeL3oF1U+94qp", "btnQuiz5");
cc.Class({
extends: cc.Component,
properties: {},
goToQuiz1: function() {
cc.director.loadScene("quizFase5");
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnSairSelectFase: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7c5bdd6dz9HI5RQPQ9rbgsp", "btnSairSelectFase");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
voltaPraMain: function() {
cc.director.loadScene("main");
},
voltaPraSelectFases: function() {
cc.director.loadScene("selectFase");
}
});
cc._RF.pop();
}, {} ],
btnSair: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6a42d9jdplMsYvSADsomSjB", "btnSair");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {},
sairDoJogo: function() {
cc.game.end();
}
});
cc._RF.pop();
}, {} ],
btnTesteFinal: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b0fccE2+axN8rYII3y9PT9v", "btnTesteFinal");
cc.Class({
extends: cc.Component,
properties: {
prof1: {
default: null,
type: cc.Node
},
prof2: {
default: null,
type: cc.Node
},
prof3: {
default: null,
type: cc.Node
},
prof4: {
default: null,
type: cc.Node
},
button1: {
default: null,
type: cc.Node
},
button2: {
default: null,
type: cc.Node
},
button3: {
default: null,
type: cc.Node
},
button4: {
default: null,
type: cc.Node
},
button5: {
default: null,
type: cc.Node
}
},
mudaButton: function() {
this.button1.setPosition(596, -244);
this.button2.setPosition(596, -244);
this.button3.setPosition(596, -244);
this.button4.setPosition(596, -244);
this.button5.setPosition(326, -244);
},
showProfButton: function() {
this.prof1.setOpacity(0);
this.prof2.setOpacity(0);
this.prof3.setOpacity(0);
this.prof4.setOpacity(0);
this.mudaButton();
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
btnTransporte: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d7ebdy33+RFv7Dst+i664dz", "btnTransporte");
cc.Class({
extends: cc.Component,
properties: {
prof1: {
default: null,
type: cc.Node
},
prof2: {
default: null,
type: cc.Node
},
prof3: {
default: null,
type: cc.Node
},
prof4: {
default: null,
type: cc.Node
},
button1: {
default: null,
type: cc.Node
},
button2: {
default: null,
type: cc.Node
},
button3: {
default: null,
type: cc.Node
},
button4: {
default: null,
type: cc.Node
},
button5: {
default: null,
type: cc.Node
}
},
mudaButton: function() {
this.button1.setPosition(596, -244);
this.button2.setPosition(596, -244);
this.button3.setPosition(326, -244);
this.button4.setPosition(596, -244);
this.button5.setPosition(596, -244);
},
showProfButton: function() {
this.prof1.setOpacity(0);
this.prof2.setOpacity(0);
this.prof3.setOpacity(1e3);
this.prof4.setOpacity(0);
this.mudaButton();
},
onLoad: function() {}
});
cc._RF.pop();
}, {} ],
creditroll: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c76abV3c2hB9bYc8A7pzHmO", "creditroll");
cc.Class({
extends: cc.Component,
properties: {
jumpHeight: 0,
jumpDuration: 0,
maxMoveSpeed: 0,
accel: 0,
timer: 0
},
setJumpAction: function() {
var t = cc.moveBy(this.jumpDuration, cc.p(0, this.jumpHeight));
return cc.repeatForever(t);
},
onLoad: function() {
this.timer = 15;
this.jumpAction = this.setJumpAction();
this.node.runAction(this.jumpAction);
},
selectStage: function() {
cc.director.loadScene("selectFase");
},
update: function(t) {
this.timer < 1 && this.selectStage();
this.timer -= t;
}
});
cc._RF.pop();
}, {} ],
"logicaFase1-1": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "4b39dColCpOArq1yhND3+DD", "logicaFase1-1");
cc.Class({
extends: cc.Component,
properties: {
bg: {
default: null,
type: cc.Node
},
buttonUp: {
default: null,
type: cc.Node
},
buttonDown: {
default: null,
type: cc.Node
},
player: {
default: null,
type: cc.Node
},
linha: {
default: null,
type: cc.Prefab
},
alvo: {
default: null,
type: cc.Node
},
gameOverbackground: {
default: null,
type: cc.Node
},
score: {
default: null,
type: cc.Label
},
scoreGameOver: {
default: null,
type: cc.Label
},
professor: {
default: null,
type: cc.Node
},
face: {
default: null,
type: cc.Node
},
btnContinuar1: {
default: null,
type: cc.Node
},
textWrapper: {
default: null,
type: cc.Node
},
textoFase: {
default: null,
type: cc.Label
},
linhaGameOver: {
default: null,
type: cc.Node
},
tutorial: {
default: null,
type: cc.Node
},
fase: 0,
pontuacao: 0,
contTexto: 0
},
onLoad: function() {
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
this.criaAlvo();
this.pontuacao = 0;
this.fase = 9;
this.contTexto = 0;
this.linhaGameOver.setOpacity(0);
this.accUp = !1;
this.accDown = !1;
this.accRight = !1;
this.setInputControl();
this.textoFase.string = "Como pode ser visto, a diferença entre os sinais\né bem perceptivel";
},
onDestroy: function() {
cc.audioEngine.pauseAll();
},
setInputControl: function() {
var t = this;
cc.eventManager.addListener({
event: cc.EventListener.KEYBOARD,
onKeyPressed: function(e, o) {
switch (e) {
case cc.KEY.up:
t.accUp = !0;
t.accDown = !1;
break;

case cc.KEY.down:
t.accUp = !1;
t.accDown = !0;
break;

case cc.KEY.right:
t.accUp = !1;
t.accDown = !1;
t.accRight = !0;
}
},
onKeyReleased: function(e, o) {
switch (e) {
case cc.KEY.up:
t.accUp = !1;
break;

case cc.KEY.down:
t.accDown = !1;
break;

case cc.KEY.right:
t.accRight = !1;
}
}
}, t.node);
},
movimentar: function() {
this.accUp ? this.sobePlayer() : this.accDown ? this.descePlayer() : this.accRight && this.vaiFrentePlayer();
},
jogar: function() {
cc.audioEngine.setVolume(0, 1);
this.fase = 0;
this.frentePlayer();
this.tutorial.getComponent(cc.Animation).play("someTutorial");
},
sobePlayer: function() {
this.player.stopAllActions();
var t = cc.moveBy(3, cc.p(0, 300)), e = cc.moveBy(300, cc.p(1e4, 0));
this.player.runAction(cc.sequence(t, e));
},
descePlayer: function() {
this.player.stopAllActions();
var t = cc.moveBy(3, cc.p(0, -300)), e = cc.moveBy(300, cc.p(1e4, 0));
this.player.runAction(cc.sequence(t, e));
},
vaiFrentePlayer: function() {
this.player.stopAllActions();
var t = cc.moveBy(300, cc.p(1e4, 0));
this.player.runAction(t);
},
vaiPraFrente: function() {
return cc.moveBy(300, cc.p(1e4, 0));
},
frentePlayer: function() {
this.vaiPraFrente = this.vaiPraFrente();
this.player.runAction(this.vaiPraFrente);
},
criaLinha: function() {
var t = cc.instantiate(this.linha);
this.bg.addChild(t);
t.setPosition(this.player.getPosition());
},
criaAlvo: function() {
var t = Math.floor(300 * Math.random() + 0), e = this.player.x + 100, o = e + 200;
this.alvo.setPosition(e, t);
this.linhaGameOver.setPosition(o, 0);
},
getPlayerDistance: function() {
var t = this.player.getPosition(), e = this.alvo.getPosition();
return cc.pDistance(e, t);
},
getPlayerDistanceLinha: function() {
var t = this.player.getPosition(), e = this.linhaGameOver.getPosition();
return cc.pDistance(e, t);
},
onPicked: function() {
this.criaAlvo();
this.pontuacao += 1;
},
limitaPlayer: function() {
if (this.player.y > this.player.parent.height / 2) {
this.player.y = this.player.parent.height / 2;
this.gameOver();
} else if (this.player.y < -this.player.parent.height / 2) {
this.player.y = -this.player.parent.height / 2;
this.gameOver();
}
},
pegaAlvo: function() {
this.getPlayerDistance() < 60 ? this.onPicked() : 10 == this.pontuacao && (this.fase = 1);
},
passaLinha: function() {
this.getPlayerDistanceLinha() < 60 ? this.gameOver() : 10 == this.pontuacao && this.linhaGameOver.setPosition(0, 2e3);
},
gameOver: function() {
this.gameOverbackground.setPosition(0, 0);
this.scoreGameOver.string = "Alvos Acertados: " + this.pontuacao;
this.player.stopAllActions();
},
tryAgain: function() {
cc.director.loadScene("jogoFase1-1");
},
trocaTexto1: function() {
cc.audioEngine.setVolume(0, .2);
var t = this.textoFase.getComponent(cc.Animation), e = this.professor.getComponent(cc.Animation), o = this.face.getComponent(cc.Animation).play("falaProfessor1");
o.speed = .5;
o.repeatCount = Infinity;
if (0 === this.contTexto) {
t.playAdditive("ApareceTexto");
e.playAdditive("animaProfessor1");
this.textoFase.string = "O sinal analógico é gerado como uma onda\njá que os valores vão se alterando no intervalo de tempo";
this.contTexto += 1;
} else if (1 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.playAdditive("animaProfessor2");
this.textoFase.string = "Já o sinal digital é gerado como uma reta\njá que possui um conjunto de valores em um intervalo de tempo";
this.contTexto += 1;
} else if (2 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.playAdditive("animaProfessor1");
this.textoFase.string = "A camada de acesso a rede também fornece\no serviço de transformar um canal de transmissão bruta\nem uma linha que pareça livre de erros de transmissão";
this.contTexto += 1;
} else if (3 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.playAdditive("animaProfessor2");
this.textoFase.string = "Oferecendo enquadramento de bits\nverificação de erros e protocolos que assegurem a correção de erros";
this.contTexto += 1;
} else if (4 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.playAdditive("animaProfessor1");
this.textoFase.string = "Visto os conteúdos desta fase e em sala de aula\nresponda agora o Quiz";
this.contTexto += 1;
} else if (5 == this.contTexto) {
this.textoFase.string = "";
this.contTexto = 0;
this.fase = 2;
this.player.setPosition(-418, 0);
}
},
update: function(t) {
this.movimentar();
if (0 === this.fase) {
this.professor.setPosition(1306, -222);
this.limitaPlayer();
this.criaLinha();
this.pegaAlvo();
this.passaLinha();
this.score.string = "Alvos: " + this.pontuacao;
} else if (1 == this.fase) {
this.player.setOpacity(0);
this.professor.setPosition(0, -222);
this.textWrapper.setPosition(0, -220);
} else 2 == this.fase && cc.director.loadScene("quizFase1");
}
});
cc._RF.pop();
}, {} ],
logicaFase1: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ad2dfsTZshIrIMIlP4Ufxjb", "logicaFase1");
cc.Class({
extends: cc.Component,
properties: {
bg: {
default: null,
type: cc.Node
},
buttonUp: {
default: null,
type: cc.Node
},
buttonDown: {
default: null,
type: cc.Node
},
player: {
default: null,
type: cc.Node
},
linha: {
default: null,
type: cc.Prefab
},
alvo: {
default: null,
type: cc.Node
},
gameOverbackground: {
default: null,
type: cc.Node
},
score: {
default: null,
type: cc.Label
},
scoreGameOver: {
default: null,
type: cc.Label
},
professor: {
default: null,
type: cc.Node
},
face: {
default: null,
type: cc.Node
},
btnContinuar1: {
default: null,
type: cc.Node
},
btnContinuar2: {
default: null,
type: cc.Node
},
textoFase: {
default: null,
type: cc.Label
},
linhaGameOver: {
default: null,
type: cc.Node
},
textwrapper: {
default: null,
type: cc.Node
},
tutorial: {
default: null,
type: cc.Node
},
AmpMax: {
default: null,
type: cc.Label
},
Frequencia: {
default: null,
type: cc.Label
},
gameAudio: {
default: null,
url: cc.AudioClip
},
fase: 0,
pontuacao: 0,
contTexto: 0,
saiLoop: 0
},
onLoad: function() {
cc.audioEngine.play(this.gameAudio, !0, .5);
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
this.frentePlayer();
this.criaAlvo();
this.btnContinuar2.setOpacity(0);
this.linhaGameOver.setOpacity(0);
this.pontuacao = 0;
this.fase = 0;
this.contTexto = 0;
this.accUp = !1;
this.accDown = !1;
this.saiLoop = 0;
this.setInputControl();
var t = this.textoFase.getComponent(cc.Animation), e = this.professor.getComponent(cc.Animation), o = this.face.getComponent(cc.Animation).play("falaProfessor1");
o.speed = .5;
o.repeatCount = Infinity;
t.playAdditive("ApareceTexto");
e.playAdditive("Aparece");
this.textoFase.string = "Nesse Minijogo, você aprendera a diferença\nentre o sinal analógico e o sinal digital";
},
setInputControl: function() {
var t = this;
cc.eventManager.addListener({
event: cc.EventListener.KEYBOARD,
onKeyPressed: function(e, o) {
switch (e) {
case cc.KEY.up:
t.accUp = !0;
t.accDown = !1;
break;

case cc.KEY.down:
t.accUp = !1;
t.accDown = !0;
}
},
onKeyReleased: function(e, o) {
switch (e) {
case cc.KEY.up:
t.accUp = !1;
break;

case cc.KEY.down:
t.accDown = !1;
}
}
}, t.node);
},
movimentar: function() {
this.accUp ? this.sobePlayer() : this.accDown && this.descePlayer();
},
sobePlayer: function() {
if (0 === this.saiLoop) {
var t = cc.moveBy(3, cc.p(0, 300)).easing(cc.easeCubicActionInOut());
this.player.runAction(t);
this.saiLoop = 1;
} else this.saiLoop;
},
descePlayer: function() {
if (1 == this.saiLoop) {
var t = cc.moveBy(3, cc.p(0, -300)).easing(cc.easeCubicActionInOut());
this.player.runAction(t);
this.saiLoop = 0;
} else this.saiLoop;
},
vaiPraFrente: function() {
var t = cc.moveBy(3, cc.p(100, 0));
return cc.repeatForever(t);
},
frentePlayer: function() {
this.vaiPraFrente = this.vaiPraFrente();
this.player.runAction(this.vaiPraFrente);
},
criaLinha: function() {
var t = cc.instantiate(this.linha);
this.bg.addChild(t);
t.setPosition(this.player.getPosition());
},
criaAlvo: function() {
if (0 === this.pontuacao) this.alvo.setPosition(-320, 272); else {
var t = Math.floor(300 * Math.random() + 0), e = this.player.x + 100, o = e + 200;
this.alvo.setPosition(e, t);
this.linhaGameOver.setPosition(o, 0);
}
},
getPlayerDistance: function() {
var t = this.player.getPosition(), e = this.alvo.getPosition();
return cc.pDistance(e, t);
},
getPlayerDistanceLinha: function() {
var t = this.player.getPosition(), e = this.linhaGameOver.getPosition();
return cc.pDistance(e, t);
},
onPicked: function() {
this.criaAlvo();
this.pontuacao += 1;
},
limitaPlayer: function() {
if (this.player.y > this.player.parent.height / 2) {
this.player.y = this.player.parent.height / 2;
this.gameOver();
} else if (this.player.y < -this.player.parent.height / 2) {
this.player.y = -this.player.parent.height / 2;
this.gameOver();
}
},
pegaAlvo: function() {
this.getPlayerDistance() < 60 ? this.onPicked() : 10 == this.pontuacao && (this.fase = 2);
},
passaLinha: function() {
this.getPlayerDistanceLinha() < 60 ? this.gameOver() : 10 == this.pontuacao && this.linhaGameOver.setPosition(0, 2e3);
},
gameOver: function() {
this.gameOverbackground.setPosition(0, 0);
this.scoreGameOver.string = "Alvos Acertados: " + this.pontuacao;
this.player.stopAllActions();
},
tryAgain: function() {
cc.director.loadScene("jogoFase1");
},
trocaTexto1: function() {
var t = this.textoFase.getComponent(cc.Animation), e = this.professor.getComponent(cc.Animation), o = this.face.getComponent(cc.Animation);
if (0 === this.contTexto) {
e.playAdditive("moveProfessorJF1");
t.playAdditive("ApareceTexto");
var s = o.play("falaProfessor2");
s.speed = .5;
s.repeatCount = Infinity;
this.textoFase.string = "um sinal analógico é caracterizado por\numa equação matemática continua.\nQuando a entrada muda";
this.contTexto += 1;
} else if (1 == this.contTexto) {
t.playAdditive("ApareceTexto");
this.textoFase.string = "de um valor para o próximo\nfaz isso movendo se através\nde todos os valores intermediários.";
this.contTexto += 1;
} else if (2 == this.contTexto) {
t.playAdditive("ApareceTexto");
this.textoFase.string = "Perceba que a fase descreve a posição\nda onda no instante de tempo igual a zero.\nA fase é medida em graus";
this.contTexto += 1;
} else if (3 == this.contTexto) {
t.playAdditive("ApareceTexto");
this.textoFase.string = "Tente acertar 10 alvos para avançar\npara a próxima etapa";
this.contTexto += 1;
} else if (4 == this.contTexto) {
t.playAdditive("ApareceTexto");
this.textoFase.string = "Evite subir demais ou descer demais\ncaso isso aconteça, será Game Over";
this.contTexto += 1;
} else if (5 == this.contTexto) {
t.playAdditive("ApareceTexto");
this.textwrapper.getComponent(cc.Animation).play("someTWJF1");
this.tutorial.getComponent(cc.Animation).play("apareceTutorial");
}
},
jogar: function() {
this.textoFase.string = "A frequência é demonstrada como\na soma de todos os ciclos ou períodos\nem um intervalo de 1 segundo";
this.contTexto = 7;
this.fase = 1;
this.player.setPosition(-418, 0);
cc.audioEngine.setVolume(0, 1);
this.tutorial.getComponent(cc.Animation).play("someTutorial");
},
trocaTexto2: function() {
cc.audioEngine.setVolume(0, .2);
if (7 == this.contTexto) {
this.textoFase.string = "Como pode ser visto o sinal analógico é gerado como\num conjunto de ondas, já que o sinal passa por todos os valores\nnaquele intervalo de tempo";
this.contTexto += 1;
} else if (8 == this.contTexto) {
this.textoFase.string = "Já o sinal digital é gerado como um conjunto de retas\njá que possui um conjunto limitado\nde valores em um intervalo de tempo";
this.contTexto += 1;
} else if (9 == this.contTexto) {
this.textoFase.string = "Tente acertar 10 alvos para avançar\npara a próxima etapa";
this.contTexto += 1;
} else if (10 == this.contTexto) {
this.textoFase.string = "Evite subir demais ou descer demais\ncaso isso aconteça, será Game Over";
this.contTexto += 1;
} else if (11 == this.contTexto) {
this.textoFase.string = "Boa Sorte!";
this.contTexto = 0;
this.fase = 3;
this.player.setPosition(-418, 0);
}
},
explicaAmplitudeFrequencia: function() {
1 == this.pontuacao ? this.AmpMax.getComponent(cc.Animation).play("Aparece") : 2 == this.pontuacao && this.Frequencia.getComponent(cc.Animation).play("Aparece");
},
update: function(t) {
this.movimentar();
if (0 === this.fase) {
this.professor.setPosition(0, -222);
this.player.setOpacity(0);
} else if (1 == this.fase) {
this.player.setOpacity(255);
this.professor.setPosition(1306, -222);
this.textwrapper.setPosition(1306, -222);
this.btnContinuar1.setPosition(1306, -222);
this.btnContinuar2.setPosition(1306, -222);
this.limitaPlayer();
this.criaLinha();
this.pegaAlvo();
this.passaLinha();
this.score.string = "Alvos: " + this.pontuacao;
this.explicaAmplitudeFrequencia();
} else if (2 == this.fase) {
this.professor.setPosition(0, -222);
this.textwrapper.setPosition(0, -229);
this.btnContinuar2.setPosition(747, -99);
this.player.setOpacity(0);
this.btnContinuar1.setPosition(3e3, 0);
this.btnContinuar2.setOpacity(255);
} else 3 == this.fase && cc.director.loadScene("jogoFase1-1");
}
});
cc._RF.pop();
}, {} ],
logicaFase2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "a3a26F4L01KDIVBtmM1UXE4", "logicaFase2");
cc.Class({
extends: cc.Component,
properties: {
professor: {
default: null,
type: cc.Node
},
face: {
default: null,
type: cc.Node
},
textoFase: {
default: null,
type: cc.Label
},
bg: {
default: null,
type: cc.Node
},
no1: {
default: null,
type: cc.Node
},
no2: {
default: null,
type: cc.Node
},
no3: {
default: null,
type: cc.Node
},
no4: {
default: null,
type: cc.Node
},
no5: {
default: null,
type: cc.Node
},
no6: {
default: null,
type: cc.Node
},
no1a: {
default: null,
type: cc.Node
},
no2a: {
default: null,
type: cc.Node
},
no3a: {
default: null,
type: cc.Node
},
no4a: {
default: null,
type: cc.Node
},
no5a: {
default: null,
type: cc.Node
},
no6a: {
default: null,
type: cc.Node
},
no1aLinha: {
default: null,
type: cc.Node
},
tabRot: {
default: null,
type: cc.Node
},
lblNo1: {
default: null,
type: cc.Label
},
btnRealizarSalto1: {
default: null,
type: cc.Node
},
btnRealizarSalto2: {
default: null,
type: cc.Node
},
btnRealizarSalto3: {
default: null,
type: cc.Node
},
btnRealizarSalto4: {
default: null,
type: cc.Node
},
btnRealizarSalto5: {
default: null,
type: cc.Node
},
btnRealizarSalto6: {
default: null,
type: cc.Node
},
player: {
default: null,
type: cc.Node
},
linha: {
default: null,
type: cc.Prefab
},
score: {
default: null,
type: cc.Label
},
professorFrente: {
default: null,
type: cc.Node
},
textWrapperFrente: {
default: null,
type: cc.Node
},
modeloRede: {
default: null,
type: cc.Node
},
textoFase1: {
default: null,
type: cc.Label
},
tutorial1: {
default: null,
type: cc.Node
},
tutorial2: {
default: null,
type: cc.Node
},
tutorial3: {
default: null,
type: cc.Node
},
btnJogar: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
saltos: 0,
pontuacao: 0,
contTexto: 0,
tuto: 0
},
onLoad: function() {
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
cc.audioEngine.play(this.gameAudio, !0, .5);
this.player.setPosition(1360, 0);
this.pontuacao = 0;
this.contTexto = 0;
this.saltos = 5;
this.tuto = 1;
this.btnJogar.setPosition(1300, -206);
this.score.string = this.saltos;
this.someNos();
this.face.getComponent(cc.Animation).play("falaProfessor2");
this.professor.getComponent(cc.Animation).play("Aparece");
this.textoFase.getComponent(cc.Animation).playAdditive("ApareceTexto");
this.textoFase.string = "Nesse Minijogo, você aprendera a rotear\npacotes IPs";
},
onDestroy: function() {
cc.audioEngine.pauseAll();
},
someNos: function() {
this.no1.setPosition(1360, 0);
this.no2.setPosition(1360, 0);
this.no3.setPosition(1360, 0);
this.no4.setPosition(1360, 0);
this.no5.setPosition(1360, 0);
this.no6.setPosition(1360, 0);
},
someRealizaSalto: function() {
this.btnRealizarSalto1.setPosition(895, -108);
this.btnRealizarSalto2.setPosition(895, -108);
this.btnRealizarSalto3.setPosition(895, -108);
this.btnRealizarSalto4.setPosition(895, -108);
this.btnRealizarSalto5.setPosition(895, -108);
this.btnRealizarSalto6.setPosition(895, -108);
},
apareceNos: function() {
this.no1a.setPosition(-240, -181);
this.no2a.setPosition(-181, -6);
this.no3a.setPosition(-15, -181);
this.no4a.setPosition(12, -27);
this.no5a.setPosition(-39, 103);
this.no6a.setPosition(193, 115);
},
apareceNosLinha: function() {
this.no1aLinha.setOpacity(255);
},
movePlayer: function(t, e) {
return cc.moveTo(3, cc.p(t, e));
},
criaLinha: function() {
var t = cc.instantiate(this.linha);
this.bg.addChild(t);
t.setPosition(this.player.getPosition());
},
jogar: function() {
if (1 == this.tuto) {
this.tutorial1.setOpacity(0);
this.tutorial2.setOpacity(255);
this.tuto += 1;
} else if (2 == this.tuto) {
this.tutorial2.setOpacity(0);
this.tutorial3.setOpacity(255);
this.tuto += 1;
this.score.getComponent(cc.Animation).play("apareceScore");
this.no1.setPosition(-240, -181);
this.player.setPosition(-210, -154);
} else if (3 == this.tuto) {
cc.audioEngine.setVolume(0, 1);
this.btnJogar.setPosition(1300, -206);
this.tutorial3.setOpacity(0);
this.apareceNos();
this.apareceNosLinha();
}
},
trocaTexto1: function() {
var t = this.professor.getComponent(cc.Animation), e = this.textoFase.getComponent(cc.Animation);
if (0 === this.contTexto) {
e.playAdditive("ApareceTexto");
t.play("animaProfessora2-1");
this.textoFase.string = "Os roteadores são utilizados para interligar\nas redes físicas entre si. Eles oferecem\nmúltiplos caminhos para interconectar\nas redes físicas.";
this.contTexto += 1;
} else if (1 == this.contTexto) {
e.playAdditive("ApareceTexto");
t.play("animaProfessora2-2");
this.textoFase.string = "As tabelas de roteamento indicam para cada roteador\ncomo ele deve encaminhar um pacote a fim de que\neste chegue a uma certa rede física de destino.";
this.contTexto += 1;
} else if (2 == this.contTexto) {
e.playAdditive("ApareceTexto");
t.play("moveProfessora2-3");
this.textoFase.string = "As tabelas de roteamento são preenchidas\nautomaticamente, através de protocolos\nde roteamento padronizados\ncomo o BGP (Border Gateway Protocol)";
this.contTexto += 1;
} else if (3 == this.contTexto) {
e.playAdditive("ApareceTexto");
t.play("animaProfessora2-1");
this.textoFase.string = "Veja agora um exemplo de rede!";
this.modeloRede.setOpacity(255);
this.contTexto += 1;
} else if (4 == this.contTexto) {
e.playAdditive("ApareceTexto");
this.textoFase.string = "O cenário acima demonstra uma rede\ncom 6 roteadores, cada um deles com sua tabela\nde roteamento";
this.contTexto += 1;
} else if (5 == this.contTexto) {
e.playAdditive("ApareceTexto");
t.play("animaProfessora2-2");
this.textoFase.string = "No papel de um pacote, você terá\n5 saltos para sair do nó 1 e chegar ao nó 6!\ncaso contrário, a mensagem será perdida";
this.modeloRede.setOpacity(0);
this.contTexto += 1;
} else if (6 == this.contTexto) {
e.playAdditive("ApareceTexto");
t.play("animaProfessora2-1");
this.textoFase.string = "Cada salto possui um custo\nUsaremos nesse exemplo, o número de saltos\npara se alcançar determinado nó";
this.modeloRede.setOpacity(0);
this.contTexto += 1;
} else if (7 == this.contTexto) {
e.playAdditive("ApareceTexto");
t.play("animaProfessora2-2");
this.textoFase.string = "Tente chegar ao nó 6\ncom o menor custo possível\natente-se aos saltos necessários";
this.modeloRede.setOpacity(0);
this.contTexto += 1;
} else if (8 == this.contTexto) {
e.playAdditive("ApareceTexto");
this.textoFase.string = "clique em continuar e boa sorte!!";
this.contTexto += 1;
} else if (9 == this.contTexto) {
this.tutorial1.setOpacity(255);
this.btnJogar.setPosition(0, -206);
this.bg.setOpacity(255);
this.textoFase1.string = "Parabéns, você chegou ao nó 6!\napesar de bastante simplificado\no minijogo demonstrou como uma \ninformação trafega em diversas redes!";
this.contTexto += 1;
} else if (20 == this.contTexto) {
e.playAdditive("ApareceTexto");
this.textoFase1.string = "Com as informações passadas nesta fase\nresponda agora o Quiz!\nclique em continuar e boa sorte!";
this.contTexto += 1;
} else 21 == this.contTexto ? cc.director.loadScene("quizFase2") : 10 == this.contTexto ? this.contTexto += 1 : 11 == this.contTexto && cc.director.loadScene("jogoFase2");
},
buttonNo1: function() {
this.tabRot.setPosition(320, -130);
this.lblNo1.string = "No 6         6\n\n\nNo 3         1";
this.someRealizaSalto();
this.btnRealizarSalto6.setPosition(0, -108);
this.btnRealizarSalto3.setPosition(0, -202);
},
buttonNo2: function() {
this.tabRot.setPosition(320, -130);
this.lblNo1.string = "No 5         2\n\n\nNo 6         1";
this.someRealizaSalto();
this.btnRealizarSalto5.setPosition(0, -108);
this.btnRealizarSalto6.setPosition(0, -202);
},
buttonNo3: function() {
this.tabRot.setPosition(320, -130);
this.lblNo1.string = "No 5         1\n\n\nNo 2         2";
this.someRealizaSalto();
this.btnRealizarSalto5.setPosition(0, -108);
this.btnRealizarSalto2.setPosition(0, -202);
},
buttonNo4: function() {
this.tabRot.setPosition(320, -130);
this.lblNo1.string = "No 5         1\n\n\nNo 2         1";
this.someRealizaSalto();
this.btnRealizarSalto5.setPosition(0, -108);
this.btnRealizarSalto2.setPosition(0, -202);
},
buttonNo5: function() {
this.tabRot.setPosition(320, -130);
this.lblNo1.string = "No 4         1\n\n\nNo 6         2";
this.someRealizaSalto();
this.btnRealizarSalto4.setPosition(0, -108);
this.btnRealizarSalto6.setPosition(0, -202);
},
buttonNo6: function() {
this.tabRot.setPosition(320, -130);
this.lblNo1.string = "No 5         70%\n\n\n";
this.someRealizaSalto();
this.btnRealizarSalto5.setPosition(0, -108);
},
buttonSalto1: function() {
this.tabRot.setPosition(1320, -130);
this.no1.setPosition(-240, -181);
this.saltos -= 1;
this.movePlayer(-240, -181);
},
buttonSalto2: function() {
this.tabRot.setPosition(1320, -130);
this.no2.setPosition(-181, -6);
if (12 == this.player.x) {
this.saltos -= 1;
t = this.movePlayer(-181, -6);
this.player.runAction(t);
} else {
this.saltos -= 2;
var t = this.movePlayer(-181, -6);
this.player.runAction(t);
}
},
buttonSalto3: function() {
this.tabRot.setPosition(1320, -130);
this.no3.setPosition(-15, -181);
this.saltos -= 1;
var t = this.movePlayer(-15, -181);
this.player.runAction(t);
},
buttonSalto4: function() {
this.tabRot.setPosition(1320, -130);
this.no4.setPosition(12, -27);
this.saltos -= 1;
var t = this.movePlayer(12, -27);
this.player.runAction(t);
},
buttonSalto5: function() {
this.tabRot.setPosition(1320, -130);
this.no5.setPosition(-39, 103);
if (-15 == this.player.x) {
this.saltos -= 1;
var t = this.movePlayer(-39, 103);
this.player.runAction(t);
} else if (12 == this.player.x) {
this.saltos -= 1;
e = this.movePlayer(-39, 103);
this.player.runAction(e);
} else {
this.saltos -= 2;
var e = this.movePlayer(-39, 103);
this.player.runAction(e);
}
},
buttonSalto6: function() {
this.tabRot.setPosition(1320, -130);
this.no6.setPosition(193, 115);
if (-210 == this.player.x) {
this.saltos -= 5;
e = this.movePlayer(193, 115);
this.player.runAction(e);
} else if (-39 == this.player.x) {
this.saltos -= 2;
var t = this.movePlayer(193, 115);
this.player.runAction(t);
} else {
this.saltos -= 1;
var e = this.movePlayer(193, 115);
this.player.runAction(e);
}
if (this.saltos > 0) {
this.professorFrente.getComponent(cc.Animation).play("moveProfessorFrente");
this.textWrapperFrente.getComponent(cc.Animation).play("moveTWFrente");
this.contTexto = 20;
}
},
gameOver: function() {
this.saltos = 1;
this.score.getComponent(cc.Animation).play("someScore");
this.professorFrente.getComponent(cc.Animation).play("moveProfessorFrente");
this.textWrapperFrente.getComponent(cc.Animation).play("moveTWFrente");
this.someNos();
this.textoFase1.string = "Infelizmente a mensagem se perdeu\nSaltos insuficientes para chegar ao destino\nclique em continuar e tente novamente!";
9 == this.contTexto && cc.director.loadScene("jogoFase2");
},
update: function(t) {
this.criaLinha();
this.saltos <= 0 && this.gameOver();
this.score.string = "Saltos: " + this.saltos;
}
});
cc._RF.pop();
}, {} ],
logicaFase3: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "8efd8g1DsBMdYjjCxV8WINP", "logicaFase3");
cc.Class({
extends: cc.Component,
properties: {
professor: {
default: null,
type: cc.Node
},
face1: {
default: null,
type: cc.Node
},
textoFase: {
default: null,
type: cc.Label
},
bg: {
default: null,
type: cc.Node
},
no1: {
default: null,
type: cc.Node
},
no2: {
default: null,
type: cc.Node
},
no3: {
default: null,
type: cc.Node
},
no4: {
default: null,
type: cc.Node
},
no5: {
default: null,
type: cc.Node
},
no6: {
default: null,
type: cc.Node
},
tabRot: {
default: null,
type: cc.Node
},
score: {
default: null,
type: cc.Label
},
professorFrente: {
default: null,
type: cc.Node
},
face2: {
default: null,
type: cc.Node
},
pacote1: {
default: null,
type: cc.Node
},
pacote2: {
default: null,
type: cc.Node
},
pacote3: {
default: null,
type: cc.Node
},
textoFase1: {
default: null,
type: cc.Label
},
tabrot: {
default: null,
type: cc.Node
},
pacoteA: {
default: null,
type: cc.Node
},
pacoteB: {
default: null,
type: cc.Node
},
pacoteC: {
default: null,
type: cc.Node
},
pacoteACorreto: {
default: null,
type: cc.Node
},
pacoteBCorreto: {
default: null,
type: cc.Node
},
pacoteCCorreto: {
default: null,
type: cc.Node
},
LblAcertos: {
default: null,
type: cc.Label
},
LblErros: {
default: null,
type: cc.Label
},
LblOrdemCorreta: {
default: null,
type: cc.Label
},
tutorial1: {
default: null,
type: cc.Node
},
tutorial2: {
default: null,
type: cc.Node
},
textWrapper: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
acertos: 0,
erros: 0,
contTexto: 0,
roteamentos: 0,
button1: 0,
button2: 0,
button3: 0,
branco: 0,
azul: 0,
verde: 0,
timer: 0,
jogo: 0,
pacs: 0,
tuto: 0
},
onLoad: function() {
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
cc.audioEngine.play(this.gameAudio, !0, .5);
this.acertos = 0;
this.erros = 0;
this.contTexto = 0;
this.roteamentos = 0;
this.button1 = 0;
this.button2 = 0;
this.button3 = 0;
this.branco = 0;
this.azul = 0;
this.verde = 0;
this.timer = 0;
this.jogo = 0;
this.pacs = 0;
this.tuto = 0;
this.someNos();
this.face1.getComponent(cc.Animation).play("falaProfessor3-1");
this.professor.getComponent(cc.Animation).play("Aparece");
this.textoFase.getComponent(cc.Animation).playAdditive("ApareceTexto");
this.textoFase.string = "Nesse Minijogo, você aprendera como o pacote\ntrafega na rede, através do TCP";
},
onDestroy: function() {
cc.audioEngine.pauseAll();
},
someNos: function() {
this.no1.setPosition(1360, 0);
this.no2.setPosition(1360, 0);
this.no3.setPosition(1360, 0);
this.no4.setPosition(1360, 0);
this.no5.setPosition(1360, 0);
this.no6.setPosition(1360, 0);
},
apareceNos: function() {
this.no1.setPosition(-240, -181);
this.no2.setPosition(-181, -6);
this.no3.setPosition(-15, -181);
this.no4.setPosition(12, -27);
this.no5.setPosition(-39, 103);
this.no6.setPosition(193, 115);
},
aparecePacotes1: function() {
if (213 == this.pacote1.x && 115 == this.pacote1.y) {
this.pacoteA.setPosition(159, 3);
this.pacote1.setPosition(215, 117);
} else if (203 == this.pacote3.x && 115 == this.pacote3.y) {
this.pacoteC.setPosition(-3, 3);
this.pacote3.setPosition(205, 117);
} else if (193 == this.pacote2.x && 115 == this.pacote2.y) {
this.pacoteB.setPosition(-165, 3);
this.pacote2.setPosition(195, 117);
}
},
aparecePacotes2: function() {
if (213 == this.pacote3.x && 115 == this.pacote3.y) {
this.pacoteC.setPosition(159, 3);
this.pacote3.setPosition(215, 117);
} else if (203 == this.pacote2.x && 115 == this.pacote2.y) {
this.pacoteB.setPosition(-3, 3);
this.pacote2.setPosition(205, 117);
} else if (193 == this.pacote1.x && 115 == this.pacote1.y) {
this.pacoteA.setPosition(-165, 3);
this.pacote1.setPosition(195, 117);
}
},
aparecePacotes3: function() {
if (213 == this.pacote1.x && 115 == this.pacote1.y) {
this.pacoteA.setPosition(159, 3);
this.pacote1.setPosition(215, 117);
} else if (203 == this.pacote2.x && 115 == this.pacote2.y) {
this.pacoteB.setPosition(-3, 3);
this.pacote2.setPosition(205, 117);
} else if (193 == this.pacote3.x && 115 == this.pacote3.y) {
this.pacoteC.setPosition(-165, 3);
this.pacote3.setPosition(195, 117);
}
},
aparecePacotes4: function() {
if (213 == this.pacote2.x && 115 == this.pacote2.y) {
this.pacoteB.setPosition(159, 3);
this.pacote2.setPosition(215, 117);
} else if (203 == this.pacote3.x && 115 == this.pacote3.y) {
this.pacoteC.setPosition(-3, 3);
this.pacote3.setPosition(205, 117);
} else if (193 == this.pacote1.x && 115 == this.pacote1.y) {
this.pacoteA.setPosition(-165, 3);
this.pacote1.setPosition(195, 117);
}
},
aparecePacotes5: function() {
if (213 == this.pacote1.x && 115 == this.pacote1.y) {
this.pacoteA.setPosition(159, 3);
this.pacote1.setPosition(215, 117);
} else if (203 == this.pacote3.x && 115 == this.pacote3.y) {
this.pacoteC.setPosition(-3, 3);
this.pacote3.setPosition(205, 117);
} else if (193 == this.pacote2.x && 115 == this.pacote2.y) {
this.pacoteB.setPosition(-165, 3);
this.pacote2.setPosition(195, 117);
}
},
movePacote1: function() {
if (3 == this.timer) {
var t = cc.moveTo(4, cc.p(-181, -6)), e = cc.moveTo(4, cc.p(-39, 103)), o = cc.moveTo(4, cc.p(213, 115));
this.pacote1.runAction(cc.sequence(t, e, o));
} else if (this.timer <= 2 && this.timer >= 1.95 && 0 === this.pacs) {
this.pacs = 1;
var s = cc.moveTo(2, cc.p(12, -37)), a = cc.moveTo(2, cc.p(193, 115));
this.pacote2.runAction(cc.sequence(s, a));
} else if (this.timer <= 1 && this.timer >= .95 && 1 == this.pacs) {
this.pacs = 2;
var i = cc.moveTo(2, cc.p(12, -27)), n = cc.moveTo(2, cc.p(-181, -6)), r = cc.moveTo(2, cc.p(-39, 103)), c = cc.moveTo(2, cc.p(203, 115));
this.pacote3.runAction(cc.sequence(i, n, r, c));
}
},
saiPacote1: function() {
if (3 == this.timer) {
var t = cc.moveTo(4, cc.p(-181, -6)), e = cc.moveTo(4, cc.p(-39, 103)), o = cc.moveTo(4, cc.p(213, 115));
this.pacote3.runAction(cc.sequence(t, e, o));
} else if (this.timer <= 2 && this.timer >= 1.95 && 0 === this.pacs) {
this.pacs = 1;
var s = cc.moveTo(2, cc.p(12, -37)), a = cc.moveTo(2, cc.p(193, 115));
this.pacote1.runAction(cc.sequence(s, a));
} else if (this.timer <= 1 && this.timer >= .95 && 1 == this.pacs) {
this.pacs = 2;
var i = cc.moveTo(2, cc.p(12, -27)), n = cc.moveTo(2, cc.p(-181, -6)), r = cc.moveTo(2, cc.p(-39, 103)), c = cc.moveTo(2, cc.p(203, 115));
this.pacote2.runAction(cc.sequence(i, n, r, c));
}
},
saiPacote2: function() {
if (3 == this.timer) {
var t = cc.moveTo(4, cc.p(-181, -6)), e = cc.moveTo(4, cc.p(-39, 103)), o = cc.moveTo(4, cc.p(213, 115));
this.pacote1.runAction(cc.sequence(t, e, o));
} else if (this.timer <= 2 && this.timer >= 1.95 && 0 === this.pacs) {
this.pacs = 1;
var s = cc.moveTo(2, cc.p(12, -37)), a = cc.moveTo(2, cc.p(193, 115));
this.pacote3.runAction(cc.sequence(s, a));
} else if (this.timer <= 1 && this.timer >= .95 && 1 == this.pacs) {
this.pacs = 2;
var i = cc.moveTo(2, cc.p(12, -27)), n = cc.moveTo(2, cc.p(-181, -6)), r = cc.moveTo(2, cc.p(-39, 103)), c = cc.moveTo(2, cc.p(203, 115));
this.pacote2.runAction(cc.sequence(i, n, r, c));
}
},
saiPacote3: function() {
if (3 == this.timer) {
var t = cc.moveTo(2, cc.p(12, -37)), e = cc.moveTo(2, cc.p(193, 115));
this.pacote1.runAction(cc.sequence(t, e));
} else if (this.timer <= 2 && this.timer >= 1.95 && 0 === this.pacs) {
this.pacs = 1;
var t = cc.moveTo(2, cc.p(12, -27)), e = cc.moveTo(2, cc.p(-181, -6)), o = cc.moveTo(2, cc.p(-39, 103)), s = cc.moveTo(2, cc.p(203, 115));
this.pacote3.runAction(cc.sequence(t, e, o, s));
} else if (this.timer <= 1 && this.timer >= .95 && 1 == this.pacs) {
this.pacs = 2;
var a = cc.moveTo(4, cc.p(-181, -6)), i = cc.moveTo(4, cc.p(-39, 103)), n = cc.moveTo(4, cc.p(213, 115));
this.pacote2.runAction(cc.sequence(a, i, n));
}
},
saiPacote4: function() {
if (3 == this.timer) {
var t = cc.moveTo(4, cc.p(-181, -6)), e = cc.moveTo(4, cc.p(-39, 103)), o = cc.moveTo(4, cc.p(213, 115));
this.pacote1.runAction(cc.sequence(t, e, o));
} else if (this.timer <= 2 && this.timer >= 1.95 && 0 === this.pacs) {
this.pacs = 1;
var s = cc.moveTo(2, cc.p(12, -37)), a = cc.moveTo(2, cc.p(193, 115));
this.pacote2.runAction(cc.sequence(s, a));
} else if (this.timer <= 1 && this.timer >= .95 && 1 == this.pacs) {
this.pacs = 2;
var i = cc.moveTo(2, cc.p(12, -27)), n = cc.moveTo(2, cc.p(-181, -6)), r = cc.moveTo(2, cc.p(-39, 103)), c = cc.moveTo(2, cc.p(203, 115));
this.pacote3.runAction(cc.sequence(i, n, r, c));
}
},
movePacote2: function() {
1 == this.roteamentos ? this.saiPacote1() : 2 == this.roteamentos ? this.saiPacote2() : 3 == this.roteamentos ? this.saiPacote3() : 4 == this.roteamentos && this.saiPacote4();
},
jogar: function() {
if (0 === this.tuto) {
this.tutorial1.setOpacity(0);
this.tutorial2.setOpacity(255);
this.tuto += 1;
} else if (1 == this.tuto) {
cc.audioEngine.setVolume(0, 1);
this.apareceNos();
this.tabrot.setPosition(321, -130);
this.pacote1.setPosition(-240, -181);
this.pacote2.setPosition(-230, -181);
this.pacote3.setPosition(-220, -181);
this.jogo = 1;
this.timer = 3;
this.tutorial2.setOpacity(0);
}
},
trocaTexto1: function() {
var t = this.textoFase.getComponent(cc.Animation), e = this.professor.getComponent(cc.Animation), o = this.face1.getComponent(cc.Animation), s = this.textoFase1.getComponent(cc.Animation);
if (0 === this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-2");
this.textoFase.string = "O TCP é um protocolo de nível\nda camada de transporte. O Protocolo de controle de\ntransmissão provê confiabilidade, entrega na sequencia";
this.contTexto += 1;
} else if (1 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-3");
this.textoFase.string = "correta e verificação de erros nos pacotes\nde dados, entre os diferentes nós da rede";
this.contTexto += 1;
} else if (2 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-1");
this.textoFase.string = "No minijogo a seguir, cada roteador\nrepresenta um nó na rede, o objetivo do jogo é\norganizar o pacote que sai da sua origem\ne chega ao seu destino";
this.contTexto += 1;
} else if (3 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-2");
this.textoFase.string = "Vamos ao minijogo";
this.contTexto += 1;
} else if (4 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-3");
this.textoFase.string = "Nesse cenário, a informação viajara\ndo roteador 1 ao roteador 6, nesse minijogo\no seu objetivo e colocar os pacotes na ordem correta";
this.contTexto += 1;
} else if (5 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-1");
this.textoFase.string = "visualize a ordem de saída dos pacotes\ne os organize, clicando neles, na ordem correta\n";
this.contTexto += 1;
} else if (6 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor");
o.play("falaProfessor3-3");
this.textoFase.string = "clique em continuar para começar";
this.contTexto += 1;
} else if (7 == this.contTexto) {
this.bg.setOpacity(255);
this.tutorial1.setOpacity(255);
s.playAdditive("ApareceTexto");
this.textoFase1.string = "Parabéns, voce roteou os 5 pacotes\nfazendo " + this.acertos + " acertos e " + this.erros + " erros\n";
this.contTexto = 20;
} else if (20 == this.contTexto) {
s.playAdditive("ApareceTexto");
this.contTexto += 1;
} else if (21 == this.contTexto && this.acertos >= 3) {
s.playAdditive("ApareceTexto");
this.textoFase1.string = "Voce obteve 3 ou mais acertos\nCom as informações passadas nesta fase\nresponda agora o Quiz!\nclique em continuar e boa sorte!";
this.contTexto += 1;
} else if (22 == this.contTexto && this.acertos >= 3) cc.director.loadScene("quizFase3"); else if (21 == this.contTexto && this.erros >= 3) {
s.playAdditive("ApareceTexto");
this.textoFase1.string = "Voce obteve 3 ou mais erros\ntente acertar pelo menos 3 roteamentos\njogue novamente!\nclique em continuar e boa sorte!";
this.contTexto += 1;
} else 22 == this.contTexto && this.erros >= 3 && cc.director.loadScene("jogoFase3");
},
gameOver: function() {
if (5 == this.roteamentos) {
this.roteamentos = 6;
this.pacoteA.setPosition(1390, -150);
this.pacoteB.setPosition(1390, -150);
this.pacoteC.setPosition(1390, -150);
this.pacote1.setPosition(-1240, -181);
this.pacote2.setPosition(-1230, -181);
this.pacote3.setPosition(-1220, -181);
var t = this.professorFrente.getComponent(cc.Animation), e = this.face2.getComponent(cc.Animation);
this.textWrapper.getComponent(cc.Animation).play("apareceTW!");
t.play("Aparece");
e.play("falaProfessor3-1");
}
},
colocaPacotesCorretos: function() {
if (0 === this.roteamentos) {
this.pacoteACorreto.setPosition(-107, -58);
this.branco = 1;
this.pacoteBCorreto.setPosition(-12, -58);
this.azul = 2;
this.pacoteCCorreto.setPosition(75, -58);
this.verde = 3;
} else if (1 == this.roteamentos) {
this.pacoteCCorreto.setPosition(-107, -58);
this.verde = 1;
this.pacoteACorreto.setPosition(-12, -58);
this.branco = 2;
this.pacoteBCorreto.setPosition(75, -58);
this.azul = 3;
} else if (2 == this.roteamentos) {
this.pacoteACorreto.setPosition(-107, -58);
this.branco = 1;
this.pacoteCCorreto.setPosition(-12, -58);
this.verde = 2;
this.pacoteBCorreto.setPosition(75, -58);
this.azul = 3;
} else if (3 == this.roteamentos) {
this.pacoteACorreto.setPosition(-107, -58);
this.branco = 1;
this.pacoteCCorreto.setPosition(-12, -58);
this.verde = 2;
this.pacoteBCorreto.setPosition(75, -58);
this.azul = 3;
} else if (4 === this.roteamentos) {
this.pacoteACorreto.setPosition(-107, -58);
this.branco = 1;
this.pacoteBCorreto.setPosition(-12, -58);
this.azul = 2;
this.pacoteCCorreto.setPosition(75, -58);
this.verde = 3;
}
},
veriicaOrdem: function() {
if (this.button1 == this.branco && this.button2 == this.azul && this.button3 == this.verde) {
this.acertos += 1;
this.roteamentos += 1;
this.button1 = 0;
this.button2 = 0;
this.button3 = 0;
this.pacoteA.setPosition(1390, -150);
this.pacoteB.setPosition(1390, -150);
this.pacoteC.setPosition(1390, -150);
this.pacote1.setPosition(-240, -181);
this.pacote2.setPosition(-230, -181);
this.pacote3.setPosition(-220, -181);
this.timer = 3;
this.pacs = 0;
} else if (0 === this.button1 || 0 === this.button2 || 0 === this.button3) ; else if (this.button1 != this.branco || this.button2 != this.azul || this.button3 != this.verde) {
this.erros += 1;
this.roteamentos += 1;
this.button1 = 0;
this.button2 = 0;
this.button3 = 0;
this.pacoteA.setPosition(1390, -150);
this.pacoteB.setPosition(1390, -150);
this.pacoteC.setPosition(1390, -150);
this.pacote1.setPosition(-240, -181);
this.pacote2.setPosition(-230, -181);
this.pacote3.setPosition(-220, -181);
this.timer = 3;
this.pacs = 0;
}
},
btnButton: function() {
if (0 === this.button2 && 0 === this.button3) {
this.button1 = 1;
this.pacoteA.setPosition(-139, -150);
this.veriicaOrdem();
} else if (0 == this.button2 && 1 == this.button3) {
this.button1 = 2;
this.pacoteA.setPosition(12, -150);
this.veriicaOrdem();
} else if (1 == this.button2 && 0 == this.button3) {
this.button1 = 2;
this.pacoteA.setPosition(12, -150);
this.veriicaOrdem();
} else if (2 == this.button2 && 1 == this.button3) {
this.button1 = 3;
this.pacoteA.setPosition(163, -150);
this.veriicaOrdem();
} else if (1 == this.button2 && 2 == this.button3) {
this.button1 = 3;
this.pacoteA.setPosition(163, -150);
this.veriicaOrdem();
}
},
btnButton2: function() {
if (0 === this.button1 && 0 === this.button3) {
this.button2 = 1;
this.pacoteB.setPosition(-139, -150);
this.veriicaOrdem();
} else if (0 == this.button1 && 1 == this.button3) {
this.button2 = 2;
this.pacoteB.setPosition(12, -150);
this.veriicaOrdem();
} else if (1 == this.button1 && 0 == this.button3) {
this.button2 = 2;
this.pacoteB.setPosition(12, -150);
this.veriicaOrdem();
} else if (2 == this.button1 && 1 == this.button3) {
this.button2 = 3;
this.pacoteB.setPosition(163, -150);
this.veriicaOrdem();
} else if (1 == this.button1 && 2 == this.button3) {
this.button2 = 3;
this.pacoteB.setPosition(163, -150);
this.veriicaOrdem();
}
},
btnButton3: function() {
if (0 === this.button1 && 0 === this.button2) {
this.button3 = 1;
this.pacoteC.setPosition(-139, -150);
this.veriicaOrdem();
} else if (0 == this.button1 && 1 == this.button2) {
this.button3 = 2;
this.pacoteC.setPosition(12, -150);
this.veriicaOrdem();
} else if (1 == this.button1 && 0 == this.button2) {
this.button3 = 2;
this.pacoteC.setPosition(12, -150);
this.veriicaOrdem();
} else if (2 == this.button1 && 1 == this.button2) {
this.button3 = 3;
this.pacoteC.setPosition(163, -150);
this.veriicaOrdem();
} else if (1 == this.button1 && 2 == this.button2) {
this.button3 = 3;
this.pacoteC.setPosition(163, -150);
this.veriicaOrdem();
}
},
update: function(t) {
this.colocaPacotesCorretos();
this.gameOver();
if (0 === this.roteamentos && 1 == this.jogo) {
this.movePacote1();
this.aparecePacotes1();
} else if (1 == this.roteamentos) {
this.aparecePacotes2();
this.movePacote2();
} else if (2 == this.roteamentos) {
this.aparecePacotes3();
this.movePacote2();
} else if (3 == this.roteamentos) {
this.aparecePacotes4();
this.movePacote2();
} else if (4 == this.roteamentos) {
this.aparecePacotes5();
this.movePacote2();
}
this.LblAcertos.string = "Acertos: " + this.acertos;
this.LblErros.string = "Erros: " + this.erros;
this.timer -= t;
}
});
cc._RF.pop();
}, {} ],
logicaFase4: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cef6d6GJjdAcbNn4gNse17N", "logicaFase4");
cc.Class({
extends: cc.Component,
properties: {
professor: {
default: null,
type: cc.Node
},
face1: {
default: null,
type: cc.Node
},
porta1: {
default: null,
type: cc.Node
},
porta2: {
default: null,
type: cc.Node
},
porta3: {
default: null,
type: cc.Node
},
porta4: {
default: null,
type: cc.Node
},
porta5: {
default: null,
type: cc.Node
},
chrome: {
default: null,
type: cc.Node
},
filezilla: {
default: null,
type: cc.Node
},
firefox: {
default: null,
type: cc.Node
},
skype: {
default: null,
type: cc.Node
},
thunderbird: {
default: null,
type: cc.Node
},
mysql: {
default: null,
type: cc.Node
},
tutorial1: {
default: null,
type: cc.Node
},
tutorial2: {
default: null,
type: cc.Node
},
textoFase: {
default: null,
type: cc.Label
},
textWrapper: {
default: null,
type: cc.Node
},
moveLbl: {
default: null,
type: cc.Node
},
lblPontuacao: {
default: null,
type: cc.Label
},
lblErros: {
default: null,
type: cc.Label
},
gameAudio: {
default: null,
url: cc.AudioClip
},
pontuacao: 0,
erros: 0,
contTexto: 0,
porta: 0,
pergunta: 0,
saiAnimacao: 0,
tuto: 0
},
onLoad: function() {
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
cc.audioEngine.play(this.gameAudio, !0, .5);
this.pontuacao = 0;
this.erros = 0;
this.contTexto = 0;
this.pergunta = 0;
this.saiAnimacao = 0;
this.tuto = 0;
this.moveLbl.setPosition(1300, 0);
this.face1.getComponent(cc.Animation).play("falaProfessor1");
this.professor.getComponent(cc.Animation).play("Aparece");
this.textoFase.getComponent(cc.Animation).playAdditive("ApareceTexto");
this.textoFase.string = "A camada de transporte trabalha\ncom o conceito de soquetes(sockets)";
},
onDestroy: function() {
cc.audioEngine.pauseAll();
},
aparecePortas: function() {
this.porta1.setPosition(-392, 149);
this.porta2.setPosition(-213, 149);
this.porta3.setPosition(-41, 149);
this.porta4.setPosition(150, 149);
this.porta5.setPosition(356, 149);
},
somePortas: function() {
this.porta1.setPosition(-1349, 0);
this.porta2.setPosition(-1349, 0);
this.porta3.setPosition(-1349, 0);
this.porta4.setPosition(-1349, 0);
this.porta5.setPosition(-1349, 0);
},
someIcones: function() {
this.skype.setPosition(-1360, 0);
this.firefox.setPosition(-1360, 0);
this.chrome.setPosition(-1360, 0);
this.filezilla.setPosition(-1360, 0);
this.thunderbird.setPosition(-1360, 0);
this.mysql.setPosition(-1360, 0);
},
jogar: function() {
if (0 === this.tuto) {
this.professor.setPosition(1360, 0);
this.textWrapper.setPosition(1360, 0);
this.tutorial1.setPosition(0, 0);
this.tuto += 1;
} else if (1 == this.tuto) {
this.tutorial1.setPosition(1300, 0);
this.tutorial2.setPosition(0, 0);
this.tuto += 1;
} else {
this.tutorial2.setPosition(1300, 0);
this.aparecePortas();
this.skype.setPosition(0, -237);
this.moveLbl.setPosition(-407, -246);
this.contTexto = 19;
cc.audioEngine.setVolume(0, 1);
}
},
trocaTexto1: function() {
var t = this.textoFase.getComponent(cc.Animation), e = this.professor.getComponent(cc.Animation), o = this.face1.getComponent(cc.Animation);
if (0 === this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("moveProfessor");
o.play("falaProfessor2");
this.textoFase.string = "Um soquete de rede é um ponto final\nde um fluxo de comunicação entre processos\natravés de uma rede de computadores. Hoje em dia \na maioria da comunicação entre computadores\n é baseada no IP";
this.contTexto += 1;
} else if (1 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor1");
o.play("falaProfessor2");
this.textoFase.string = "portanto a maioria dos soquetes de rede são soquetes IP.";
this.contTexto += 1;
} else if (2 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor2");
o.play("falaProfessor1");
this.textoFase.string = "Um endereço de soquete é a combinação de um \nendereço de IP e um número da porta, parecido com o final\nde uma conexão telefônica que é a combinação de um \nnúmero de telefone e uma determinada extensão.";
this.contTexto += 1;
} else if (3 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor1");
o.play("falaProfessor1");
this.textoFase.string = "Com base nesse endereço, soquetes de internet\nentregam pacotes de dados de entrada para \no processo ou thread de aplicação apropriado.";
this.contTexto += 1;
} else if (4 == this.contTexto) {
t.playAdditive("ApareceTexto");
o.play("falaProfessor2");
this.textoFase.string = "Inserido no conceito de sockets, temos o conceito de\nportas";
this.contTexto += 1;
} else if (5 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor2");
o.play("falaProfessor2");
this.textoFase.string = "Porta é um ponto físico (hardware) ou lógico (software)\nno qual podem ser feitas conexões, ou seja \num canal através do qual os dados são transferidos entre\n um dispositivo de entrada e o processador";
this.contTexto += 1;
} else if (6 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor1");
o.play("falaProfessor1");
this.textoFase.string = "ou entre o processador e um dispositivo de saída.\nOu acesso por dentro e por fora do computador.";
this.contTexto += 1;
} else if (7 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor2");
o.play("falaProfessor2");
this.textoFase.string = "Uma porta de software é uma conexão virtual\nque pode ser usada na transmissão de dados.\n As mais comuns são as portas protocoladas TCP e UDP";
this.contTexto += 1;
} else if (8 == this.contTexto) {
t.playAdditive("ApareceTexto");
o.play("falaProfessor1");
this.textoFase.string = "Algumas portas frequentemente usadas são:\nPorta 80: para protocolos HTTP\nPorta 81: Skype";
this.contTexto += 1;
} else if (9 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor1");
o.play("falaProfessor2");
this.textoFase.string = "Porta 20: para protocolos FTP\nPorta 110: para serviços POP3(E-Mail)\nPorta 3306: para o MySQL, entre vários outras";
this.contTexto += 1;
} else if (10 == this.contTexto) {
t.playAdditive("ApareceTexto");
o.play("falaProfessor1");
this.textoFase.string = "Com essa informação em mãos\nvamos ao minijogo";
this.contTexto += 1;
} else if (11 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor2");
o.play("falaProfessor2");
this.textoFase.string = "Com os conhecimentos de portas passados até então\ndirecione o icone da aplicaçao para a porta correta\npara isso, clique na porta para qual ele deve seguir";
this.contTexto += 1;
} else if (12 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor1");
o.play("falaProfessor2");
this.textoFase.string = "Faça a associação certa 5 vezes\npara avançar para o quiz!\nclique em continuar e boa sorte!";
this.contTexto += 1;
} else if (13 == this.contTexto) this.jogar(); else if (19 == this.contTexto && 2 == this.saiAnimacao) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor1");
o.play("falaProfessor2");
this.textoFase.string = "Ahhh!!\nInfelizmente você errou demais\nclique em continuar e repita a fase";
this.contTexto += 1;
} else if (20 == this.contTexto && 2 == this.saiAnimacao) cc.director.loadScene("jogoFase4"); else if (19 == this.contTexto) {
t.playAdditive("ApareceTexto");
e.play("animaProfessor1");
o.play("falaProfessor2");
this.textoFase.string = "Parabéns!!\nVocê acertou as portas corretas!\nclique em continuar e vá para o quiz!";
this.contTexto += 1;
} else 20 == this.contTexto && cc.director.loadScene("quizFase4");
},
porta80: function() {
var t = cc.moveTo(3, cc.p(-392, 149));
this.porta1.getComponent(cc.Animation).play("porta");
this.mexeAplicacao(t);
if ("80" == this.porta) {
this.pontuacao += 1;
this.pergunta += 1;
} else {
this.pergunta += 1;
this.erros += 1;
}
},
porta81: function() {
var t = cc.moveTo(3, cc.p(-213, 149));
this.porta2.getComponent(cc.Animation).play("porta");
this.mexeAplicacao(t);
if ("81" == this.porta) {
this.pontuacao += 1;
this.pergunta += 1;
} else {
this.pergunta += 1;
this.erros += 1;
}
},
porta20: function() {
var t = cc.moveTo(3, cc.p(-41, 149));
this.porta3.getComponent(cc.Animation).play("porta");
this.mexeAplicacao(t);
if ("20" == this.porta) {
this.pontuacao += 1;
this.pergunta += 1;
} else {
this.pergunta += 1;
this.erros += 1;
}
},
porta110: function() {
var t = cc.moveTo(3, cc.p(150, 149));
this.porta4.getComponent(cc.Animation).play("porta");
this.mexeAplicacao(t);
if ("110" == this.porta) {
this.pontuacao += 1;
this.pergunta += 1;
} else {
this.pergunta += 1;
this.erros += 1;
}
},
porta118: function() {
var t = cc.moveTo(3, cc.p(356, 149));
this.porta5.getComponent(cc.Animation).play("porta");
this.mexeAplicacao(t);
if ("118" == this.porta) {
this.pontuacao += 1;
this.pergunta += 1;
} else {
this.pergunta += 1;
this.erros += 1;
}
},
mexeAplicacao: function(t) {
var e = cc.moveTo(0, cc.p(1300, 0));
"81" == this.porta ? this.skype.runAction(cc.sequence(t, e)) : "80" == this.porta && 5 == this.pergunta ? this.firefox.runAction(cc.sequence(t, e)) : "80" == this.porta ? this.chrome.runAction(cc.sequence(t, e)) : "110" == this.porta ? this.thunderbird.runAction(cc.sequence(t, e)) : "20" == this.porta ? this.filezilla.runAction(cc.sequence(t, e)) : "118" == this.porta && this.mysql.runAction(cc.sequence(t, e));
},
mudaPergunta: function() {
if (0 === this.pergunta) this.porta = "81"; else if (1 == this.pergunta) {
this.porta = "80";
this.chrome.setPosition(0, -237);
} else if (2 == this.pergunta) {
this.porta = "110";
this.thunderbird.setPosition(0, -237);
} else if (3 == this.pergunta) {
this.porta = "20";
this.filezilla.setPosition(0, -237);
} else if (4 == this.pergunta) {
this.porta = "81";
this.skype.setPosition(0, -237);
} else if (5 == this.pergunta) {
this.porta = "80";
this.firefox.setPosition(0, -237);
} else if (6 == this.pergunta) {
this.porta = "118";
this.mysql.setPosition(0, -237);
} else if (7 == this.pergunta) {
this.porta = "20";
this.filezilla.setPosition(0, -237);
} else if (8 == this.pergunta) {
this.porta = "80";
this.chrome.setPosition(0, -237);
} else if (9 == this.pergunta) {
this.porta = "81";
this.skype.setPosition(0, -237);
} else if (10 == this.pergunta) {
this.porta = "110";
this.thunderbird.setPosition(0, -237);
this.pergunta = 0;
}
},
voltaTW: function() {
if (0 === this.saiAnimacao) {
this.saiAnimacao = 1;
this.professor.setPosition(-184, -131);
this.professor.getComponent(cc.Animation).play("Aparece");
this.textWrapper.getComponent(cc.Animation).play("apareceTW!");
}
},
gameOver: function() {
if (0 === this.saiAnimacao) {
this.saiAnimacao = 2;
this.professor.setPosition(-184, -131);
this.professor.getComponent(cc.Animation).play("Aparece");
this.textWrapper.getComponent(cc.Animation).play("apareceTW!");
this.moveLbl.setPosition(1300, 0);
}
},
update: function(t) {
this.mudaPergunta();
if (this.pontuacao >= 5) {
this.voltaTW();
this.someIcones();
this.somePortas();
} else if (this.erros >= 5) {
this.gameOver();
this.someIcones();
this.somePortas();
}
this.lblPontuacao.string = "Acertos: " + this.pontuacao;
this.lblErros.string = "Erros: " + this.erros;
}
});
cc._RF.pop();
}, {} ],
logo: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d66a0PfiwZCZ5GzAjOGS5sD", "logo");
cc.Class({
extends: cc.Component,
properties: {
logoSong: {
default: null,
url: cc.AudioClip
},
timer: 0,
duracaoLogo: 0
},
onLoad: function() {
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
cc.director.preloadScene("main");
this.timer = 0;
cc.audioEngine.playEffect(this.logoSong, !1);
},
vaiPraMain: function() {
cc.director.loadScene("main");
},
update: function(t) {
this.timer > this.duracaoLogo && this.vaiPraMain();
this.timer += t;
}
});
cc._RF.pop();
}, {} ],
main: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1e503f90d5C3oaK+CdtBYzj", "main");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
}
});
cc._RF.pop();
}, {} ],
profCamada1: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c5ddcGEn1dDCqKxChrdjrai", "profCamada1");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.node.setOpacity(0);
}
});
cc._RF.pop();
}, {} ],
profCamada2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d1625RGXZFImoy+5eRjGQ8Y", "profCamada2");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.node.setOpacity(0);
}
});
cc._RF.pop();
}, {} ],
profCamada3: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "53932RlzvlNIKpf6zUVC3fC", "profCamada3");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.node.setOpacity(0);
}
});
cc._RF.pop();
}, {} ],
profCamada4: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2b28ea0LxRBkY5XEt4jAd0L", "profCamada4");
cc.Class({
extends: cc.Component,
properties: {},
onLoad: function() {
this.node.setOpacity(0);
}
});
cc._RF.pop();
}, {} ],
quizFase1: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3c658NO4SdNWJy5B6SE9q6m", "quizFase1");
cc.Class({
extends: cc.Component,
properties: {
resposta1: {
default: null,
type: cc.Label
},
resposta2: {
default: null,
type: cc.Label
},
resposta3: {
default: null,
type: cc.Label
},
resposta4: {
default: null,
type: cc.Label
},
pergunta: {
default: null,
type: cc.Label
},
respostaErrada1: {
default: null,
type: cc.Node
},
respostaErrada2: {
default: null,
type: cc.Node
},
respostaErrada3: {
default: null,
type: cc.Node
},
respostaErrada1b: {
default: null,
type: cc.Node
},
respostaErrada2b: {
default: null,
type: cc.Node
},
respostaErrada3b: {
default: null,
type: cc.Node
},
respostaErrada4b: {
default: null,
type: cc.Node
},
respostaCerta: {
default: null,
type: cc.Node
},
respostaExtra: {
default: null,
type: cc.Node
},
telaFinalQuiz: {
default: null,
type: cc.Node
},
gameOver: {
default: null,
type: cc.Label
},
respostasCertas: {
default: null,
type: cc.Label
},
respostasErradas: {
default: null,
type: cc.Label
},
buttonTryAgain: {
default: null,
type: cc.Node
},
professor: {
default: null,
type: cc.Node
},
face: {
default: null,
type: cc.Node
},
falaquizprof: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
resp: 0,
contador: 0,
timer: 0,
respCer: 0,
respErr: 0,
saiAnimacao: 0
},
someResposta: function() {
this.respostaErrada1.setOpacity(0);
this.respostaErrada2.setOpacity(0);
this.respostaErrada3.setOpacity(0);
this.respostaExtra.setOpacity(0);
this.respostaCerta.setOpacity(0);
},
mostraResposta: function() {
this.respostaErrada1.setOpacity(255);
this.respostaErrada2.setOpacity(255);
this.respostaErrada3.setOpacity(255);
this.respostaExtra.setOpacity(255);
this.respostaCerta.setOpacity(255);
},
trocaRespostas: function() {
1 == this.contador ? this.respostaCerta.setPositionY(112) : 2 == this.contador ? this.respostaCerta.setPositionY(-18) : 3 == this.contador ? this.respostaCerta.setPositionY(-258) : 4 == this.contador && this.respostaCerta.setPositionY(112);
},
perguntas: function() {
if (0 === this.contador) {
this.apareceRespostas();
this.someResposta();
this.pergunta.string = "Quais as PDUs(Unidades de \ndados de protocolos) usados\nna camada de acesso a rede?";
this.resposta1.string = "Segmento e bit";
this.resposta2.string = "Datagrama e pacotes";
this.resposta3.string = "Bit e Quadros(Frames)";
this.resposta4.string = "Pacotes e quadros";
} else if (1 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "A onda senoidal é a representação\nfundamental de um sinal analógico.\n Marque a alternativa abaixo que NÃO\napresenta uma característica\nde onda senoidal.";
this.resposta1.string = "Sinalização";
this.resposta2.string = "Amplitude ";
this.resposta3.string = "Frequencia/Periodo";
this.resposta4.string = "Fase";
} else if (2 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Em uma transmissão digital \nao informar que existem\n4 níveis de sinalização quantos bits\nestão sendo trafegados por sinal?";
this.resposta1.string = "3";
this.resposta2.string = "2";
this.resposta3.string = "4";
this.resposta4.string = "1";
} else if (3 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "O sinal digital é caracterizado por...:";
this.resposta1.string = "Ser alternado em contínuo";
this.resposta2.string = "Ser um sinal que não possui falhas";
this.resposta3.string = "Ter um conjunto infinito de valores\n num intervalo de tempo qualquer";
this.resposta4.string = "Possuir apenas um\n conjunto limitado de valores";
} else if (4 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "A latência é calculada\natravés da soma de 4 atrasos.\nMarque a alternativa que apresenta\nos 4 atrasos que formam a latência:";
this.resposta1.string = "Atraso de transmissão, atraso de propagação\natraso de fila, atraso de processamento.";
this.resposta2.string = "Atraso de sinais, atraso de propagação\natraso de fila, atraso de processamento";
this.resposta3.string = "Atraso de transmissão, atraso de propagação\natraso de recepção, atraso de processamento";
this.resposta4.string = "Atraso de mensagem, atraso de propagação\natraso de recepção, atraso de processamento.";
}
},
buttonRespCerto: function() {
this.timer = 3;
this.saiAnimacao = 1;
this.respCer += 1;
this.contador += 1;
},
buttonRespErrado: function() {
this.timer = 3;
this.saiAnimacao = 1;
this.respErr += 1;
this.contador += 1;
},
gameover: function() {
this.telaFinalQuiz.setPositionX(0);
if (this.respCer >= 3) {
this.buttonTryAgain.destroy();
this.gameOver.string = "Parabéns!\nVocê passou no Quiz!";
} else this.gameOver.string = "Ah! que pena!\nVocê não passou no Quiz!\ntente novamente!";
this.respostasCertas.string = "Respostas corretas: " + this.respCer;
this.respostasErradas.string = "Respostas Erradas: " + this.respErr;
},
onLoad: function() {
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
cc.audioEngine.play(this.gameAudio, !0);
this.someResposta();
this.timer = 1e5;
this.contador = 0;
this.saiAnimacao = 0;
this.respCer = 0;
this.respErr = 0;
this.perguntas();
},
onDestroy: function() {
cc.audioEngine.pauseAll();
},
apareceRespostas: function() {
if (1 == this.saiAnimacao) {
this.saiAnimacao = 0;
var t = this.respostaErrada1b.getComponent(cc.Animation), e = this.respostaErrada2b.getComponent(cc.Animation), o = this.respostaErrada3b.getComponent(cc.Animation), s = this.respostaErrada4b.getComponent(cc.Animation), a = this.resposta1.getComponent(cc.Animation), i = this.resposta2.getComponent(cc.Animation), n = this.resposta3.getComponent(cc.Animation), r = this.resposta4.getComponent(cc.Animation), c = (this.respostaCerta.getComponent(cc.Animation), 
this.respostaExtra.getComponent(cc.Animation), this.falaquizprof.getComponent(cc.Animation)), p = this.face.getComponent(cc.Animation), l = this.professor.getComponent(cc.Animation);
t.playAdditive("apareceResposta1");
e.playAdditive("apareceResposta2");
o.playAdditive("apareceResposta3");
s.playAdditive("apareceResposta4");
a.playAdditive("apareceResposta1");
i.playAdditive("apareceResposta2");
n.playAdditive("apareceResposta3");
r.playAdditive("apareceResposta4");
c.playAdditive("apareceFalaProfessor");
var d = p.play("falaProfessor1");
d.speed = .5;
d.repeatCount = Infinity;
l.playAdditive("animaProfessor1");
} else this.saiAnimacao;
},
goToCredits: function() {
cc.director.loadScene("credits");
},
update: function(t) {
3 == this.timer ? this.mostraResposta() : this.timer < 1 ? this.perguntas() : 5 == this.contador && this.gameover();
this.timer -= t;
}
});
cc._RF.pop();
}, {} ],
quizFase2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "da591+6Q01M7rrbZhQRZ/KS", "quizFase2");
cc.Class({
extends: cc.Component,
properties: {
resposta1: {
default: null,
type: cc.Label
},
resposta2: {
default: null,
type: cc.Label
},
resposta3: {
default: null,
type: cc.Label
},
resposta4: {
default: null,
type: cc.Label
},
pergunta: {
default: null,
type: cc.Label
},
respostaErrada1: {
default: null,
type: cc.Node
},
respostaErrada2: {
default: null,
type: cc.Node
},
respostaErrada3: {
default: null,
type: cc.Node
},
respostaErrada1b: {
default: null,
type: cc.Node
},
respostaErrada2b: {
default: null,
type: cc.Node
},
respostaErrada3b: {
default: null,
type: cc.Node
},
respostaErrada4b: {
default: null,
type: cc.Node
},
respostaCerta: {
default: null,
type: cc.Node
},
respostaExtra: {
default: null,
type: cc.Node
},
telaFinalQuiz: {
default: null,
type: cc.Node
},
gameOver: {
default: null,
type: cc.Label
},
respostasCertas: {
default: null,
type: cc.Label
},
respostasErradas: {
default: null,
type: cc.Label
},
buttonTryAgain: {
default: null,
type: cc.Node
},
professor: {
default: null,
type: cc.Node
},
face: {
default: null,
type: cc.Node
},
falaquizprof: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
resp: 0,
contador: 0,
timer: 0,
respCer: 0,
respErr: 0,
saiAnimacao: 0
},
someResposta: function() {
this.respostaErrada1.setOpacity(0);
this.respostaErrada2.setOpacity(0);
this.respostaErrada3.setOpacity(0);
this.respostaExtra.setOpacity(0);
this.respostaCerta.setOpacity(0);
},
mostraResposta: function() {
this.respostaErrada1.setOpacity(255);
this.respostaErrada2.setOpacity(255);
this.respostaErrada3.setOpacity(255);
this.respostaExtra.setOpacity(255);
this.respostaCerta.setOpacity(255);
},
trocaRespostas: function() {
1 == this.contador ? this.respostaCerta.setPositionY(112) : 2 == this.contador ? this.respostaCerta.setPositionY(-18) : 3 == this.contador ? this.respostaCerta.setPositionY(-258) : 4 == this.contador && this.respostaCerta.setPositionY(112);
},
perguntas: function() {
if (0 === this.contador) {
this.apareceRespostas();
this.someResposta();
this.pergunta.string = "A camada Internet\n é responsável por...";
this.resposta1.string = "Controlar de forma física o acesso a rede";
this.resposta2.string = "Gerar e transmitir o sinal pelo meio";
this.resposta3.string = "Definir e tratar os endereços lógicos\n de origem/destino na rede";
this.resposta4.string = "Fazer a comunicaçã entre os processos";
} else if (1 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Qual dos seguintes\n NÃO é verdadeiro\n sobre um endereço IP?";
this.resposta1.string = "Um endereço IPv4\n geralmente é representado no formato\n hexadecimal para o usuário";
this.resposta2.string = "Um endereço IP é um endereço lógico";
this.resposta3.string = "Um endereço IP é globalmente\n exclusivo em uma rede";
this.resposta4.string = "Um endereço IP pode ser considerado\n como consistindo de\n uma parte de rede e uma parte de host";
} else if (2 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Qual das seguintes\n máscaras padrão está\n incorreta?";
this.resposta1.string = "Máscara Classe A 255.0.0.0 ou /8";
this.resposta2.string = "Máscara Classe D 255.255.255.255 ou /32";
this.resposta3.string = "Máscara Classe B 255.255.0.0 ou /16";
this.resposta4.string = "Máscara classe C 255.255.255.0 ou /24";
} else if (3 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "O que faz o ARP\n (Address Resolution Protocol)?";
this.resposta1.string = "Resolve endereços MAC\n para endereços IP";
this.resposta2.string = "Resolve o campo TYPE\n para o endereço MAC";
this.resposta3.string = "Resolve o endereço MAC\n para o campo TYPE";
this.resposta4.string = "Resolve o endereço IP\n para endereço MAC";
} else if (4 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Qual o numero máximo\n de hosts possíveis em\n uma rede classe C?";
this.resposta1.string = "254";
this.resposta2.string = "128";
this.resposta3.string = "256";
this.resposta4.string = "64";
}
},
buttonRespCerto: function() {
this.timer = 3;
this.saiAnimacao = 1;
this.respCer += 1;
this.contador += 1;
},
buttonRespErrado: function() {
this.timer = 3;
this.saiAnimacao = 1;
this.respErr += 1;
this.contador += 1;
},
gameover: function() {
this.telaFinalQuiz.setPositionX(0);
if (this.respCer >= 3) {
this.buttonTryAgain.destroy();
this.gameOver.string = "Parabéns!\nVocê passou no Quiz!";
} else this.gameOver.string = "Ah! que pena!\nVocê não passou no Quiz!\ntente novamente!";
this.respostasCertas.string = "Respostas corretas: " + this.respCer;
this.respostasErradas.string = "Respostas Erradas: " + this.respErr;
},
onLoad: function() {
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
cc.audioEngine.play(this.gameAudio, !0);
this.someResposta();
this.timer = 1e5;
this.contador = 0;
this.saiAnimacao = 0;
this.respCer = 0;
this.respErr = 0;
this.perguntas();
},
onDestroy: function() {
cc.audioEngine.pauseAll();
},
apareceRespostas: function() {
if (1 == this.saiAnimacao) {
this.saiAnimacao = 0;
var t = this.respostaErrada1b.getComponent(cc.Animation), e = this.respostaErrada2b.getComponent(cc.Animation), o = this.respostaErrada3b.getComponent(cc.Animation), s = this.respostaErrada4b.getComponent(cc.Animation), a = this.resposta1.getComponent(cc.Animation), i = this.resposta2.getComponent(cc.Animation), n = this.resposta3.getComponent(cc.Animation), r = this.resposta4.getComponent(cc.Animation), c = (this.respostaCerta.getComponent(cc.Animation), 
this.respostaExtra.getComponent(cc.Animation), this.falaquizprof.getComponent(cc.Animation)), p = this.face.getComponent(cc.Animation), l = this.professor.getComponent(cc.Animation);
t.playAdditive("apareceResposta1");
e.playAdditive("apareceResposta2");
o.playAdditive("apareceResposta3");
s.playAdditive("apareceResposta4");
a.playAdditive("apareceResposta1");
i.playAdditive("apareceResposta2");
n.playAdditive("apareceResposta3");
r.playAdditive("apareceResposta4");
c.playAdditive("apareceFalaProfessor");
p.play("falaProfessor2");
l.playAdditive("animaProfessora2-1");
} else this.saiAnimacao;
},
goToCredits: function() {
cc.director.loadScene("credits");
},
update: function(t) {
3 == this.timer ? this.mostraResposta() : this.timer < 1 ? this.perguntas() : 5 == this.contador && this.gameover();
this.timer -= t;
}
});
cc._RF.pop();
}, {} ],
quizFase3: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f22e5aGH4xNvqXYx+gl+gj4", "quizFase3");
cc.Class({
extends: cc.Component,
properties: {
resposta1: {
default: null,
type: cc.Label
},
resposta2: {
default: null,
type: cc.Label
},
resposta3: {
default: null,
type: cc.Label
},
resposta4: {
default: null,
type: cc.Label
},
pergunta: {
default: null,
type: cc.Label
},
respostaErrada1: {
default: null,
type: cc.Node
},
respostaErrada2: {
default: null,
type: cc.Node
},
respostaErrada3: {
default: null,
type: cc.Node
},
respostaErrada1b: {
default: null,
type: cc.Node
},
respostaErrada2b: {
default: null,
type: cc.Node
},
respostaErrada3b: {
default: null,
type: cc.Node
},
respostaErrada4b: {
default: null,
type: cc.Node
},
respostaCerta: {
default: null,
type: cc.Node
},
respostaExtra: {
default: null,
type: cc.Node
},
telaFinalQuiz: {
default: null,
type: cc.Node
},
gameOver: {
default: null,
type: cc.Label
},
respostasCertas: {
default: null,
type: cc.Label
},
respostasErradas: {
default: null,
type: cc.Label
},
buttonTryAgain: {
default: null,
type: cc.Node
},
professor: {
default: null,
type: cc.Node
},
face: {
default: null,
type: cc.Node
},
falaquizprof: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
resp: 0,
contador: 0,
timer: 0,
respCer: 0,
respErr: 0,
saiAnimacao: 0
},
someResposta: function() {
this.respostaErrada1.setOpacity(0);
this.respostaErrada2.setOpacity(0);
this.respostaErrada3.setOpacity(0);
this.respostaExtra.setOpacity(0);
this.respostaCerta.setOpacity(0);
},
mostraResposta: function() {
this.respostaErrada1.setOpacity(255);
this.respostaErrada2.setOpacity(255);
this.respostaErrada3.setOpacity(255);
this.respostaExtra.setOpacity(255);
this.respostaCerta.setOpacity(255);
},
trocaRespostas: function() {
1 == this.contador ? this.respostaCerta.setPositionY(112) : 2 == this.contador ? this.respostaCerta.setPositionY(-18) : 3 == this.contador ? this.respostaCerta.setPositionY(-258) : 4 == this.contador && this.respostaCerta.setPositionY(112);
},
perguntas: function() {
if (0 === this.contador) {
this.apareceRespostas();
this.someResposta();
this.pergunta.string = "A camada transporte é responsável por...";
this.resposta1.string = "Gerenciar os pacotes na rede";
this.resposta2.string = "Gerar e transmitir o sinal pelo meio";
this.resposta3.string = "Estabelecer uma conexão fim a fim\n (conexão confiável)entre duas aplicações";
this.resposta4.string = "Acessar a rede em aplicações Web";
} else if (1 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Qual destes protocolos não pertence\n a camada de transporte?";
this.resposta1.string = "ARP";
this.resposta2.string = "TCP";
this.resposta3.string = "UDP";
this.resposta4.string = "RTP";
} else if (2 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Qual a ordem correta\n do protocolo Three Way Handshake\n do TCP/IP?";
this.resposta1.string = "SYN, SYN-SYN, ACK-ACK";
this.resposta2.string = "SYN, SYN-ACK, ACK";
this.resposta3.string = "ACK, ACK-SYN, SYN";
this.resposta4.string = "SYN, ACK-SYN, ACK";
} else if (3 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Na camada de transporte\n o protocolo para garantir\n a confiabilidade é...?";
this.resposta1.string = "IP";
this.resposta2.string = "FTP";
this.resposta3.string = "HTTP";
this.resposta4.string = "TCP";
} else if (4 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Os protocolos da camada de transporte\n que estabelecem uma conexão com\n outro nó antes de começarem\n a transmitir dados são conhecidos como ?";
this.resposta1.string = "Protocolos orientados à conexão";
this.resposta2.string = "Protocolos sem conexão";
this.resposta3.string = "Protocolos orientados a Syn";
this.resposta4.string = "Protocolos orientados para Ack";
}
},
buttonRespCerto: function() {
this.timer = 3;
this.saiAnimacao = 1;
this.respCer += 1;
this.contador += 1;
},
buttonRespErrado: function() {
this.timer = 3;
this.saiAnimacao = 1;
this.respErr += 1;
this.contador += 1;
},
gameover: function() {
this.telaFinalQuiz.setPositionX(0);
if (this.respCer >= 3) {
this.buttonTryAgain.destroy();
this.gameOver.string = "Parabéns!\nVocê passou no Quiz!";
} else this.gameOver.string = "Ah! que pena!\nVocê não passou no Quiz!\ntente novamente!";
this.respostasCertas.string = "Respostas corretas: " + this.respCer;
this.respostasErradas.string = "Respostas Erradas: " + this.respErr;
},
onLoad: function() {
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
cc.audioEngine.play(this.gameAudio, !0);
this.someResposta();
this.timer = 1e5;
this.contador = 0;
this.saiAnimacao = 0;
this.respCer = 0;
this.respErr = 0;
this.perguntas();
},
onDestroy: function() {
cc.audioEngine.pauseAll();
},
apareceRespostas: function() {
if (1 == this.saiAnimacao) {
this.saiAnimacao = 0;
var t = this.respostaErrada1b.getComponent(cc.Animation), e = this.respostaErrada2b.getComponent(cc.Animation), o = this.respostaErrada3b.getComponent(cc.Animation), s = this.respostaErrada4b.getComponent(cc.Animation), a = this.resposta1.getComponent(cc.Animation), i = this.resposta2.getComponent(cc.Animation), n = this.resposta3.getComponent(cc.Animation), r = this.resposta4.getComponent(cc.Animation), c = (this.respostaCerta.getComponent(cc.Animation), 
this.respostaExtra.getComponent(cc.Animation), this.falaquizprof.getComponent(cc.Animation)), p = this.face.getComponent(cc.Animation), l = this.professor.getComponent(cc.Animation);
t.playAdditive("apareceResposta1");
e.playAdditive("apareceResposta2");
o.playAdditive("apareceResposta3");
s.playAdditive("apareceResposta4");
a.playAdditive("apareceResposta1");
i.playAdditive("apareceResposta2");
n.playAdditive("apareceResposta3");
r.playAdditive("apareceResposta4");
c.playAdditive("apareceFalaProfessor");
p.play("falaProfessor3-3");
l.playAdditive("animaProfessor");
} else this.saiAnimacao;
},
goToCredits: function() {
cc.director.loadScene("credits");
},
update: function(t) {
3 == this.timer ? this.mostraResposta() : this.timer < 1 ? this.perguntas() : 5 == this.contador && this.gameover();
this.timer -= t;
}
});
cc._RF.pop();
}, {} ],
quizFase4: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "be410/DQ6NMUa2FROMcamiA", "quizFase4");
cc.Class({
extends: cc.Component,
properties: {
resposta1: {
default: null,
type: cc.Label
},
resposta2: {
default: null,
type: cc.Label
},
resposta3: {
default: null,
type: cc.Label
},
resposta4: {
default: null,
type: cc.Label
},
pergunta: {
default: null,
type: cc.Label
},
respostaErrada1: {
default: null,
type: cc.Node
},
respostaErrada2: {
default: null,
type: cc.Node
},
respostaErrada3: {
default: null,
type: cc.Node
},
respostaErrada1b: {
default: null,
type: cc.Node
},
respostaErrada2b: {
default: null,
type: cc.Node
},
respostaErrada3b: {
default: null,
type: cc.Node
},
respostaErrada4b: {
default: null,
type: cc.Node
},
respostaCerta: {
default: null,
type: cc.Node
},
respostaExtra: {
default: null,
type: cc.Node
},
telaFinalQuiz: {
default: null,
type: cc.Node
},
gameOver: {
default: null,
type: cc.Label
},
respostasCertas: {
default: null,
type: cc.Label
},
respostasErradas: {
default: null,
type: cc.Label
},
buttonTryAgain: {
default: null,
type: cc.Node
},
professor: {
default: null,
type: cc.Node
},
face: {
default: null,
type: cc.Node
},
falaquizprof: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
resp: 0,
contador: 0,
timer: 0,
respCer: 0,
respErr: 0,
saiAnimacao: 0
},
someResposta: function() {
this.respostaErrada1.setOpacity(0);
this.respostaErrada2.setOpacity(0);
this.respostaErrada3.setOpacity(0);
this.respostaExtra.setOpacity(0);
this.respostaCerta.setOpacity(0);
},
mostraResposta: function() {
this.respostaErrada1.setOpacity(255);
this.respostaErrada2.setOpacity(255);
this.respostaErrada3.setOpacity(255);
this.respostaExtra.setOpacity(255);
this.respostaCerta.setOpacity(255);
},
trocaRespostas: function() {
1 == this.contador ? this.respostaCerta.setPositionY(112) : 2 == this.contador ? this.respostaCerta.setPositionY(-18) : 3 == this.contador ? this.respostaCerta.setPositionY(-258) : 4 == this.contador && this.respostaCerta.setPositionY(112);
},
perguntas: function() {
if (0 === this.contador) {
this.apareceRespostas();
this.someResposta();
this.pergunta.string = "A camada de aplicação\n é responsável por...";
this.resposta1.string = "Gerenciar os pacotes na rede";
this.resposta2.string = "Estabelecer uma conexão fim a fim\n (conexão confiável)entre a origem e o destino\n dos dados.";
this.resposta3.string = "permitir a criptografia de dados\n para garantia de segurança.\n Oferecer a interface de usabilidade\n para os clientes.";
this.resposta4.string = "Demonstrar na tela elementos visuais das aplicações";
} else if (1 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Na camada de aplicação\n o protocolo HTTP é\n responsavel por...?";
this.resposta1.string = "Transferir hipertextos";
this.resposta2.string = "Receber arquivos de vídeo da Internet ";
this.resposta3.string = "Exibir páginas web";
this.resposta4.string = "Baixar arquivos Torrent";
} else if (2 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "O programa Filezilla\n e o protocolo FTP\n são responsaveis por ";
this.resposta1.string = "Segurança na rede";
this.resposta2.string = "Transferencia de arquivos";
this.resposta3.string = "Armazenamento em nuvem";
this.resposta4.string = "Criptografia de dados";
} else if (3 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Qual destes é um protocolo\n de camada de aplicação?";
this.resposta1.string = "TCP";
this.resposta2.string = "IP";
this.resposta3.string = "Ethernet";
this.resposta4.string = "HTTP";
} else if (4 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "pra que serve o protocolo DNS?";
this.resposta1.string = "Traduz nomes de domínios\n mais facilmente memorizáveis\n a endereços IP ";
this.resposta2.string = "Acessa e mantem serviços\n de informação de diretório\n distribuído sobre uma rede";
this.resposta3.string = "Opera serviços de rede de forma\n segura sobre uma rede insegura";
this.resposta4.string = "Oferece configuração dinâmica de terminais";
}
},
buttonRespCerto: function() {
this.timer = 3;
this.saiAnimacao = 1;
this.respCer += 1;
this.contador += 1;
},
buttonRespErrado: function() {
this.timer = 3;
this.saiAnimacao = 1;
this.respErr += 1;
this.contador += 1;
},
goToCredits: function() {
cc.director.loadScene("credits");
},
gameover: function() {
this.telaFinalQuiz.setPositionX(0);
if (this.respCer >= 3) {
this.buttonTryAgain.destroy();
this.gameOver.string = "Parabéns!\nVocê passou no Quiz!";
} else this.gameOver.string = "Ah! que pena!\nVocê não passou no Quiz!\ntente novamente!";
this.respostasCertas.string = "Respostas corretas: " + this.respCer;
this.respostasErradas.string = "Respostas Erradas: " + this.respErr;
},
onLoad: function() {
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
this.someResposta();
cc.audioEngine.play(this.gameAudio, !0);
this.timer = 1e5;
this.contador = 0;
this.saiAnimacao = 0;
this.respCer = 0;
this.respErr = 0;
this.perguntas();
},
onDestroy: function() {
cc.audioEngine.pauseAll();
},
apareceRespostas: function() {
if (1 == this.saiAnimacao) {
this.saiAnimacao = 0;
var t = this.respostaErrada1b.getComponent(cc.Animation), e = this.respostaErrada2b.getComponent(cc.Animation), o = this.respostaErrada3b.getComponent(cc.Animation), s = this.respostaErrada4b.getComponent(cc.Animation), a = this.resposta1.getComponent(cc.Animation), i = this.resposta2.getComponent(cc.Animation), n = this.resposta3.getComponent(cc.Animation), r = this.resposta4.getComponent(cc.Animation), c = (this.respostaCerta.getComponent(cc.Animation), 
this.respostaExtra.getComponent(cc.Animation), this.falaquizprof.getComponent(cc.Animation)), p = this.face.getComponent(cc.Animation), l = this.professor.getComponent(cc.Animation);
t.playAdditive("apareceResposta1");
e.playAdditive("apareceResposta2");
o.playAdditive("apareceResposta3");
s.playAdditive("apareceResposta4");
a.playAdditive("apareceResposta1");
i.playAdditive("apareceResposta2");
n.playAdditive("apareceResposta3");
r.playAdditive("apareceResposta4");
c.playAdditive("apareceFalaProfessor");
p.play("falaProfessor2");
l.playAdditive("animaProfessor1");
} else this.saiAnimacao;
},
update: function(t) {
3 == this.timer ? this.mostraResposta() : this.timer < 1 ? this.perguntas() : 5 == this.contador && this.gameover();
this.timer -= t;
}
});
cc._RF.pop();
}, {} ],
quizFase5: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "3082eOKgbVGYbUqDWKxl0Xh", "quizFase5");
cc.Class({
extends: cc.Component,
properties: {
resposta1: {
default: null,
type: cc.Label
},
resposta2: {
default: null,
type: cc.Label
},
resposta3: {
default: null,
type: cc.Label
},
resposta4: {
default: null,
type: cc.Label
},
pergunta: {
default: null,
type: cc.Label
},
respostaErrada1: {
default: null,
type: cc.Node
},
respostaErrada2: {
default: null,
type: cc.Node
},
respostaErrada3: {
default: null,
type: cc.Node
},
respostaErrada1b: {
default: null,
type: cc.Node
},
respostaErrada2b: {
default: null,
type: cc.Node
},
respostaErrada3b: {
default: null,
type: cc.Node
},
respostaErrada4b: {
default: null,
type: cc.Node
},
respostaCerta: {
default: null,
type: cc.Node
},
respostaExtra: {
default: null,
type: cc.Node
},
telaFinalQuiz: {
default: null,
type: cc.Node
},
gameOver: {
default: null,
type: cc.Label
},
respostasCertas: {
default: null,
type: cc.Label
},
respostasErradas: {
default: null,
type: cc.Label
},
buttonTryAgain: {
default: null,
type: cc.Node
},
falaquizprof: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
resp: 0,
contador: 0,
timer: 0,
respCer: 0,
respErr: 0,
saiAnimacao: 0
},
someResposta: function() {
this.respostaErrada1.setOpacity(0);
this.respostaErrada2.setOpacity(0);
this.respostaErrada3.setOpacity(0);
this.respostaExtra.setOpacity(0);
this.respostaCerta.setOpacity(0);
},
mostraResposta: function() {
this.respostaErrada1.setOpacity(255);
this.respostaErrada2.setOpacity(255);
this.respostaErrada3.setOpacity(255);
this.respostaExtra.setOpacity(255);
this.respostaCerta.setOpacity(255);
},
trocaRespostas: function() {
1 == this.contador ? this.respostaCerta.setPositionY(-18) : 2 == this.contador ? this.respostaCerta.setPositionY(-258) : 3 == this.contador ? this.respostaCerta.setPositionY(-146) : 4 == this.contador ? this.respostaCerta.setPositionY(-146) : 5 == this.contador ? this.respostaCerta.setPositionY(112) : 6 == this.contador ? this.respostaCerta.setPositionY(-18) : 7 == this.contador ? this.respostaCerta.setPositionY(112) : 8 == this.contador ? this.respostaCerta.setPositionY(-258) : 9 == this.contador && this.respostaCerta.setPositionY(-18);
},
perguntas: function() {
if (0 === this.contador) {
this.apareceRespostas();
this.someResposta();
this.pergunta.string = "Questao 1:\nQual protocolo é responsável por resolver\no mapeamento entre os endereço IP\ne os endereços MAC da rede?";
this.resposta1.string = "TCP";
this.resposta2.string = "DHCP";
this.resposta3.string = "ARP";
this.resposta4.string = "DNS";
} else if (1 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Questao 2:\nAssinale a alternativa que representa\no tamanho em bytes dos campos de\nendereço MAC, IPv4 e IPv6\n respectivamente.";
this.resposta1.string = "4, 6, 16";
this.resposta2.string = "6, 4, 16";
this.resposta3.string = "48, 32, 128";
this.resposta4.string = "16, 32, 64";
} else if (2 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Questao 3:\nNa pilha TCP/IP, a função de enviar ao\ntransmissor da informação uma confirmação\nde recebimento da mensagem(ack)\n é realizada pela camada:";
this.resposta1.string = "Internet";
this.resposta2.string = "Acesso a rede";
this.resposta3.string = "Aplicaçao";
this.resposta4.string = "Transporte";
} else if (3 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Questao 4:\nAssinale a alternativa que contém\n protocolos das camadas de enlace, rede\ntransporte e aplicação respectivamente\n da pilha de protocolos TCP/IP.";
this.resposta1.string = "ARP, IP, TCP, IP";
this.resposta2.string = "Ethernet, PPP, UDP, SSH";
this.resposta3.string = "PPP, ICMP, UDP, SNMP";
this.resposta4.string = "Ethernet, DNS, TCP, SMTP";
} else if (4 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Questao 5:\nO endereço de um recurso\n disponível em uma rede seja na Internet \nou numa rede corporativa Intranet\n tem a seguinte estrutura:";
this.resposta1.string = "protocolo://caminho/recurso/máquina. ";
this.resposta2.string = "protocolo://caminho/máquina/recurso. ";
this.resposta3.string = "protocolo://máquina/caminho/recurso. ";
this.resposta4.string = "máquina://protocolo/caminho/recurso. ";
} else if (5 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Questao 6:\nNa classe padrão C\nquantos bytes são reservados para redes?";
this.resposta1.string = "03 bytes";
this.resposta2.string = "02 bytes";
this.resposta3.string = "01 byte";
this.resposta4.string = "04 bytes";
} else if (6 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Questao 7:\nComo é denominado o protocolo\nde configuração dinâmica de IP?";
this.resposta1.string = "FTP";
this.resposta2.string = "DHCP";
this.resposta3.string = "HTTP";
this.resposta4.string = "DNS";
} else if (7 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Questao 8:\nQual destes protocolos é mais rápido\nporém menos confiável?";
this.resposta1.string = "UDP";
this.resposta2.string = "FTP";
this.resposta3.string = "SSH";
this.resposta4.string = "TCP";
} else if (8 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Questao 9:\nQual é a classe de endereço IP\nque utiliza a máscara padrão 255.255.0.0?";
this.resposta1.string = "A";
this.resposta2.string = "D";
this.resposta3.string = "C";
this.resposta4.string = "B";
} else if (9 == this.contador) {
this.apareceRespostas();
this.someResposta();
this.trocaRespostas();
this.pergunta.string = "Questao 10:\nO conjunto formado por um endereço IP\ne um número de porta constitui:";
this.resposta1.string = "Uma conexao";
this.resposta2.string = "Um socket";
this.resposta3.string = "Um datagrama";
this.resposta4.string = "O endereço de gateway";
}
},
buttonRespCerto: function() {
this.timer = 3;
this.saiAnimacao = 1;
this.respCer += 1;
this.contador += 1;
},
buttonRespErrado: function() {
this.timer = 3;
this.saiAnimacao = 1;
this.respErr += 1;
this.contador += 1;
},
gameover: function() {
this.telaFinalQuiz.setPositionX(0);
if (this.respCer >= 7) {
this.buttonTryAgain.destroy();
this.gameOver.string = "Parabéns!\nVocê passou no Quiz!";
} else this.gameOver.string = "Ah! que pena!\nVocê não passou no Quiz!\ntente novamente!";
this.respostasCertas.string = "Respostas corretas: " + this.respCer;
this.respostasErradas.string = "Respostas Erradas: " + this.respErr;
},
onLoad: function() {
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
cc.audioEngine.play(this.gameAudio, !0);
this.someResposta();
this.timer = 1e5;
this.contador = 0;
this.saiAnimacao = 0;
this.respCer = 0;
this.respErr = 0;
this.perguntas();
},
onDestroy: function() {
cc.audioEngine.pauseAll();
},
goToCredits: function() {
cc.director.loadScene("credits");
},
apareceRespostas: function() {
if (1 == this.saiAnimacao) {
this.saiAnimacao = 0;
var t = this.respostaErrada1b.getComponent(cc.Animation), e = this.respostaErrada2b.getComponent(cc.Animation), o = this.respostaErrada3b.getComponent(cc.Animation), s = this.respostaErrada4b.getComponent(cc.Animation), a = this.resposta1.getComponent(cc.Animation), i = this.resposta2.getComponent(cc.Animation), n = this.resposta3.getComponent(cc.Animation), r = this.resposta4.getComponent(cc.Animation), c = (this.respostaCerta.getComponent(cc.Animation), 
this.respostaExtra.getComponent(cc.Animation), this.falaquizprof.getComponent(cc.Animation));
t.playAdditive("apareceResposta1");
e.playAdditive("apareceResposta2");
o.playAdditive("apareceResposta3");
s.playAdditive("apareceResposta4");
a.playAdditive("apareceResposta1");
i.playAdditive("apareceResposta2");
n.playAdditive("apareceResposta3");
r.playAdditive("apareceResposta4");
c.playAdditive("apareceFalaProfessor");
} else this.saiAnimacao;
},
update: function(t) {
3 == this.timer ? this.mostraResposta() : this.timer < 1 ? this.perguntas() : 10 == this.contador && this.gameover();
this.timer -= t;
}
});
cc._RF.pop();
}, {} ],
selectStage: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ca0f0YsqNpNQI4m4zG6+h5M", "selectStage");
cc.Class({
extends: cc.Component,
properties: {
Camada1: {
default: null,
type: cc.Node
},
Camada2: {
default: null,
type: cc.Node
},
Camada3: {
default: null,
type: cc.Node
},
Camada4: {
default: null,
type: cc.Node
},
Camada5: {
default: null,
type: cc.Node
},
testeFinal: {
default: null,
type: cc.Node
},
button1: {
default: null,
type: cc.Node
},
button2: {
default: null,
type: cc.Node
},
gameAudio: {
default: null,
url: cc.AudioClip
},
contador: 0
},
vaiPraFrente: function() {
if (1 == this.contador) {
this.Camada1.getComponent(cc.Animation).playAdditive("PraFrente");
var t = this.Camada2.getComponent(cc.Animation);
t.playAdditive("PraTras");
this.contador += 1;
} else if (2 == this.contador) {
(t = this.Camada2.getComponent(cc.Animation)).playAdditive("PraFrente");
var e = this.Camada3.getComponent(cc.Animation);
e.playAdditive("PraTras");
this.contador += 1;
} else if (3 == this.contador) {
(e = this.Camada3.getComponent(cc.Animation)).playAdditive("PraFrente");
var o = this.Camada4.getComponent(cc.Animation);
o.playAdditive("PraTras");
this.contador += 1;
} else if (4 == this.contador) {
(o = this.Camada4.getComponent(cc.Animation)).playAdditive("PraFrente");
var s = this.Camada5.getComponent(cc.Animation);
s.playAdditive("PraTras");
this.contador += 1;
} else 5 == this.contador && (s = this.Camada5.getComponent(cc.Animation)).playAdditive("PraFrente");
},
vaiPraTras: function() {
if (5 == this.contador) {
this.Camada5.getComponent(cc.Animation).playAdditive("PraFrente");
var t = this.Camada4.getComponent(cc.Animation);
t.playAdditive("PraTras");
this.contador -= 1;
} else if (4 == this.contador) {
(t = this.Camada4.getComponent(cc.Animation)).playAdditive("PraFrente");
var e = this.Camada3.getComponent(cc.Animation);
e.playAdditive("PraTras");
this.contador -= 1;
} else if (3 == this.contador) {
(e = this.Camada3.getComponent(cc.Animation)).playAdditive("PraFrente");
var o = this.Camada2.getComponent(cc.Animation);
o.playAdditive("PraTras");
this.contador -= 1;
} else if (2 == this.contador) {
(o = this.Camada2.getComponent(cc.Animation)).playAdditive("PraFrente");
var s = this.Camada1.getComponent(cc.Animation);
s.playAdditive("PraTras");
this.contador -= 1;
} else 1 == this.contador && (s = this.Camada1.getComponent(cc.Animation)).playAdditive("PraFrente");
},
onLoad: function() {
cc.view.setResolutionPolicy(cc.ResolutionPolicy.EXACT_FIT);
cc.audioEngine.play(this.gameAudio, !0);
this.contador = 1;
},
onDestroy: function() {
cc.audioEngine.pauseAll();
},
verificaContador: function() {
if (1 == this.contador) this.button1.setPosition(-1300, 0); else if (5 == this.contador) this.button2.setPosition(1300, 0); else {
this.button1.setPosition(-366, 0);
this.button2.setPosition(366, 0);
}
},
update: function(t) {
this.verificaContador();
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "btnCarregarJogo", "btnNovoJogo", "btnOpcoes", "btnPlayCamada1", "btnPlayCamada2", "btnPlayCamada3", "btnPlayCamada4", "btnPlayCamada5", "btnSair", "btnSairSelectFase", "btnQuiz1", "btnQuiz2", "btnQuiz3", "btnQuiz4", "btnQuiz5", "btnAcessoARede", "btnAplicacao", "btnInternet", "btnTesteFinal", "btnTransporte", "btnContFase1", "btnContFase2", "btnContFase3", "btnContFase4", "btnContFase5", "creditroll", "alvo", "logicaFase1-1", "logicaFase1", "logicaFase2", "logicaFase3", "logicaFase4", "logo", "main", "profCamada1", "profCamada2", "profCamada3", "profCamada4", "quizFase1", "quizFase2", "quizFase3", "quizFase4", "quizFase5", "selectStage" ]);