
function hitSuccess(agility){
    if ((math.random()*100) > agility ){
        return false; 
    }
    else {
        return true; 
    }
}

function checkForEnemy(){
    if(map1[Hero1.Y][Hero1.X].enemies.length > 0){
        battle(Hero1,map1[Hero1.Y][Hero1.X].enemies[0])
    }
}

function battle(Hero, AI){
    addToDialogBox("You have encountered a " + AI.name);
    while( Hero.health > 0 && AI.health > 0){
        var damage =  (Hero.attack - AI.defence);
        if (damage < 0){
            damage = 0;
        }
        AI.health -= damage;
        addToDialogBox("Ai was damaged for " + damage); 

        if (AI.health > 0){
            damage = AI.attack - Hero.defence
            if (damage < 0){
                damage = 0;
            }
            Hero.health -= damage; 
            addToDialogBox(Hero.name + " was damaged for " + damage);
        }
        else{
            addToDialogBox(Hero.name + " won the battle with " + Hero.health + " health left.")
        }

     };       
};

function masterKey(){
    if(theKing.health < 0){
        //keyMainDoor
    }
}