stopwatch

let isStop = true;
let s = 0;
let min = 0;
let hr = 0;
let timeInterval; 
let elapsedTime = 0;
let lapsTimes=[];



function start(){
    
    if(isStop == true){
        isStop = false;
        timer();
    }
}

function timer(){
    
    if(isStop == false){
       s = parseInt(s);
       min = parseInt(min);
       hr = parseInt(hr);
        s++;
        if(s == 60){
            s= 0;
            min++;
        }

        if( min == 60){
            min = 0;
            hr++;
        }

        if(s<10){
            s ="0"+s;
        }

        if(min<10){
            min ="0"+min;
        }

        if(hr<10){
            hr ="0"+hr;
        }

        timer.innerHTML = s
       stopwatch.innerHTML = hr +" : " + min + " : " + s;
        setTimeout(timer,1000)
    }
}

function stop(){
    isStop = true;
}

function reset(){
    isStop =true;
    s=0;
    min=0;
    hr=0;
    lapsTimes = [];
    document.getElementById("stopwatch").innerHTML = "00 : 00 : 00";
    document.getElementById("lap").innerHTML = "";

}


function lap() {
    const currentLapTime = hr + " : " + min + " : " + s;
    lapsTimes.push(currentLapTime);

    const lapElement = document.createElement('div');
    lapElement.classList.add('lap');
    lapElement.textContent = `Lap ${lapsTimes.length}: ${currentLapTime}`;
    document.getElementById("laps").appendChild(lapElement);
}
