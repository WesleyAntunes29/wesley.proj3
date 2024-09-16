const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que você acha sobre as queimadas na amazonia?",
        alternativas: [
            {
                texto: "acho algo necessario!",
                afirmacao: "negativo"
            },
            {
                texto: "acho uma coisa terrivel" ,
                afirmacao: "justo" 
            }

        ]
    },
    {
        enunciado: "voce acha que o desmatamento deve acabar?",
        alternativas: [
            {
                texto: "Não, deve continuar do jeito que está!",
                afirmacao: "negativo"
            },
            {
                texto: "Sim, pois o desmatamento e algo que pode nos prejudicar.",
                afirmacao: "justo"
            }
        ]
    },
    {
        enunciado: "Você é a favor da igualdade ambiental?",
        alternativas: [
            {
                texto: "Não!",
                afirmacao: "negativo"
            },
            {
                texto: "Sim!",
                afirmacao: "justo"
            }

        ]
    },
    {
        enunciado: "Assinale a alternativa que NÃO apresenta uma causa do desmatamento",
        alternativas: [
            {
                texto: "Cultivação de grãos.!",
                afirmacao: "negativo"
            },
            {
                texto: "Conservação dos rios.!",
                afirmacao: "justo"
            }


        ]
    },
    {
        enunciado: "Qual sua opinião final sobre o desmatamento?",
        alternativas: [
            {
                texto: "Na minha opinião, não deveria haver mudança e continuaria da forma que está!",
                afirmacao: "negativo"
            },
            {
                texto:"Na minha opinião, o desmatamento das florestas e campos deve acabar por completo!",
                afirmacao: "justo"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049... se hoje o desmatamento ja esta absurdo , ja podemos imaginar em 2049";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

