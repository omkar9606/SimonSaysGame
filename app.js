let gameSeq=[];
let userSeq=[];

let btns=["yellow", "red", "purple", "green"];
let started=false;
let level=0;
let highestScore=0;

let h2=document.querySelector("h2");
// starting the game and leveling up
document.addEventListener("keypress",function(){
    if (started==false) {
        console.log("game started");
        started=true; 
        levelUp();
    }   
});

function gameFlash(btn){
    btn.classList.add("flash");// here flash is a style which provide white background color. here it adds flash class to btn array
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);// remove flash (white/green) after 250 microsecond
} 
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
} 


function levelUp(){
    userSeq=[];//in the begning of every move setting up the userSequence to empty;
    level++;// 
    h2.innerText=`Level ${level}`;//setting the level

    let randIdx=Math.floor(Math.random()*3); // finding the random index from 0 to 3
    let randColor=btns[randIdx]; // finding random from btns array sequence
    let randBtn=document.querySelector(`.${randColor}`); // assigning the randBtn value through randomColor value
   
    gameSeq.push(randColor); // pussing the value of randColor value to gameSeq array.
    console.log(gameSeq); // printing the game sequence value to for developer help
    gameFlash(randBtn); // calling gameFlash method for flashing the screen

   
}

function checkAns(idx){
  
    if (userSeq[idx] === gameSeq[idx]){
        if(userSeq.length=== gameSeq.length){
            setTimeout(levelUp,1000);
        }
               
    } else{
            if(level>highestScore){
                highestScore=level;
            }
          h2.innerHTML=`GAME OVER!  your score was: <b> ${level} </b>  <br> Highest Score:<b> ${highestScore}</b> <br> <br>Press any key to start.`;
           document.querySelector("body").style.backgroundColor= "red";
           setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
           },250);

           //twice 
           
          reset();
    }
}
function btnPress(){
    
    let btn = this;
    userFlash(btn);
   
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level = 0;
}