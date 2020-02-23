//Creating a template for bad guys 
class badGuy {
    constructor(health, maxHealth, defence, attack, agility){
        this.health = health;
        this.maxHealth = maxHealth;
        this.defence = defence; 
        this.attack = attack; 
        this.agility = agility;
        
    }
}

class theKing extends badGuy{
    
    constructor(mobName,health, maxHealth, defence, attack, agility,item) {
        super([health, maxHealth, defence, attack, agility]);
        this.mobName = mobName;
        this.item = item;
        
    }
}

theKing = new theKing("The evil King",125, 125, 15, 15, 15,keyMainDoor);







//Evil king villian created
var evilKing = new badGuy(150, 150, 20, 20, 15);

//Imperial guard villian created
var imperialGuard = new badGuy(125, 125, 15, 15, 15);

//Veteran Soldier
var veteranSoldier = new badGuy(110, 110, 12, 12, 15);

//Heavy Soldier 
var heavySoldier = new badGuy(150, 150, 30, 20, 5);

//Soldier 
var soldier = new badGuy(100, 100, 10, 10, 15);

//Light Soldier
var lightSolider = new badGuy(80, 80, 12, 12 , 20);  

//Guard
var guard = new badGuy(50, 50, 5, 5 , 15);


var enemies = [theKing,guard,lightSoldier]
