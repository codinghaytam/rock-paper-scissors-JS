function getmachinechoice()
{
    let input=Math.round(Math.random()*2);
    switch (a){
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
function getplayerchoice()
{
    let input= prompt("what is your choice {'Rock','Paper','Scissors'}");
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
console.log(getplayerchoice());