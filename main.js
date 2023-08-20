let count = 0
let STR=document.getElementById("str").textContent;
const cn=document.getElementById("counter");

function increment() {
  count = count + 1
  document.getElementById("counter").innerText = count
  if(count>0)
cn.style.color="green"
if(count==0)
cn.style.color="white"

}



function decrement(){
  count = count - 1
  document.getElementById("counter").innerText = count
  if(count<0)
cn.style.color="#BF2838"
  if(count==0)
cn.style.color="white"

  
}

function save() {
  document.getElementById("str").textContent+=count+", ";
  count = 0
  document.getElementById("counter").innerText = count
    cn.style.color = "white"
  
}
