import Countdown from "./countdown.js";

const criaTimer = document.querySelector(".saveDate")
const limpa = document.querySelector(".limpa")
const data = document.querySelectorAll(".data-time")



  criaTimer.addEventListener("click", function(){
    let dateInput = document.querySelector(".dateInput").value
    const dateInputFormatado = `"${dateInput}"`
    
    const dataFormatada = new Date(dateInputFormatado)
    const future = new Countdown(dataFormatada)
    
    let intervalo = setInterval(showTime, 1000); 
    function showTime(){
      
      data.forEach((time, index) => {
        time.classList.add("cont")
        time.innerHTML = future.total[index]; 
      });    
  }

    data.forEach(timer =>{
      if(timer.classList.contains("cont")){
        clearInterval(intervalo)
      }
    })

  showTime()



  limpa.addEventListener("click", function(){
    clearInterval(intervalo)
    data.forEach(timer => {
      document.querySelector(".dateInput").value = ""
      timer.innerHTML = "00"
      timer.classList.remove("cont")
    })
  })

})

