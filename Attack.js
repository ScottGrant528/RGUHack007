var playerFirst = true;
var attackMiss = true; 

function heroAttack(hero, ai){ 
    ai.health =- (hero.attack - ai.defence);
};

function aiAttack(hero, ai){
    hero.health =- (ai.attack-hero.defence);
};


