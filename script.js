const main = document.createElement("div");
const clock = document.createElement("div");
const houre = document.createElement("div");
const minute = document.createElement("div");
const second = document.createElement("div");
const dotSecond = document.createElement("div");
const dotFirst = document.createElement("div");

main.classList.add("main");
clock.classList.add("clock");
houre.classList.add("houre");
minute.classList.add("minute");
second.classList.add("second");
dotFirst.classList.add("dotfirst");
dotSecond.classList.add("dotSecond");


document.body.insertAdjacentElement("afterbegin", main);
main.insertAdjacentElement("afterbegin", clock);

const addEllementsClass = ell => clock.appendChild(ell);
addEllementsClass(houre);
addEllementsClass(dotFirst);
addEllementsClass(minute);
addEllementsClass(dotSecond);
addEllementsClass(second);
const date = new Date();

const ellementText = {
    houre: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
};

// const ellementText = {
//     houre: 23,
//     minute: 59,
//     second: 59,
// };
const addZero=(number)=>{
    if(number<10){
        number="0"+number;
    }
    
    return number;
}

dotFirst.innerText = ":";
dotSecond.innerText = ":";
houre.innerText = addZero(ellementText.houre);
minute.innerText = addZero(ellementText.minute);
second.innerText = addZero(ellementText.second);



const updateSecond = () => {
    if (ellementText.second === 59) {
        ellementText.second = 0;
        updateMinute();
    }
    else {
        ellementText.second++;

    }
    second.innerText =addZero(ellementText.second) ;
}

const updateMinute = () => {
    if (ellementText.minute === 59) {
        ellementText.minute = 0;
        updateHoure();
    }
    else {
        ellementText.minute++;

    }
    minute.innerText = addZero(ellementText.minute);
}

const updateHoure = () => {
    if (ellementText.houre === 23) {
        ellementText.houre = 0;

    }
    else {
        ellementText.houre++;

    }
    houre.innerText = addZero(ellementText.houre);
}


setInterval(updateSecond, 1000);
