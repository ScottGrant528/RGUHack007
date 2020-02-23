class Location{
    constructor(name,items,enemies,description, src){
        this.name = name;
        this.items = items;
        this.enemies = enemies;
        this.description = description;
        this.src = src;
    }
}


var cell = new Location("Cell", [rock, bread, applepie, chicken],[],"This dark old cell is full of broken stuff and the walls are damaged", "images/pixelCell.png");
var hallwayOne = new Location("Hallway",[chestHallway],[guard],"The long hallway with a door at the end and a door halfway down", "images/pixelHallway.png");
var hallwayTwo = new Location("Hallway",[chestHallway],[guard],"The long hallway with a door at the end and chapel door at the far end", "images/pixelHallway.png");
var guardsRoom = new Location("Guards Room",[keyHallway1],[guard],"The guards room has several boxs at the foots of beds and 2 doors on either side", "images/pixelHallway.png");//
var wall = new Location("Wall",[],[],"");
var throneRoom = new Location("Throne Room",[],[theKing],"The throne room is a huge room with a single gold throne at the far side, with a king sitting upon it", "images/throneRoom.png");
var chapel = new Location("The Chapel",[],[lightSolider],"A big room with wooden pews and a big stained glass window", "images/pixelHallway.png");//
var kitchen = new Location("Kitchen",[basket,knife],[veteranSoldier],"Medium sized room with a low ceiling,oak counter tops with vegetables packed ontop", "images/pixelHallway.png");//
var greatHall = new Location("The Great Hall",[bread, applepie, biscuit],[heavySoldier],"A huge space with a U-shaped wooden table by a great fire", "images/pixelHallway.png");//
var armory = new Location("Armory Room",[weaponRack],imperialGuard,"A large room with many weapon racks, and also a large variety of weapons mounted on the walls", "images/pixelHallway.png");//
