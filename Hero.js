class Hero{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.maxHealth = 100;
        this.defence = 10;
        this.attack = 10;
        this.inventory = [rock];
        this.X = 0;
        this.Y = 0;
        this.played = false;
    }

    viewStats(){
        addToDialogueBox(this.name + "'s stats are:\n" + "Health: " + this.health + "\nMax health: " +
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
        addToDialogueBox(out);
    }

    heal(){
        var item = document.getElementById("inputBox").value;
        var itemPossition = this.checkInventory(item);
        if (itemPossition != false){
            self.health += this.inventory[itemPossition].healling;
            if (self.health > this.maxHealth){
                self.health = this.maxHealth;
            }
            this.inventory.splice(itemLocation, 1)
            this.played = true;
        }
        else{
            addToDialogueBox("This item doesnt exist in your inventory");
        }


    }

    drop(){
        addToDialogueBox("Enter the name of the item you want to drop");
        var item = document.getElementById("inputBox").value.toLowerCase();

        var itemLocation = this.checkInventory(item);
        if (itemLocation){
            this.inventory.splice(itemLocation, 1);
            addToDialogueBox("You have doped the " + item);
            player.played = true;
        }
        else{
            addToDialogueBox(item + " isent isent in your inventory");
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

    move(){
        addToDialogueBox("please input the direction");
        var direction;
        do{
            direction = readline().toLowerCase();
        }while (direction != "right" && direction != "left" && direction != "forwards" && direction != "back")

        switch(direction){
            case "right":
                if(map[this.Y][this.X + 1].name != "Wall"){
                    this.X += 1;
                }                                                                                                   
                else{
                    addToDialogueBox("there is a wall to your right")
                }
                break;

            case "left":
                if(map[this.Y][this.X +- 1].name != "Wall"){
                    this.X -= 1;
                }
                else{
                    addToDialogueBox("there is a wall to your left")
                }
                break; 
                case "forwards":
                    if(map[this.Y + 1][this.X].name != "Wall"){
                        this.Y += 1;
                    }
                    else{
                        addToDialogueBox("there is a wall infront")
                    }
                    break; 
                case "left":
                    if(map[this.Y - 1][this.X].name != "Wall"){
                        this.Y -= 1;
                    }
                    else{
                        addToDialogueBox("there is a wall behind you")
                    }
                    break; 
        }

    }

}


Kaveh = new Hero("kaveh");
