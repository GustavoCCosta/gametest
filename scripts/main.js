//variáveis globais
var ballonsQtd = 0;
var timeQtd = 1;
var stimeQtd;
var ballonsPowQtd = 0;
var ballonsActive;
var timeId;
//Botões Globais
var ballonsQtdUp;
var ballonsQtdDown;
var timeQtdUp;
var timeQtdDown;
var btnPlay;
var btnCancel;
var lateralPlay;

//Funções de botões
const handleballonsQtdUp = () => {
    getBallons.innerHTML = ++ballonsQtd;
    let ballonDiv = document.createElement('div');
    ballonDiv.classList = 'ballon';
    let ballon = document.createElement('img');
    ballon.src = 'img/balao_azul_pequeno.png';
    ballon.classList = 'ballonImg';
    ballonDiv.appendChild(ballon);
    ballonGrid.appendChild(ballonDiv);
}

const handleballonsQtdDown = () => {
    let gridChild = document.querySelector('.ballon')
    if (gridChild) {
        getBallons.innerHTML = --ballonsQtd;
        ballonGrid.removeChild(gridChild);
    }

}

const handletimeQtdUp = () => {
    getTime.innerHTML = ++timeQtd;
}

const handletimeQtdDown = () => {
    if (timeQtd > 1) {
        getTime.innerHTML = --timeQtd;
    }
}

const handlebtnPlay = () => {
    handleStart();
}

const handlebtnCancel = () => {
    lateralPlay.removeChild(btnCancel);
    lateralPlay.appendChild(btnPlay);
    ballonsPowQtd = '0';
    getBallonsPow.innerHTML = ballonsPowQtd;
    clearInterval(timeId);
    getTime.innerHTML = timeQtd;
    let ballonCancel = document.querySelectorAll('.ballon');
    ballonCancel.forEach(element => {
        ballonGrid.removeChild(element);
    });
    for (let index = 0; index < ballonsQtd; index++) {
        ballonDiv = document.createElement('div');
        ballonDiv.classList = 'ballon';
        ballon = document.createElement('img');
        ballon.src = 'img/balao_azul_pequeno.png';
        ballon.classList = 'ballonImg';
        ballonDiv.appendChild(ballon);
        ballonGrid.appendChild(ballonDiv);
    }
    activateButtons();
    btnPlay.addEventListener('click', handlebtnPlay);
}

//Setup
const handleSetup = () => {
    getBallons = document.getElementById('ballonsQtd'); //Pegando elemento resposável pela quantidade dos balões
    getBallonsPow = document.getElementById('ballonsPowQtd'); //Pegando elemento resposável pela  quantidade dos estourados
    getTime = document.getElementById('timeQtd'); //Pegando elemento resposável pela  quantidade de tempo
    ballonGrid = document.getElementById('gridMainView'); //Pegando elemento resposável pela  grid.
    lateralPlay = document.getElementById('lateralPlay'); // Pegando Elemento resposável pelo play
    stimeQtd = timeQtd;
    //Botões
    ballonsQtdUp = document.getElementById('btnAumentarballonsQtd'); //Pegando elemento resposável por aumentar a quantidade dos balões
    ballonsQtdDown = document.getElementById('btnDiminuirballonsQtd');//Pegando elemento resposável por baixar a quantidade dos balões
    timeQtdUp = document.getElementById('btnAumentartimeQtd');//Pegando elemento resposável por aumentar a quantidade do tempo
    timeQtdDown = document.getElementById('btnDiminuirtimeQtd');//Pegando elemento resposável por baixar a quantidade do tempo
    btnPlay = document.getElementById('btnPlay');//Pegando elemento resposável por Start

    activateButtons();
}

//Seleciona todos os balões e adiciona o listener
const setballonsListener = () => {
    ballonsActive = document.querySelectorAll('.ballonImg');
    ballonsActive.forEach(element => {
        element.addEventListener('click', function handlePow(){
            getBallonsPow.innerHTML = ++ballonsPowQtd;
            element.src = 'img/balao_azul_pequeno_estourado.png';
            element.removeEventListener('click', handlePow);
        });
    });
}

const activateButtons = () => {
    ballonsQtdUp.addEventListener('click', handleballonsQtdUp);
    ballonsQtdDown.addEventListener('click', handleballonsQtdDown);
    timeQtdUp.addEventListener('click', handletimeQtdUp);
    timeQtdDown.addEventListener('click', handletimeQtdDown);
    btnPlay.addEventListener('click', handlebtnPlay);
}

const deactivateButtons = () => {
    ballonsQtdUp.removeEventListener('click', handleballonsQtdUp);
    ballonsQtdDown.removeEventListener('click', handleballonsQtdDown);
    timeQtdUp.removeEventListener('click', handletimeQtdUp);
    timeQtdDown.removeEventListener('click', handletimeQtdDown);
    btnPlay.removeEventListener('click', handlebtnPlay);
}

const setcancelButton = () => {
    //Criar botão cancel
    btnCancel = document.createElement('button');
    btnCancel.classList = 'btnCancel';
    btnCancel.id = 'btnCancel';

    lateralPlay.removeChild(btnPlay);
    lateralPlay.appendChild(btnCancel);

    btnCancel.addEventListener('click',handlebtnCancel);
}

const handleTime = () => {
    if(stimeQtd > 0){
        getTime.innerHTML = --stimeQtd;
    }
}

const handleStart = () => {
    handleSetup();
    setballonsListener();
    deactivateButtons();
    timeId = setInterval(handleTime,1000);
    setcancelButton();
}