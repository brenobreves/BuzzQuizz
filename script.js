////// PAGE 2 ////


// PAGINA 2 Reinicia o quizz que a pessoa selecionou 
function reiniciar() {
    const comecarQuizz = document.querySelector('.reiniciar-quiz');

}

// PAGINA 2 Quando clicado ele volta para o home pagina 1

function voltarHome() {
    const pagina2 = document.querySelector('.pagina2');

    const pag1 = document.querySelector('.pag1');
    pagina2.classList.add('escondido');
    pag1.classList.remove('escondido');
}


// PAGINA 2 Quando a pessoa for selecionar a imagem da pergunta-1

function selecionarResposta1(respota1) {

    // quando a pessoa clicar na umagem desejada ele faz adicionar certo ou errado
    // colocar a cor certa no nome da imagem
    const selecionadoPeloUsuario = respota1.querySelector('.imagem-1');
    selecionadoPeloUsuario.classList.add('selecionado');
    const respostaPergunta1 = respota1.querySelector('.nome-1');
    respostaPergunta1.classList.add('acertou');
    // vai procurar se tem a class selecionado
    const verificandoPrimeira = document.querySelector('.todas-imagem-pergunta-1 .lado-esquerdo-1 .primeira-imagem-1 .selecionado');
    const verificandoSeguda = document.querySelector('.todas-imagem-pergunta-1 .lado-esquerdo-1 .segunda-imagem-1 .selecionado');
    const verificandoTerceira = document.querySelector('.todas-imagem-pergunta-1 .lado-direito-1 .terceira-imagem-1 .selecionado');
    const verificandoQuarta = document.querySelector('.todas-imagem-pergunta-1 .lado-direito-1 .quarta-imagem-1 .selecionado');

    console.log(verificandoPrimeira);
    console.log(verificandoSeguda);
    console.log(verificandoTerceira);
    console.log(verificandoQuarta);
    // verificando a primeira imagem
    if (verificandoPrimeira === null) {
        const adicionarOpacidade1 = verificandoPrimeira.querySelector('.imagem-1');
        adicionarOpacidade1.classList.add('opacidade');
    }/*
    // verificando a segunda imagem
    if (verificandoSeguda == ! null) {
        const adicionarOpacidade2 = erificandoSegud.querySelector('.imagem-1');
        adicionarOpacidade2.classList.add('opacidade')
    }

    // verificando a terceira imagem
    if (verificandoTerceira == ! null) {
        const adicionarOpacidade3 = verificandoTerceira.querySelector('.imagem-1');
        adicionarOpacidade3.classList.add('opacidade')
    }

    // verificando a quarta imagem
    if (verificandoQuarta == ! null) {
        const adicionarOpacidade4 = verificandoQuarta.querySelector('.imagem-1');
        adicionarOpacidade4.classList.add('opacidade')
    }*/

}



////// PAGE 3 ////
let createquizz = {}

//PAGE 3 Sair da página de opções básicas de Quizz e ir para perguntas//
function page312() {
    const page3 = document.querySelector('.page3');
    const page31 = document.querySelector('.page31');
    page3.classList.add('escondido');
    page31.classList.remove('escondido');

}

///PAGE 3 Sair da página de criar perguntas  e  ir para níveis///
function page323() {
    const page31 = document.querySelector('.page31');
    const page32 = document.querySelector('.page32');
    page31.classList.add('escondido');
    page32.classList.remove('escondido');
}

///PAGE 3 Sair da página de Níveis e finalizar o quizz///
function page334() {
    const page32 = document.querySelector('.page32');
    const page33 = document.querySelector('.page33');
    page32.classList.add('escondido');
    page33.classList.remove('escondido');
}

///// PAGE 3 Quizz finalizado, voltar pra home ////
function home() {
    const page33 = document.querySelector('.page33');
    page33.classList.add('escondido');
    const pag1 = document.querySelector('.pag1');
    pag1.classList.remove('escondido');
}

////Libera pergunta 2 /////
function questions32() {
    const questmenu = document.querySelector('.q2');
    const quest = document.querySelector('.qq2');
    questmenu.classList.add('escondido');
    quest.classList.remove('escondido');

}


/////Libera pergunta 3 //////

function questions33() {
    const questmenu = document.querySelector('.q3');
    const quest = document.querySelector('.qq3');
    questmenu.classList.add('escondido');
    quest.classList.remove('escondido');
}




function basicdata3() {
    titlee = document.querySelector('quiztitle3').value;
    img = document.querySelector('.quizimgurl3').value;
    createquizz = {
        title: titlee,
        image: img,
    }
}

function questions3() {
    numdep = document.querySelector('quiznump3').value;
    let questions = "";

}


////// PAGE 3 FIM ////