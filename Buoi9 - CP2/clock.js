// class Clock {
//     $date
//     constructor(min, sec) {
//         this.$date = new Date(2023, 1, 1, 0, min, sec);
//     }

//     getSecond() {
//         return this.$date.getSeconds();
//     }

//     getMinute() {
//         return this.$date.getMinutes();
//     }

//     setSecond(second) {
//         this.$date.setSeconds(second);
//     }

//     setMinute(minute) {
//         this.$date.setMinutes(minute);
//     }
//     handleStartBtn = setInterval(this.start, 1000);
//     start() {
//         this.setSecond(this.getSecond() + 1);
//     }

//     stop() {
//         clearInterval(handleStartBtn);
//         this.setSecond(0);
//         this.setMinute(0);
//     }
// }
//----- Create data--------
const clockList = [
    { "index": 1, "date": new Date(2023, 1, 1, 0, 2, 3) },
    { "index": 1, "date": new Date(2023, 1, 1, 0, 2, 3) },
    { "index": 1, "date": new Date(2023, 1, 1, 0, 2, 3) },
    { "index": 1, "date": new Date(2023, 1, 1, 0, 2, 3) }
];

//-------- Start ------------
const start = setInterval(function () {
    const element = clockList.filter(clock => clock.index == 0);
    console.log(element);
    element.getSeconds
}, 1000);

//------- Code font end ----------
const ol = document.getElementById('clock-list');
function setFontend() {
    for (let index = 0; index < clockList.length; index++) {
        const element = clockList[index];

        const li = document.createElement('li');

        let time = element.getMinute() + ":" + element.getSecond();

        const startbtn = document.createElement('button');
        startbtn.innerHTML = "Start";
        startbtn.addEventListener("click", element.handleStartBtn);

        const stopbtn = document.createElement('button');
        stopbtn.innerHTML = "Stop";
        stopbtn.addEventListener("click", element.stop);

        li.innerHTML = time;
        li.appendChild(startbtn);
        li.appendChild(stopbtn);
        ol.appendChild(li);
    }
}

setFontend();

//----- Stop all ---------
function stopAll() {
    for (let index = 0; index < clockList.length; index++) {
        clockList[index] = new Clock(0, 0);
    }
    setFontend();
}


