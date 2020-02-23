//Creating a template for bad guys 
class badGuy {
    constructor(name,health, maxHealth, defence, attack, agility){
        this.name = name; 
        this.health = health;
        this.maxHealth = maxHealth;
        this.defence = defence; 
        this.attack = attack; 
        this.agility = agility;
        
    }
}
class theKing extends badGuy{
    
    constructor(name,health, maxHealth, defence, attack, agility,item) {
        super([health, maxHealth, defence, attack, agility]);
        this.name = name;        
    }
}

theKing = new theKing("The Evil King",125, 125, 15, 15, 15,); // add function to add key to get out to the players inventory to allow them to escape and finish the game

//Imperial guard villian created
var imperialGuard = new badGuy("Imperial Guard",125, 125, 15, 15, 15);

//Veteran Soldier
var veteranSoldier = new badGuy("Veteran Soldier",110, 110, 12, 12, 15);

//Heavy Soldier 
var heavySoldier = new badGuy("Heavy Soldier",150, 150, 30, 20, 5);

//Soldier 
var soldier = new badGuy("Soldier",100, 100, 10, 10, 15);

//Light Soldier
var lightSolider = new badGuy("Light Solider",80, 80, 12, 12 , 20);  

//Guard
var guard = new badGuy("Guard",50, 50, 5, 5 , 15);

var myEnemies = [guard,lightSolider,soldier,lightSolider];
