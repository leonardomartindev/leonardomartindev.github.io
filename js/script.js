import Countdown from "./countdown.js";

const criaTimer = document.querySelector(".saveDate");
const limpa = document.querySelector(".limpa");
const data = document.querySelectorAll(".data-time");
const input = document.querySelector(".dateInput");

criaTimer.addEventListener("click", function(){
  input.disabled = true

  let date = new Date()
  let ano = date.getFullYear()
  let mes = date.getMonth() + 1
  let mesF = mes < 10 ? "0" + mes : mes
  let dia = date.getDate()
  let diaF = dia < 10 ? "0" + dia : dia
  let formata = `${ano}-${mesF}-${diaF}`
  if(input.value <= formata){
    window.alert("Data deve ser maior que o dia atual")
    input.disabled = false
  } else{

    
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
}
});


  
  

