export class Location{
    constructor(name,items,badGuy,discription){
        this.name = name;
        this.items = items;
        this.badGuy = badGuy;
        this.discription = discription;
    }
}


var cell = new Locations("Cell", [rock],"This dark old cell is full of broken stuff and the walls are damaged");
var hallwayOne = new Locations("Hallway",[chestHallway],"The long hallway with a door at the end and a door halfway down");
var guardsRoom = new Locations("Guards Room",[guard,guard],[keyHallway1],"The guards room has several boxs at the foots of beds and 2 doors on either side");
var wall = new Locations("Wall",[],"");
var throneRoom = new Locations("Throne Room",[evilKing,imperialGuard],[],"The throne room is a huge room with a single gold throne at the far side, with a king sitting upon it");
var chapel = new Locations("The Chapel",[smallChest],"A big room with wooden pews and a big stained glass window");
var kitchen = new Locations("Kitchen",[basket,knife],"medium sized room with a low ceiling,oak counter tops with vegetables packed ontop");
var greatHall = new Locations("The Great Hall",[heavySoldier,heavySoldier,veteranSoldier],[],"A huge space with a U-shaped wooden table by a great fire");
var armory = new Locations("Armory Room",[guard,guard],[weaponRack],"A large room with many weaponRacks, and also weapons mounted on the walls ");

