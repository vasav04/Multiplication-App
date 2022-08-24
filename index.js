const num1=Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const quesele=document.getElementById("question");
const inputele=document.getElementById("input");
const scoreele=document.getElementById("score");
const formele=document.getElementById("form");
quesele.innerText=`What is ${num1}  multiply by ${num2}`;
const correctans=num1*num2;
let score=JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreele.innerText=`score:${score}`;
formele.addEventListener("submit",()=>{
    const userans=+inputele.value;
    if(userans===correctans){
        score++;
        updatelocalstorage();
    }
    else{
        score--;
        updatelocalstorage();
    }
});
function updatelocalstorage(){
    localStorage.setItem("score",JSON.stringify(score));
}