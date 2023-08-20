let count = 0
let STR=document.getElementById("str").textContent;

function increment() {
  count = count + 1
  document.getElementById("counter").innerText = count
}
function decrement(){
  count = count - 1
  document.getElementById("counter").innerText = count
  
}

function save() {
  document.getElementById("str").textContent+=count+", ";
  count = 0
  document.getElementById("counter").innerText = count
}
