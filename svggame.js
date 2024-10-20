let eventData = 0;
let myTimer;
let duration = 20;

const setTimer = function () {
    myTimer = setInterval('countdown()', 1000);
}

const updateEvent = function () {
    eventData++;
    let hitsObj = document.getElementById("hits");
    hitsObj.textContent = `events: ${eventData}`;
}

const createObject = function (objX, objY, objW, objH) {
    const rectArea = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rectArea.setAttribute('width', objW);
    rectArea.setAttribute('height', objH);
    rectArea.setAttribute('x', objX);
    rectArea.setAttribute('y', objY);

    let color;
    switch (Math.floor(Math.random() * 4)) {
        case 1:
            color = "red";
            break;
        case 2:
            color = "purple";
            break;
        case 3:
            color = "blue";
            break;
        default:
            color = "red";
            break;
    }

    rectArea.setAttribute('id', `gameObj`);
    rectArea.setAttribute('class', `${color}`);
    document.getElementById("gArea").appendChild(rectArea);
    rectArea.addEventListener("click", eventTrigger);

    const animation = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
    switch (Math.floor(Math.random() * 3)) {
        case 1:
            animation.setAttribute('attributeName', 'cx')
            break;
        case 2:
            animation.setAttribute('attributeName', 'cy')
            break;
        default:
            animation.setAttribute('attributeName', 'cx')
            break;
    }

    animation.setAttribute('begin', '0s')
    animation.setAttribute('dur', '10s')
    animation.setAttribute('from', '50')

    switch (Math.floor(Math.random() * 3)) {
        case 1:
            animation.setAttribute('to', '90%')
            break;
        case 2:
            animation.setAttribute('to', '0%')
            break;
        default:
            animation.setAttribute('to', '90%')
            break;
    }

    animation.setAttribute('repeatCount', 'indefinite')
    document.getElementById("gameObj").appendChild(animation);

}

const eventTrigger = function (e) {
    updateEvent();
    e.target.remove();

    objW = Math.floor(Math.random() * 61) + 40;
    objH = Math.floor(Math.random() * 61) + 40;
    objX = Math.floor(Math.random() * 696) + objW;
    objY = Math.floor(Math.random() * 346) + objH;

    createObject(objX, objY, objW, objH);
}

const countdown = function () {
    duration--;
    if (duration >= 0) {
        document.getElementById('timer').textContent = `Time Remaining: ${duration} seconds`;
    } else {
        stopTimer();
    }
}

const stopTimer = function () {
    clearInterval(myTimer);
    document.getElementById('gameObj').style.display = 'none';
    document.getElementById('button').style.display = 'initial';
    document.getElementById('restart').style.display = 'initial';
    document.getElementById('button').addEventListener("click", restart);
    document.getElementById('restart').addEventListener("click", restart);
}

const restart = function () {
    eventData = 0;
    let hitsObj = document.getElementById("hits");
    hitsObj.textContent = `events: ${eventData}`;

    setTimer();
    duration = 20;
    document.getElementById('gameObj').style.display = 'initial';
    document.getElementById('button').style.display = 'none';
    document.getElementById('restart').style.display = 'none';

}

let objW = Math.floor(Math.random() * 61) + 40;
let objH = Math.floor(Math.random() * 61) + 40;
let objX = Math.floor(Math.random() * 801) - objW;
let objY = Math.floor(Math.random() * 451) - objH;

createObject(objX, objY, objW, objH);