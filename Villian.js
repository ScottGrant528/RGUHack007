/*class myClass { 
    //Class methods 
        constructor(){}
        method1(){}
        method2(){}
        method3(){}
}
*/ 
/*
List of bad guys 
Evil King (best unit)
Imperial Guard (higher difficulty)
Veteran Soldier (high difficulty)
Soldier (med difficulty)
Regular Guard (low difficulty)
Light Guard (med difficulty)
*/ 

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
//Evil king villian created
var evilKing = new badGuy(150, 150, 20, 20, 15);
console.log("evil king");
console.log(evilKing);

//Imperial guard villian created
var imperialGuard = new badGuy(125, 125, 15, 15, 15);
console.log("imperial guard");
console.log(imperialGuard);

//Veteran Soldier
var veteranSoldier = new badGuy(110, 110, 12, 12, 15);
console.log("veteran soldier");
console.log(veteranSoldier);

//Heavy Soldier 
var heavySoldier = new badGuy(150, 150, 30, 20, 5);
console.log("heavy soldier");
console.log(heavySoldier);

//Soldier 
var soldier = new badGuy(100, 100, 10, 10, 15);
console.log("soldier");
console.log(soldier);

//Light Soldier
var lightSolider = new badGuy(80, 80, 12, 12 , 20); 
console.log("light solider");
console.log(lightSolider); 

//Guard
var guard = new badGuy(50, 50, 5, 5 , 15); 
console.log("guard");
console.log(guard)