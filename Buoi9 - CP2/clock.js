class Clock {
    constructor(index, min, sec) {
        this.started = false;
        this.index = index;
        this.date = new Date(0, 0, 0, 0, min, sec);
        this.intervalId = null;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.date.setSeconds(this.date.getSeconds() + 1);
            this.changeGUI();
        }, 1000);
        this.started = true;
    }

    stop() {
        clearInterval(this.intervalId);
        this.started = false;
    }

    changeGUI() {
        const li = document.getElementById(this.index);
        li.innerHTML = `<div>${this.date.getMinutes()}:${this.date.getSeconds()}</div>`
            + `<button onclick="start(${this.index})">Start</button>`
            + `<button onclick="stop(${this.index})">Stop</button>`;

    }
}

//----- Create data--------
const clockList = [
    new Clock(0, 12, 3, false),
    new Clock(1, 1, 3, false),
    new Clock(2, 0, 0, false),
    new Clock(3, 9, 59, false),
    new Clock(4, 0, 55, false),
];

//------- Functions ----------
function start(index) {
    if (clockList[index].started == false)
        clockList[index].start();
}

function stop(index) {
    if (clockList[index].started == true) {
        clockList[index].stop();
        clockList[index] = new Clock(index, 0, 0);
        clockList[index].changeGUI();
    }
}

//--------- Code fontend ------------
const ol = document.getElementById('clock-list');
ol.innerHTML = "";

for (let index = 0; index < clockList.length; index++) {
    let element = clockList[index];
    setFontend(element);

}
function setFontend(clock) {
    const li = document.createElement('li');
    li.id = clock.index;

    let time = document.createElement('div');
    time.innerHTML = `${clock.date.getMinutes()}:${clock.date.getSeconds()}`;

    li.appendChild(time);
    li.innerHTML += `<button onclick="start(${clock.index})">Start</button>`;
    li.innerHTML += `<button onclick="stop(${clock.index})">Stop</button>`;
    ol.appendChild(li);
}

//----- Stop all ---------
function stopAll() {
    for (let index = 0; index < clockList.length; index++) {
        stop(index);
    }
}



