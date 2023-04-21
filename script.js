

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