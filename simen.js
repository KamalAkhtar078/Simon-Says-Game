let gameSeq=[];
let userSeq=[];

let btns=["red","yellow","green","purple"];

let started=false;
let level=0;
let higest=1;

let h2=document.querySelector("h2");
let h3=document.querySelector("h3");

document.addEventListener("keypress", function () {
    if(started==false){
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },400);
}

function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(function() {
        btn.classList.remove("user-flash");
    },400);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    let randomIdx=Math.floor(Math.random()*3);
    let randColor=btns[randomIdx];
    let randombtn1 =document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    //random button chose 
    gameFlash(randombtn1);
}

function checkAns(idx){
    // let idx=level-1;

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        h2.innerHTML=`Game over! Your score was <b>${level}</b>  </br> press any key to start.`;
        if(level>higest){
            higest=level;
        } h3.innerHTML=`Highest score is ${higest}`;
        document.querySelector("body").style.backgroundColor='red';
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor='white';
        },150);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;

}