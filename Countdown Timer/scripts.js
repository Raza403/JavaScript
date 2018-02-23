let countdown;
const displayTime = document.querySelector('.display__time-left');
function timer (seconds){
     const now = Date.now();
     const then = now + seconds*1000;
     displayTimeLeft(seconds);
    countDown = setInterval(()=> {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        //Check if we should stop it
        if (secondsLeft < 0){
            clearInterval(countDown);
            return;
        }
        displayTimeLeft(secondsLeft);
     },1000)
}

function displayTimeLeft(seconds){
    const mins = Math.floor(seconds/60)
    const secs = seconds%60;
    displayTime.textContent =`${mins}:${secs < 10 ? '0' : ''}${secs}`;
    document.title = Display;
}