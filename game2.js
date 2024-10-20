let difficulty;
let myTimer;
let duration;

let correct = 0;
let incorrect = 0;

const checkAns = function () {
    let x = Number(document.getElementById('x').innerHTML);
    let y = Number(document.getElementById('y').innerHTML);
    let calc = document.getElementById('calc').innerHTML;
    let ans

    switch (calc) {
        case `+`:
            ans = x + y;
            break;
        case `-`:
            ans = x - y;
            break;
        case `x`:
            ans = x * y;
            break;
        default:
            ans = x + y;
            break;
    }

    let userAns = document.getElementById('uAns').value;
    if (ans == userAns) {
        correct++;
        document.getElementById('list').innerHTML += `<li class ='correct'>${x} ${calc} ${y} = ${ans} (CORRECT)</li>`;
    } else {
        incorrect++;
        document.getElementById('list').innerHTML += `<li class ='wrong'>${x} ${calc} ${y} = ${ans} (WRONG)</li>`;
    }

    document.getElementById('uAns').value = "";
    document.getElementById('correct').innerHTML = correct;
    document.getElementById('incorrect').innerHTML = incorrect;

    generateQuestion();
}

const startQuiz = function () {
    document.getElementById('start').style.display = 'none';
    document.getElementById('game').style.display = 'initial';

    let difficultySelect = document.getElementById('difficulty');

    let difficultyStr = "";
    for (let i = 0; i < difficultySelect.length; i++) {
        if (difficultySelect[i].selected) {
            difficultyStr = difficultySelect[i].value;
            break;
        }
    }

    switch (difficultyStr) {
        case 'easy': difficulty = 10; duration = 20;
            document.getElementById('timer').innerHTML = duration;
            break;
        case 'medium': difficulty = 100; duration = 40;
            document.getElementById('timer').innerHTML = duration;
            break;
        case 'hard': difficulty = 1000; duration = 60;
            document.getElementById('timer').innerHTML = duration;
            break;
    }

    generateQuestion();
    myTimer = setInterval('countdown()', 1000);
}

const generateQuestion = function () {
    let x = Math.floor(Math.random() * difficulty);
    let y = Math.floor(Math.random() * difficulty);
    let calc = Math.floor(Math.random() * 4);

    document.getElementById('x').innerHTML = x;
    document.getElementById('y').innerHTML = y;

    switch (calc) {
        case 1:
            document.getElementById('calc').innerHTML = `+`;
            break;
        case 2:
            document.getElementById('calc').innerHTML = `-`;
            break;
        case 3:
            document.getElementById('calc').innerHTML = `x`;
            break;
        default:
            document.getElementById('calc').innerHTML = `+`;
            break;
    }
}

const countdown = function () {
    duration--;
    if (duration >= 0) {
        document.getElementById('timer').innerHTML = duration;
    } else {
        stopTimer();
    }
}

const stopTimer = function () {
    clearInterval(myTimer);
    document.getElementById('qs').style.display = 'none';
    document.getElementById('log').style.display = 'initial';
}

document.getElementById("startGame").addEventListener("click", startQuiz);

document.getElementById("checkAnswer").addEventListener("click", checkAns);