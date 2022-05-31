import Countdown from "./countdown.js";

const btn = document.querySelector("button")
const data = document.querySelectorAll(".data-time")


  btn.addEventListener("click", function(){
    const dateInput = document.querySelector(".dateInput").value
    const dateInputFormatado = `"${dateInput}"`

    const dataFormatada = new Date(dateInputFormatado)
    const future = new Countdown(dataFormatada)
    

    let interval = setInterval(function(){
      interval
        data.forEach((time, index) => {
          time.innerHTML = future.total[index];    
        });
      }, 1000);
      
  })

