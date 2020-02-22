class Hero{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.maxHealth = 100;
        this.defence = 10;
        this.attack = 10;
        this.inventory = [];
    }

    viewStats(){
        console.log(this.name + "'s stats are:\n" + "Health: " + this.health + "\nMax health: " +
            this.maxHealth + "\ndefence: " + this.defence + "\nAttack: " + this.attack);
    }

    viewInventory(){
        let out = "";
        if (this.inventory == 0){
            out += "you do not have anything in your inventory.";
        } 
        else{
            for (var i in this.inventory){
                out += this.inventory[i] + "\n";
            }
        }
        console.log(out);
    }

    //heal(var item){
    //    var has = false;

    //}

    checkInventory(item){
        for (var i in this.inventory){
            if (this.inventory[i] == item){
                return i;
            }
        }

        return false
    
}
}


Kaveh = new Hero("kaveh");

Rob = new Hero("Rob");

Rob.viewStats();

Rob.health -= Kaveh.attack;

Rob.viewStats();

Kaveh.viewInventory();