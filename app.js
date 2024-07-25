let gameSeq=[];
let userSeq =[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let highscore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(!started){
        console.log("game started");
        started = true;
        levelup();
    }
});

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level is ${level}`;

    // random button choosen
    let ranidx = Math.floor(Math.random()*4);
    let ranColor = btns[ranidx];

    let ranbtn = document.querySelector(`.${ranColor}`);
    // console.log(ranidx);
    // console.log(ranColor);
    // console.log(ranbtn);
    
    gameSeq.push(ranColor);
    console.log(gameSeq);

    btnFlash(ranbtn);

}


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
        }, 250);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup, 1000);
        } 
    }else{
        if(level>highscore){
            highscore = level;
        }
        h2.innerHTML=`Game over : Your Score was <b>${level}</b> and your HighScore is ${highscore} <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150)
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlashBtn(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);



}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function userFlashBtn(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
        }, 250);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq = [];
    level = 0;
}