import { Clock, clockList } from "./clock.js";

//------- Code font end ----------
const ol = document.getElementById('clock-list');
function setFontend() {
    for (let index = 0; index < clockList.length; index++) {
        let element = clockList[index];

        const li = document.createElement('li');

        let time = element.date.getMinutes() + ":" + element.date.getSeconds();

        const startbtn = document.createElement('button');
        startbtn.innerHTML = "Start";
        startbtn.addEventListener("click", element.start);

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
        clockList[index] = new Clock(index, 0, 0);
    }
    ol.innerHTML="";
    setFontend();
}
const stopAllBtn = document.getElementById('stop-all');
stopAllBtn.addEventListener("click", stopAll, false);