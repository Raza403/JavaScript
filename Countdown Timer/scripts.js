//Setting all variables
const time = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
let countdown;
// Implementing all functions
function timer(seconds) {
  //Stop any previous running timer
  clearInterval(countdown);
  //Time stamp of now
  const now = Date.now();
  //Time to end
  const then = now + seconds * 1000;
  displayEndTime(then);
  displayTimeLeft(seconds);
  
  countdown = setInterval(()=>{
    const timeLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop it
    if (timeLeft <= 0){
      clearInterval(countdown);
    }
    //display it
    displayTimeLeft(timeLeft);
  },1000);

}
//Countdown
function displayTimeLeft(seconds){
  const mins = Math.floor(seconds/60);
  const secs = seconds%60;
  const display = `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  time.textContent = display;
  document.title = display;
}
//End time
function displayEndTime(timeStamp){
  const end = new Date(timeStamp);
  const mins = end.getMinutes();
  let hours = end.getHours();
  if(hours > 12){hours -= 12}
  const secs = end.getSeconds();
  endTime.textContent = `Be Back At ${hours < 10 ? "0":""}${hours}:${mins < 10 ? "0":""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
}
function startTimer (){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const seconds = (this.minutes.value) * 60;
  timer(seconds);
})
buttons.forEach(button => button.addEventListener('click', startTimer));