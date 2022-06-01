import Countdown from "./countdown.js";

const criaTimer = document.querySelector(".saveDate");
const limpa = document.querySelector(".limpa");
const data = document.querySelectorAll(".data-time");
const input = document.querySelector(".dateInput");

criaTimer.addEventListener("click", function(){
  input.disabled = true

  let dateInput = document.querySelector(".dateInput").value;
  const dateInputFormatado = `"${dateInput}"`;
  const dataFormatada = new Date(dateInputFormatado);
  const future = new Countdown(dataFormatada);
  
  if(input.value === "") {
    input.disabled = false
    return
  }

  function showTime(){
    data.forEach((time, index) => {
      time.classList.add("cont");
      time.innerHTML = future.total[index]; 
    });    
  }
  
  let intervalo = setInterval(showTime, 1000); 

  showTime();

  limpa.addEventListener("click", function(){
    input.disabled = false
    clearInterval(intervalo);
    data.forEach(timer => {
      document.querySelector(".dateInput").value = "";
      timer.innerHTML = "00";
      timer.classList.remove("cont");
    });
  });

});

