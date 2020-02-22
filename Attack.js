var playerFirst = true;
var attackMiss = true; 

function agility(agility){
    if ((math.random()*100) > agility ){
        return false; 
    }
    else {
        return true; 
    }
}

function heroAttack(hero, ai){ 
    ai.health =- (hero.attack - ai.defence);
};

function aiAttack(hero, ai){
    hero.health =- (ai.attack-hero.defence);
};


