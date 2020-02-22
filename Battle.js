// start of with you and opponents stats
// ambusher attacks first 
// function battle, hero and opponents objects, var for who gets first attack defined outside, 

var attackMiss = true; 
var playerFirst = true;
var turn = ""; 

//Agility function to decide if attack misses
function agility(agility){
    if ((math.random()*100) > agility ){
        return false; 
    }
    else {
        return true; 
    }
}

//Function to decide who attacks first
function attackFirst(heroAttack, aiAttack){
    if (playerFirst == true){
        heroAttack; 
       return turn = "aiNow"
    }
    else { 
        aiAttack;
      return  turn = "playerNow"
    }
}

//Function to impliment the turn based system
function turnBased(heroAttack, aiAttack){
    if (turn == "playerNow"){
        heroAttack;
        return turn = "aiNow"
    }
    else {
        aiAttack;
        return turn = "playerNow"
    }
}

