////// TOKEN //////
axios.defaults.headers.common['Authorization'] = '9maaDDkKFQ1saSPY3udlpWmT';

////// PAGE 1 ////
function page1to3() {
    const page1 = document.querySelector('.pag1');
    const page3 = document.querySelector('.page3');
    page1.classList.add('escondido');
    page3.classList.remove('escondido');
}

////// PAGE 1 FIM ////

// PAGINA 2 Quando a pessoa para selecionar a imagem da pergunta-1

// obter o quizz do servidor

let quizDoServidor = axios.get('https://mock-api.driven.com.br/api/vm/buzzquizz/quizzes/55');
//console.log(quizDoServidor.data.length);
quizDoServidor.then(deuCerto);
//quizDoServidor.catch(naoDeuCerto);
let opacidade;
let verificar;

function deuCerto(resposta) {
    opacidade = resposta.data.questions;
    console.log(opacidade);
    let limpar = document.querySelector('.interacao');
    limpar.innerHTML = '';

    limpar.innerHTML += `
            <div class="banner-imagem" >
                <img src="${resposta.data.image}" alt=""> 
                <p>${resposta.data.title}</p>
            </div>
            
    `

    for (let n = 0; n < resposta.data.questions.length; n++) {

        // eu vou ver o answers.length e vou fazer um teste
        let quantasImagens = resposta.data.questions[n].answers.length;
        console.log(quantasImagens);

         // se answers.length for = 2 so primeira e segunda
        if(quantasImagens === 2 ){
            limpar.innerHTML += `
        <div class=" pergunta pergunta${[n]}">
                <div class="pergunta-1">
                    <p>${resposta.data.questions[n].title}</p>
                </div>
                <div class="todas-imagem-pergunta">
                    <div class="lado-esquerdo">
                        <div class="primeira-imagem " onclick="selecionarResposta(this)">
                            <img class="imagem" src="${resposta.data.questions[n].answers[0].image}" > 
                            <p class="nome ">${resposta.data.questions[n].answers[0].text}</p>
                        </div>
                        <div class="segunda-imagem" onclick="selecionarResposta(this)">
                            <img class="imagem" src="${resposta.data.questions[n].answers[1].image}" > 
                            <p class="nome ">${resposta.data.questions[n].answers[1].text}</p>
                        </div>
                    </div>
                </div>
            </div>`

         // se answers.length  for = 3 so 1 segunda segunda e terceira
        } else if(quantasImagens === 3){
            limpar.innerHTML += `
            <div class=" pergunta pergunta${[n]}">
                    <div class="pergunta-1">
                        <p>${resposta.data.questions[n].title}</p>
                    </div>
                    <div class="todas-imagem-pergunta">
                        <div class="lado-esquerdo">
                            <div class="primeira-imagem " onclick="selecionarResposta(this)">
                                <img class="imagem" src="${resposta.data.questions[n].answers[0].image}" > 
                                <p class="nome ">${resposta.data.questions[n].answers[0].text}</p>
                            </div>
                            <div class="segunda-imagem" onclick="selecionarResposta(this)">
                                <img class="imagem" src="${resposta.data.questions[n].answers[1].image}" > 
                                <p class="nome ">${resposta.data.questions[n].answers[1].text}</p>
                            </div>
                        </div>
                        <div class="lado-direito">
                            <div class="terceira-imagem" onclick="selecionarResposta(this)">
                                <img class="imagem" src="${resposta.data.questions[n].answers[2].image}" > 
                                <p class="nome ">${resposta.data.questions[n].answers[2].text}</p>
                            </div>
                        </div>
                    </div>
            </div>
                            `
        } else if(quantasImagens === 4){
       
        limpar.innerHTML += `
        <div class=" pergunta pergunta${[n]}">
                <div class="pergunta-1">
                    <p>${resposta.data.questions[n].title}</p>
                </div>
                <div class="todas-imagem-pergunta">
                    <div class="lado-esquerdo">
                        <div class="primeira-imagem " onclick="selecionarResposta(this)">
                            <img class="imagem" src="${resposta.data.questions[n].answers[0].image}" > 
                            <p class="nome ">${resposta.data.questions[n].answers[0].text}</p>
                        </div>
                        <div class="segunda-imagem" onclick="selecionarResposta(this)">
                            <img class="imagem" src="${resposta.data.questions[n].answers[1].image}" > 
                            <p class="nome ">${resposta.data.questions[n].answers[1].text}</p>
                        </div>
                    </div>
                    <div class="lado-direito">
                        <div class="terceira-imagem" onclick="selecionarResposta(this)">
                            <img class="imagem" src="${resposta.data.questions[n].answers[2].image}" > 
                            <p class="nome ">${resposta.data.questions[n].answers[2].text}</p>
                        </div>
                        <div class="quarta-imagem" onclick="selecionarResposta(this)">
                            <img class="imagem" src="${resposta.data.questions[n].answers[3].image}" > 
                            <p class="nome ">${resposta.data.questions[n].answers[3].text}</p>
                        </div>
                    </div>
                </div>
        </div>`
    }
}
}



