

////// PAGE 3 ////
let createquizz = {}
createquizz.questions = [];
createquizz.questions.answers = [];
createquizz.levels = []

//PAGE 3 Sair da página de opções básicas de Quizz e ir para perguntas//
function page312() {
    const page3 = document.querySelector('.page3');
    const page31 = document.querySelector('.page31');
    page3.classList.add('escondido');
    page31.classList.remove('escondido');
    basicdata3();
    window.scrollTo(0, 0);

}
/////
///PAGE 3 Sair da página de criar perguntas  e  ir para níveis///
function page323() {
    const page31 = document.querySelector('.page31');
    const page32 = document.querySelector('.page32');
    page31.classList.add('escondido');
    page32.classList.remove('escondido');
    window.scrollTo(0, 0);
    questions3();
}
/////
///PAGE 3 Sair da página de Níveis e finalizar o quizz///
function page334() {
    const page32 = document.querySelector('.page32');
    const page33 = document.querySelector('.page33');
    page32.classList.add('escondido');
    page33.classList.remove('escondido');
    window.scrollTo(0, 0);
    levels3();
}
//////
///// PAGE 3 Quizz finalizado, voltar pra home ////
function home() {
    const page33 = document.querySelector('.page33');
    page33.classList.add('escondido');
    const pag1 = document.querySelector('.pag1');
    pag1.classList.remove('escondido');
    window.scrollTo(0, 0);
}
/////
////ABRE COISAS COLAPSADAS /////
function questions32(question) {
    const questmenu = question.querySelector('.questions312');
    const quest = question.querySelector('.questions31');
    questmenu.classList.add('escondido');
    quest.classList.remove('escondido');

}
//////


function basicdata3() {
    let titlee = document.querySelector('.quiztitle3').value;
    let img = document.querySelector('.quizimgurl3').value;
    let numques = document.querySelector('.quiznump3').value;
    let numlev = document.querySelector('.quizlev3').value;
    let box = document.querySelector('.box31');
    let box2 = document.querySelector('.box32')
    for (i = 2; i <= numques; i++) {
        box.innerHTML += '<div onclick="questions32(this)"> <div class="questions312"> <div class="title312">Pergunta ' + i + '</div><ion-icon name="create-outline"></ion-icon> </div> <div class="questions31 escondido" id="' + i + '"> <div class="setor"> <div class="title31">Pergunta ' + i + '</div> <input type="text" class="qtitle" placeholder="Texto da pergunta"> <input type="text" class="qcolor" placeholder="Cor de fundo da pergunta"> </div> <div class="setor right"> <div class="title31">Resposta correta</div> <input type="text" class="qansw3" placeholder="Resposta correta"> <input type="text" class="qimg3" placeholder="URL da imagem"> </div> <div class="setor wrong1"> <div class="title31">Respostas incorretas</div> <input type="text" class="qansw3" placeholder="Resposta incorreta 1"> <input type="text" class="qimg3" placeholder="URL da imagem 1"> </div> <div class="setor wrong2"> <input type="text" class="qansw3" placeholder="Resposta incorreta 2"> <input type="text" class="qimg3" placeholder="URL da imagem 2"> </div> <div class="setor wrong3"> <input type="text" class="qansw3" placeholder="Resposta incorreta 3"> <input type="text" class="qimg3" placeholder="URL da imagem 3"> </div> </div>'
    }
    box.innerHTML += '<button onclick="page323()" class="proceed3">Prosseguir pra criar níveis</button>'
    for (i = 2; i <= numlev; i++) {
        box2.innerHTML += '<div onclick="questions32(this)"> <div class= "questions312"> <div class="title312">Nível ' + i + '</div><ion-icon name="create-outline"></ion-icon> </div> <div class="questions31 escondido" id="1' + i + '"> <div class="setor"> <div class="title31">Nível '+i+'</div> <input type="text" class="levtitle" placeholder="Título do nível"> <input type="text" class="acertitle" placeholder="% de acerto mínima"> <input type="text" class="levimg" placeholder="URL da imagem do nível"> <input type="text" class="levdesc" placeholder="Descrição do nível"> </div> </div>';
    }
    box2.innerHTML += '<button onclick="page334()" class="proceed3">Finalizar Quizz</button>'
    createquizz.title = titlee;
    createquizz.image = img;
}

function questions3() {
    let numques = document.querySelector('.quiznump3').value;
    let boxq = document.querySelector('.box31');
    let titlee = boxq.querySelector('.qtitle').value;
    let cor = boxq.querySelector('.qcolor').value;
    createquizz.questions.title = titlee;
    createquizz.questions.color = cor;

    let answers = [];
    for (i = 1; i <= numques; i++) {
        let question = document.getElementById(i);
        let asw1 = question.querySelector('.right');
        let qasw1 = asw1.querySelector('.qansw3').value;
        let iasw1 = asw1.querySelector('.qimg3').value;

        let asw2 = question.querySelector('.wrong1');
        let qasw2 = asw1.querySelector('.qansw3').value;
        let iasw2 = asw1.querySelector('.qimg3').value;

        let asw3 = question.querySelector('.wrong2');
        let qasw3 = asw1.querySelector('.qansw3').value;
        let iasw3 = asw1.querySelector('.qimg3').value;

        let asw4 = question.querySelector('.wrong3');
        let qasw4 = asw1.querySelector('.qansw3').value;
        let iasw4 = asw1.querySelector('.qimg3').value;
        let resposta = {}
        resposta.text = qasw1;
        resposta.image = iasw1;
        resposta.iscorrect = true;
        createquizz.questions.answers[0] = resposta;
        resposta.text = qasw2;
        resposta.image = iasw2;
        resposta.iscorrect = false;
        createquizz.questions.answers[1] = resposta;
        resposta.text = qasw3;
        resposta.image = iasw3;
        resposta.iscorrect = false;
        createquizz.questions.answers[2] = resposta;
        resposta.text = qasw4;
        resposta.image = iasw4;
        resposta.iscorrect = false;
        createquizz.questions.answers[3] = resposta;
        let questinfo = {};
        questinfo.title = titlee;
        questinfo.color = cor;


    }
}

function levels3() {
    let numlev = document.querySelector('.quizlev3').value;
    for (i = 1; i <= numlev; i++) {
        let level = document.getElementById(i+10);
        let levtitlee = level.querySelector('.levtitle').value;
        let levporc = level.querySelector('.acertitle').value;
        let levimg = level.querySelector('.levimg').value;
        let levdesc = level.querySelector('.levdesc').value;
        let resposta = {}
        resposta.title = levtitlee;
        resposta.image = levimg;
        resposta.text = levdesc;
        resposta.minValue = levporc;
        createquizz.levels[i] =resposta;
    }
    console.log(createquizz);
}
////// PAGE 3 FIM ////