function countdownTimer(duration) {
    let timer = duration;
  
    const interval = setInterval(() => {
      let minutes = Math.floor(timer / 60);
      let seconds = timer % 60;
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      console.log(minutes + ":" + seconds);
  
      timer--;
  
      if (timer < 0) {
        clearInterval(interval);
        console.log("Beeeep! Der Countdown ist abgelaufen!");
      }
    }, 1000);
  }
  
  const duration = parseInt(process.argv[2]);
  
  if (isNaN(duration) || duration <= 0) {
    console.log("Ungültige Eingabe. Die Eingabe muss mindestens eine Sekunde betragen.");
  } else {
    countdownTimer(duration);
  }
  