function getmachinechoice()
{
    let a=Math.round(Math.random()*2);
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
