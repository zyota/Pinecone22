let rootElement = document.getElementById("root");
let minute = 0;
let hour = 0;
let i = 0;
let myInterval = setInterval(function () {
  i++;
  if (i == 60) {
    minute++;
    i = 0;
    if (minute == 60) {
      hour++;
      minute = 0;
      if (hour == 24) {
        minute = 0;
        i = 0;
        hour = 0;
      }
    }
  }
  rootElement.innerText = `${hour}:${minute}:${i}`;
  if (i == 60) {
    clearInterval(myInterval);
  }
}, 1);