function selecionarResposta(respota1) {

    debugger;
    // quando a pessoa clicar na imagem desejada ele faz adicionar certo ou errado
    // colocar a cor certa no nome da imagem
        const selecionadoPeloUsuario = respota1.querySelector('.imagem');
        selecionadoPeloUsuario.classList.add('selecionado');
        const respostaPergunta1 = respota1.querySelector('.nome');
        respostaPergunta1.classList.add('acertou');
        respota1.onclick = null
        // vai procurar se tem a classe selecionada
        // debugger;
        const verificarQualPergunta1 = document.querySelector('.pergunta');
        console.log(verificarQualPergunta1);


        const verificandoPrimeira = document.querySelector('.primeira-imagem .selecionado');
        const verificandoSeguda = document.querySelector(' .segunda-imagem .selecionado');
        const verificandoTerceira = document.querySelector(' .terceira-imagem .selecionado');
        const verificandoQuarta = document.querySelector('.quarta-imagem .selecionado');

        // verificando a primeira imagem
        if (verificandoPrimeira === null) {
            const adicionarOpacidade1 = document.querySelector('.primeira-imagem');
            console.log(adicionarOpacidade1);
            adicionarOpacidade1.classList.add('opacidade');
            // desativa o on click
            adicionarOpacidade1.onclick = null;
        }
        // verificando a segunda imagem
        if (verificandoSeguda === null) {
            const adicionarOpacidade2 = document.querySelector('.segunda-imagem ');
            adicionarOpacidade2.classList.add('opacidade');
            // desativa o on click
            adicionarOpacidade2.onclick = null;
        }
        // verificando a terceira imagem
        if (verificandoTerceira === null) {
            const adicionarOpacidade3 = document.querySelector('.terceira-imagem');
            adicionarOpacidade3.classList.add('opacidade');
            // desativa o on click
            adicionarOpacidade3.onclick = null;
        }
        // verificando a quarta imagem
        if (verificandoQuarta === null) {
            const adicionarOpacidade4 = document.querySelector('.quarta-imagem');
            adicionarOpacidade4.classList.add('opacidade');
            // desativa o on click
            adicionarOpacidade4.onclick = null;
        }
    }

function voltarHome(){
    const verSeTemEsconcido = document.querySelector('.pagina2');
    verSeTemEsconcido.classList.add('escondido');
    const pagina21 = document.querySelector('.pag1');
    pagina21.classList.remove('escondido');
}



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
        box2.innerHTML += '<div onclick="questions32(this)"> <div class= "questions312"> <div class="title312">Nível ' + i + '</div><ion-icon name="create-outline"></ion-icon> </div> <div class="questions31 escondido" id="1' + i + '"> <div class="setor"> <div class="title31">Nível ' + i + '</div> <input type="text" class="levtitle" placeholder="Título do nível"> <input type="text" class="acertitle" placeholder="% de acerto mínima"> <input type="text" class="levimg" placeholder="URL da imagem do nível"> <input type="text" class="levdesc" placeholder="Descrição do nível"> </div> </div>';
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
        let level = document.getElementById(i + 10);
        let levtitlee = level.querySelector('.levtitle').value;
        let levporc = level.querySelector('.acertitle').value;
        let levimg = level.querySelector('.levimg').value;
        let levdesc = level.querySelector('.levdesc').value;
        let resposta = {}
        resposta.title = levtitlee;
        resposta.image = levimg;
        resposta.text = levdesc;
        resposta.minValue = levporc;
        createquizz.levels[i] = resposta;
    }
    console.log(createquizz);
}
////// PAGE 3 FIM ///