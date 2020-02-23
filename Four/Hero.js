class Hero{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.maxHealth = 100;
        this.defence = 4;
        this.attack = 30;
        this.maxInventory = 7;
        this.inventory = [rock,bread];
        this.X = 1;
        this.Y = 1;
        this.played = false;
    }

    viewStats(){
        var out = (this.name + "'s stats are:" + " Health: " + this.health + " Max health: " + this.maxHealth + " defence: " + this.defence + " Attack: " + this.attack);
        return out;
    }

    viewInventory(){
        let out = "";
        if (this.inventory == 0){
            out += "you do not have anything in your inventory.";
        } 
        else{
            for (var i in this.inventory){
                out += i + ") " + this.inventory[i].name + "<br>";
            }
        }
        return(out);
    }
    heal(){
        var healed = false;
        for (let i in this.inventory){
            if (this.inventory[i] instanceof food){
                this.healBy(this.inventory[i]);
                this.inventory.splice(i, 1);
                healed = true;
            }
        }
        if(!healed){
            addToDialogBox("You dont have any food");
        }
    }
    healBy(item){
        if(this.health + item.healing > this.maxHealth){
            this.health = this.maxHealth;
            addToDialogBox("you healed to full")
        }
        else{
            this.health += item.healing;
            addToDialogBox("you healed by " + item.healing)
        }
    }

    drop(index){
        if (index <= this.inventory.length){
            addToDialogBox("You have doped the " + this.inventory[index].name);
            this.inventory.splice(index, 1);
        }
        else{
            addToDialogBox("index out of bounds to drop item");
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

    move(direction){
        var moved = false;
        switch(direction){
            case "east":
                if(map1[this.Y][this.X + 1].name != "Wall"){
                    this.X += 1;
                    moved = true;
                }                                                                                                   
                else{
                    addToDialogBox("there is a wall to your east")
                }
                break;
                
            case "west":
                if(map1[this.Y][this.X +- 1].name != "Wall"){
                    this.X -= 1;
                    moved = true;
                }
                else{
                    addToDialogBox("there is a wall to your west")
                }
                break; 
                case "south":
                    if(map1[this.Y + 1][this.X].name != "Wall"){
                        this.Y += 1;
                        moved = true;
                    }
                    else{
                        addToDialogBox("there is a wall to your south")
                    }
                    break; 
                case "north":
                    if(map1[this.Y - 1][this.X].name != "Wall"){
                        this.Y -= 1;
                        moved = true;
                    }
                    else{
                        addToDialogBox("there is a wall to you rnorth")
                    }
                    break;
        }

        if(moved){
            if (map1[this.Y][this.X] == (hallwayTwo)){
                if (this.checkInventory(keyHallway1)){
                    document.getElementById("img").src=map1[this.Y][this.X].src;
                    addToDialogBox("you opened the door with a key")
                    addToDialogBox("you moved to a " + map1[this.Y][this.X].name)
                    Hero1.played = true;
                    checkForEnemy();
                }
                else{
                    addToDialogBox("you need a key");
                    this.Y -= 1;
                }
            }
            else{
                document.getElementById("img").src=map1[this.Y][this.X].src;
                addToDialogBox("you moved to a " + map1[this.Y][this.X].name)
                Hero1.played = true;
                checkForEnemy();
            }
        }

    }

    pickUpOut(index){
        var room = map1[this.Y][this.X];
        if(this.inventory.length <= this.maxInventory){
            if ((room.items.length) > index){
                if (!(room.items[index] instanceof box)){
                    this.inventory.push(room.items[index])
                    room.items.splice(index,1);
                    addToDialogBox("you picked up a " + this.inventory[this.inventory.length - 1].name);
                }
                else{
                    addToDialogBox("you cannot pick up a box");
                }
            }
            else{
                addToDialogBox("index out of bounds for room")
            }
        }
        else{
            addToDialogBox("inventory full")
        }
    }

    pickUpIn(index,boxIndex){
        var room = map1[this.Y][this.X];
        if(this.inventory.length <= this.maxInventory){
            if ((room.items.length) > index){
                if ((room.items[index] instanceof box)){
                    if(room.items[index].items.length > boxIndex){
                        this.inventory.push(room.items[index][boxIndex])
                        this.inventory.push(room.items[index].items.splice(boxIndex,1));
                        addToDialogBox("you picked up a " + this.inventory[this.inventory.length - 1].name);
                    }
                    else{
                        addToDialogBox("box index out of range")
                    }
                }
                else{
                    addToDialogBox("item is not a box");
                }
            }
            else{
                addToDialogBox("index out of bounds for room")
            }
        }
        else{
            addToDialogBox("inventory full")
        }
    }

    viewRoomItems(){
        var out = "";
        var items = (map1[this.Y][this.X].items);
        for (var i in items){
            out += (i + ") " + items[i].name).fontcolor("green") + "<br>";
            if(items[i] instanceof box){
                out += (items[i].view(items[i]) + "<br>");
            }
        }
        return out
    }

/*     openBox(){
        var out = "";
        var items = map1[this.Y][this.X].items;
        for (var i in items){
            if(items[i] instanceof box){
                out = (items[i].view(items[i]));
            }
        }
        return out
    } */

}


Hero1 = new Hero("kaveh");
