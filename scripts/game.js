var ballonsQtd = 0;
var timeQtd = 1;
const ballonsPowQtd = 0;
var timeId;
var gtimeQtd = timeQtd;
var lballonsQtd;

const handlePopulate = () => {
    ballons = document.getElementById('ballonsQtd');
    ballonsPow = document.getElementById('ballonsPowQtd');
    time = document.getElementById('timeQtd');
    lballonsQtd = ballonsQtd;
    var lballonsPowQtd = ballonsPowQtd;

    ballons.innerHTML = lballonsQtd;
    ballonsPow.innerHTML = lballonsPowQtd;
    time.innerHTML = gtimeQtd;

    ballonGrid = document.getElementById('gridMainView');
    for (let index = 0; index < ballonsQtd; index++) {
        let ballonDiv = document.createElement('div');
        ballonDiv.classList = 'ballon';
        let ballon = document.createElement('img');
        ballon.src = 'img/balao_azul_pequeno.png';
        ballon.id = 'b' + index;
        ballon.addEventListener('click', function handler() {
                ballons.innerHTML = --lballonsQtd;
                ballonsPow.innerHTML = ++lballonsPowQtd;
                ballon.src = 'img/balao_azul_pequeno_estourado.png'
                ballon.removeEventListener('click',handler);
        });
        ballonDiv.appendChild(ballon);
        ballonGrid.appendChild(ballonDiv);
    }
}

const handleReset = () => {
    let ballonGrid = document.getElementById('gridMainView');
    let gridChild = document.querySelectorAll('.ballon');
    clearInterval(timeId);
    gridChild.forEach(element => {
        ballonGrid.removeChild(element);
    });
}

const handleTime = () => {
    
    time.innerHTML = --gtimeQtd;
    if(gtimeQtd < 0){
        console.log('ZERO');
        handleReset();
    }
}

const handleFresh = () => {
    var ballons = document.getElementById('ballonsQtd');
    var time = document.getElementById('timeQtd');
    var ballonsQtdUp = document.getElementById('btnAumentarballonsQtd');
    var ballonsQtdDown = document.getElementById('btnDiminuirballonsQtd');
    var timeQtdUp = document.getElementById('btnAumentartimeQtd');
    var timeQtdDown = document.getElementById('btnDiminuirtimeQtd');

    ballonsQtdUp.addEventListener('click', function handleballonsQtdUp(){
        ballonsQtd++;
        lballonsQtd = ballonsQtd;
        ballons.innerHTML = lballonsQtd;
    });
    ballonsQtdDown.addEventListener('click', function handleballonsQtdDown(){
        if (ballonsQtd > 0) {
            ballonsQtd--;
        }
        lballonsQtd = ballonsQtd;
        ballons.innerHTML = lballonsQtd;
    });
    timeQtdUp.addEventListener('click', function handletimeQtdUp(){
        timeQtd++;
        gtimeQtd = timeQtd;
        time.innerHTML = gtimeQtd;
    });
    timeQtdDown.addEventListener('click', function handletimeQtdDown(){
        if (timeQtd > 1) {
            timeQtd--;
        }
        gtimeQtd = timeQtd;
        time.innerHTML = gtimeQtd;
    });
}

const handleMain = () => {
    handleReset();
    handlePopulate();
    timeId = setInterval(handleTime, 1000);
}