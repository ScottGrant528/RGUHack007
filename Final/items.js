class item {
    
    constructor(name) {
        this.name = name;
    }
    
}

// food

class food extends item{
    
    constructor(name,healing) {
        super(name);
        this.healing = healing;
    }
}

//weapon

class weapon extends item{

    constructor(name,attack) {
        super(name);
        this.attack = attack;
      }
}

//armor

class armor extends item{

    constructor(name,defence) {
        super(name);
        this.defence = defence;
    }
}

//box

class box extends item{
    
    constructor(name,maxItem,items) {
        super(name);
        this.maxItem = maxItem;
        this.items = items;
    }

    view(box){
        var out = "";
        for(var i in box.items){
            out += i + ") " + box.items[i].name + "<br>";
        }
        return out;
    }
}



// sheilds

class  sheild extends item{

    constructor(name,blockChance) {
        super(name);
        this.blockChance = blockChance;
      }
}

class  key extends item{

    constructor(name,description) {
        super(name);
        this.description = description;
      }
}

//key input

keyMainDoor = new key("Front door key","The key to exit the castle and win the game");
keyHallway1 = new key("Hallyway key one","This key lets you escape hallyway one outside thes guards room");


//weapon input

shortsword = new weapon("short sword",15);
rock = new weapon("rock",2);
pike = new weapon("pike",25);
spear = new weapon("spear",17);
sword = new weapon("sword",20);
knife = new weapon("knife",5);


//armor

steelHelmet = new armor("steel helmet",10);
steelBoots = new armor("steel boots",7);
steelChestplate = new armor("steel chestlate",20);
steelLeggings = new armor("steel leggings",15);
steelGloves = new armor("steel gloves",5);

leatherHelmet = new armor("leather helmet",6);
leatherBoots = new armor("leather boots",3);
leatherChestplate = new armor("leather chestplate",14);
leatherLeggings = new armor("leather leggings",9);
leatherGloves = new armor("leather gloves",3);

// sheilds inputs
woodenSheild = new sheild("wooden sheild",10);
steelSheild = new sheild("steel sheild",20);




bread = new food("bread",5);
chicken = new food("chicken",7);
applepie = new food("apple pie",10);
biscuit = new food("biscuit",8);

//box inouts

barrel = new box("barrel",3,[steelHelmet,shortsword,rock]);
basket = new box ("basket",5,[bread,chicken,applepie,biscuit]);
chestHallway = new box("chestHallway",4,[shortsword,leatherChestplate,leatherGloves,leatherHelmet]);
weaponRack = new box("weaponRack",2,[sword,steelSheild]);




