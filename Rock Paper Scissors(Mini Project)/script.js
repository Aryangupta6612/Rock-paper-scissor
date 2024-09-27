let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let usrsc = document.querySelector("#user-score");
let cmpsc = document.querySelector("#comp-score");
let reset = document.querySelector("#reset");
console.log(msg);
const compchoice = () =>{
    const options = ["rock","paper","scissor"];
    const randomchoie = Math.floor(Math.random()*3);
    return options[randomchoie]

}
const drawgame = ()=>{
    msg.innerHTML = "Game draw! Try again";
    msg.style.backgroundColor = "blue";
    
}

const resetgame = ()=>{
    userscore=0;
    compscore = 0;
    usrsc.innerHTML=0;
    cmpsc.innerHTML = 0;
    msg.innerHTML = "Pick your first move";
    msg.style.backgroundColor = "darkblue";
}

reset.addEventListener("click",resetgame);

const usrwin = (userchoice,cmpch)=>{
    msg.innerHTML = `You win! ${userchoice} beats ${cmpch}`;
    msg.style.backgroundColor = "green";
    usrsc.innerHTML = userscore;   
}

const compwin = (userchoice,cmpch)=>{
    msg.innerHTML = `Computer win! ${cmpch} beats ${userchoice}`;
    msg.style.backgroundColor = "red";
    cmpsc.innerHTML = compscore;   
} 
const showwinner = (userwin,userchoice,cmpch) =>{
    if(userwin){
        userscore ++;
       usrwin(userchoice,cmpch);
        
    }
    else{
        compscore++;
        compwin(userchoice,cmpch);
        
    }
}
const playGame = (userchoice) =>{
    console.log("Userchoice",userchoice);
    // Generate computer choice
    const cmpch = compchoice();
    console.log("computer choice",cmpch);
    if(userchoice==cmpch){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice==="rock"){
            //scissor or paper
            userwin = cmpch==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            //rock or scissor
            userwin = cmpch==="scissor"?false:true;
        }
        else if(userchoice==="scissor"){
            //rock or paper
            userwin = cmpch==="rock"?false:true;
        }
        showwinner(userwin,userchoice,cmpch);
    }


}
choices.forEach((choice) => {
    choice.addEventListener("click",function(){
        const userchoice = choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);
    })
})

