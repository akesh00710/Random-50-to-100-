
let min=50;
let max=100;


let b = document.getElementById("click");
b.addEventListener("click",function(){
    let random=Math.floor(Math.random()*(max-min+1))+min;
    document.getElementById("num").textContent=random;
    
})



