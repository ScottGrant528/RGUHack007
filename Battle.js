// start of with you and opponents stats
// ambusher attacks first 
// function battle, hero and opponents objects, var for who gets first attack defined outside, 


//Agility function to decide if attack misses

function hitSuccess(agility){
    if ((math.random()*100) > agility ){
        return false; 
    }
    else {
        return true; 
    }
}

function battle(Hero, AI, turn){
    var flee = false;
    while( Hero.health > 0 && AI.health > 0 && !flee){
        if (turn == "Hero"){
            while(!Hero.played){
                var action;
                do{
                    alert("in")//add get action
                }while(action != attack)//add list of actions
                
                action = heal;//delete later

                switch (action){
                    case "heal":
                        Hero.heal();
                        break;
                    case "view inventory":
                        Hero.viewInventory();
                        break;
                    case "view stats":
                        Hero.viewStats();
                        break;
                    case "flee":
                        var fleeSuccess = Math.ceil(Math.random()*100);
                        if(fleeSuccess > 50){
                            flee = true;
                        }
                        else{
                            alert("you failed")
                        }
                        Hero.played = true;
                        break;
                    case "attack":
                        if(hitSuccess){
                            var damage = Hero.attack - AI.defence;
                            if (damage < 0)damage = 0;
                            AI.health -= damage;
                            alert("You did " + damage + " damage");
                        }
                        else{
                            alert("your attack was blocked");
                        }
                        Hero.played = true;
                        break;
                }
            }
            Hero.played = false;
            turn = "AI";
        }
        else if(AI.health > 0 && turn == "AI"){
            
            if(hitSuccess){
                var damage = AI.attack - Hero.defence;
                if (damage < 0)damage = 0;
                AI.health -= damage;
                alert("the " + AI.name + " did " + damage + " damage");
            }
            else{
                alert("you blocked the attack");
            }
            turn = "Hero"
        }
    }
}
