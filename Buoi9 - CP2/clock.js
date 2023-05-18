class Clock {
    $date
    constructor(min, sec) {
        this.$date = new Date(2023, 1, 1, 0, min, sec);
    }

    getSecond() {
        return this.$date.getSeconds();
    }

    getMinute() {
        return this.$date.getMinutes();
    }

    setSecond(second) {
        this.$date.setSeconds(second);
    }

    setMinute(minute) {
        this.$date.setMinutes(minute);
    }

    start = setInterval(
        this.setSecond(1), 1000);

    // start(index) {

    //     console.log(index);
    // }

    stop(index) {
        //  clearInterval(handleStartBtn);
        console.log(index);
    }
}

//----- Create data--------
const clockList = [
    new Clock(2, 3),
    new Clock(4, 59),
    new Clock(10, 8),
    new Clock(1, 19),
    new Clock(0, 0)
];

//------- Code font end ----------
const ol = document.getElementById('clock-list');

for (let index = 0; index < clockList.length; index++) {
    const element = clockList[index];

    const li = document.createElement('li');

    let time = element.$min + ":" + element.$sec;

    const startbtn = document.createElement('button');
    startbtn.innerHTML = "Start";
    startbtn.addEventListener("click", element.start(index));

    const stopbtn = document.createElement('button');
    stopbtn.innerHTML = "Stop";
    stopbtn.addEventListener("click", element.stop(index));

    li.innerHTML = time;
    li.appendChild(startbtn);
    li.appendChild(stopbtn);
    ol.appendChild(li);
}



