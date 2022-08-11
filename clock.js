let myName =document.querySelector("#myName");
let myClock =document.querySelector("#myClock");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

displayTime()


myName.innerHTML = prompt("lütfen adınızı giriniz: ")

function displayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    if(hrs<10){
        hrs="0"+hrs;
        hour.innerHTML = hrs;
    } else{
        hour.innerHTML = hrs;
    }
    if(min<10){
        min="0"+min;
        minute.innerHTML = min;
    } else{
        minute.innerHTML = min;
    }
    if(sec<10){
        sec="0"+sec;
        second.innerHTML = sec;
    } else{
        second.innerHTML = sec;
    }
}

setInterval(displayTime,10);