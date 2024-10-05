let gameseq=[];
let userseq=[];
let btns=["red","blue","green","pink"];

let started=false;
let level=0;
let score=0;

let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started!")
        started=true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");}, 250);
    
};
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");}, 250);}


function levelup(){
userseq=[];
level++;
h3.innerText=`Level ${level}`;

let randidx=Math.floor(Math.random()*3);
let randcolor=btns[randidx];
let randbtn=document.querySelector(`.${randcolor}`);
gameseq.push(randcolor);
console.log(gameseq);
gameflash(randbtn);
};

function checkAns(idx){
  
    if(userseq[idx]===gameseq[idx]){
     if(userseq.length==gameseq.length){
        setTimeout(levelup,1000);
     }
    }
    else{
        h3.innerHTML=`Game is over!your score was<b>${level}</b><br>press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        
        
        console.log(score);
        reset();
    }
}

function btnpress(){
    
    let btn =this;
    userflash(btn);
    
    let usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    
    checkAns(userseq.length-1);
};

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
/*function highestscore(){
   let h2=document.querySelector("h2");
    if(level>score){
        h2.innerHTML=`your highest score is<b>${level}</b>`;
    }
    else{
        h2.innerHTML=`your highest score is<b>${score}</b>`;
    }

}*/