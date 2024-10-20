let difficulty;
let myTimer;
let duration = 20;

let correct = 0;
let incorrect = 0;

const checkAns = function () {
    let x = Number(document.getElementById('x').innerHTML);
    let y = Number(document.getElementById('y').innerHTML);
    let ans = x + y;

    let userAns = document.getElementById('uAns').value;
    if (ans == userAns) {
        correct++;
    } else {
        incorrect++;
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
        case 'easy': difficulty = 10;
            break;
        case 'medium': difficulty = 100;
            break;
        case 'hard': difficulty = 1000;
            break;
    }

    generateQuestion();
    myTimer = setInterval('countdown()', 1000);
}

const generateQuestion = function () {
    let x = Math.floor(Math.random() * difficulty);
    let y = Math.floor(Math.random() * difficulty);

    document.getElementById('x').innerHTML = x;
    document.getElementById('y').innerHTML = y;
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
}

document.getElementById("startGame").addEventListener("click", startQuiz);

document.getElementById("checkAnswer").addEventListener("click", checkAns);