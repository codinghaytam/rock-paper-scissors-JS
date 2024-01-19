
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


const controles=Array.from(document.querySelectorAll("ul > img")).concat(document.querySelector("div > button"));
const player_controles = controles.slice(0,3);
const player_display_input = document.querySelector(".player_output");
const machine_display_input = document.querySelector(".machine_output");
const image_list = player_controles.map((x)=> x.src);
const value_list = player_controles.map((x)=> x.alt);
const result_display = document.querySelector(".counter");
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
    player_display_input.firstElementChild.src = "";            
    machine_display_input.firstElementChild.src = "";
    result_display.textContent="";

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
            result_display.textContent = result;
            game_stat = false;
        }
    }
    );
}

