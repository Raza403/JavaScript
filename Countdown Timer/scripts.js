function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  
  setInterval(()=>{
    const timeLeft = Math.round((then - Date.now()) / 1000);
    if (timeLeft <= 0){
      
    }
    console.log(timeLeft);
  },1000);

}