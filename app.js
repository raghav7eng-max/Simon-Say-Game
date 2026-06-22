let gameSeq=[];
let userSeq=[];
let box=["one","two","three","four"];

let h2=document.querySelector("h2");
let allBtn=document.querySelectorAll(".box");
let body=document.querySelector("body");

let start=false;
let level=0;    

function btnFlash(btn){
        btn.classList.add("flash");
        setTimeout(function(){
            btn.classList.remove("flash");
        },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let rand=Math.floor(Math.random()*4);
    let randBox=box[rand];
    let btn=document.querySelector(`#${randBox}`);
    btnFlash(btn);
    gameSeq.push(randBox);
    console.log(gameSeq);
}
function checkAns(nlvl){
    console.log("Current Level is:",level);
    if(gameSeq[nlvl]==userSeq[nlvl]){
        if(gameSeq.length==userSeq.length){
            console.log("Matched");
            setTimeout(levelUp,500);
        }
    }else{
        console.log("Not Matched");
        h2.innerHTML=`Game Over! Your Score Is:' <u>${level}</u>'<br>Press Any Key To Restart `;
        start=false;
        level=0;    
        gameSeq=[];
        userSeq=[];
        body.classList.add("over");
    }
}
document.addEventListener("keypress",function(){
    if(start==false){
        console.log("Game Started");
        start=true;
        body.classList.remove("over");
        levelUp();
    }
})
for(let bn of allBtn){
    bn.addEventListener("click",function(){
        console.log("Button Clicked");
        btnFlash(bn);
        userSeq.push(bn.id);
        console.log(userSeq)

        checkAns(userSeq.length-1);
    });
}


    
