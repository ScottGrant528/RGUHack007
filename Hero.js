class Hero{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.maxHealth = 100;
        this.defence = 10;
        this.attack = 10;
        this.inventory = ["spear","test"];
        this.X = 0;
        this.Y = 0;
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

    heal(item){
        var itemPossition = this.checkInventory(item);
        if (itemPossition != false){
            self.health += this.inventory[itemPossition].healling;
            if (self.health > this.maxHealth){
                self.health = this.maxHealth;
            }
            this.inventory.splice(itemLocation, 1)
        }
        else{
            console.log("This item doesnt exist in your inventory");
        }


    }

    drop(item){
        var itemLocation = this.checkInventory(item);
        if (itemLocation){
            this.inventory.splice(itemLocation, 1)
        }
        else{
            console.log("The item isent there")
        }

    }
    
    checkInventory(item){
        for (var i in this.inventory){
            if (this.inventory[i] == item){
                return i;
            }
        }

        
        return false
    
    }

    move(map){
        console.log("please input the direction");
        var direction;
        do{
            direction = readline().toLowerCase();
        }while (direction != "right" && direction != "left" && direction != "forwards" && direction != "back")

        switch(direction){
            case "right":
                if(map[this.Y][this.X + 1] != "Wall"){
                    this.X += 1;
                }
                else{
                    console.log("there is a wall to your right")
                }
                break;

            case "left":
                if(map[this.Y][this.X +- 1] != "Wall"){
                    this.X -= 1;
                }
                else{
                    console.log("there is a wall to your left")
                }
                break; 
                case "forwards":
                    if(map[this.Y + 1][this.X] != "Wall"){
                        this.Y += 1;
                    }
                    else{
                        console.log("there is a wall infront")
                    }
                    break; 
                case "left":
                    if(map[this.Y - 1][this.X] != "Wall"){
                        this.Y -= 1;
                    }
                    else{
                        console.log("there is a wall behind you")
                    }
                    break; 
        }

    }

}


Kaveh = new Hero("kaveh");

Kaveh.viewInventory();

Kaveh.drop("spear");

Kaveh.viewInventory();

Kaveh.drop("hfbwk");
