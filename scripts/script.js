
function getmachinechoice()
{
    let input=Math.round(Math.random()*2);
    switch (input){
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default :
            return "ERROR";
    }
}
function getplayerchoice(input)
{

    if(input===null)input="";
    switch (input.toLowerCase())
    {
        case "rock":
            return "Rock";
            break;
        case "paper":
            return "Paper";
            break;
        case "scissors":
            return "Scissors";
            break;
        default :
            return "ERROR";
    }
}
function PlayRound(machine,player)
{
    let output;
    if(player===machine) output="TIE";
    else if (player=="Scissors")
        {
            if (machine=="Paper") output="Win";
            else output="Lose";
        }
    else if (player=="Rock")
        {
            if (machine=="Scissors") output="Win";
            else output="Lose";
        }
    else if (player=="Paper")
        {
            if (machine=="Rock") output="Win";
            else output="Lose";
        }
    return ("You "+output);
}
function PlayMatch()
{   
    let player_score=0,machine_score=0
    for (i=0;i<5;i++)
    {
        let result_round=PlayRound(getmachinechoice(),getplayerchoice());
        if (result_round == "You Win")
        {   player_score++;
            console.log(result_round);
        }
        else if (result_round=="You Lose")
        {
            machine_score++;
            console.log(result_round);

        }
        else {i--;console.log("Retry");}
    }
    if (player_score>machine_score)console.log("You Won the match");
    else if (player_score<machine_score)console.log("You lost the match"); 
    else console.log("Its a Tie"); 
}

const controles=Array.from(document.querySelectorAll("ul > img")).concat(document.querySelector("div > button"));
const player_controles = controles.slice(0,3);
const player_display_input = document.querySelector(".player_output");
const machine_display_input = document.querySelector(".machine_output");
const image_list = player_controles.map((x)=> x.src);
const value_list = player_controles.map((x)=> x.alt);
for(i = 0;i < 4;i++)
{ 
    controles[i].addEventListener("mouseenter",(e)=>{
        e.target.style.background="#666666";
    }

    );
    controles[i].addEventListener("mouseleave",(e)=>{
        e.target.style.background="#1a1919";
    }

    );

}
let player_input;
let machine_input;
let result;
let game_stat = false;
controles[3].addEventListener("click",function(){
    game_stat = true;

}
);
for(i = 0;i < 3;i++)
{
    player_controles[i].addEventListener("click",function(e){
        if(game_stat)
        {
            player_input = e.target.alt;
            player_display_input.firstElementChild.src = e.target.src;            
            machine_input = getmachinechoice();
            machine_display_input.firstElementChild.src = image_list[value_list.indexOf(machine_input)];
            result = PlayRound(machine_input,player_input);
            console.log(result);
            game_stat = false;
        }
    }
    );
}

