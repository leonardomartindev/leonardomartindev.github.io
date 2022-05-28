import Countdown from "./countdown.js";

const btn = document.querySelector("button")

btn.addEventListener("click", function(){

  const dateInput = document.querySelector(".dateInput").value
  const dateInputFormatado = `"${dateInput}"`

  const dataFormatada = new Date(dateInputFormatado)
  const future = new Countdown(dataFormatada)
  const data = document.querySelectorAll(".data-time")

  function showTime(){
    data.forEach((time, index) => {
      time.innerHTML = future.total[index];
    });
  }

  
  var interval = setInterval(showTime, 1000);
  
})

