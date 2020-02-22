export class Location{
    constructor(name,items,discription){
        this.name = name;
        this.items = items;
    }
}


var cell = new Locations("Cell", ["Spear","apple"],"This dark old cell is full of broken stuff and the walls are damaged");
var hallwayOne = new Locations("Hallway",["WoodenBox"],"The long hallway with a door at the end and a door halfway down");
var guardsRoom = new Locations("Guards Room",["Spear"],"The guards room has several boxs at the foots of beds and 2 doors on either side");
var wall = new Locations("Wall",[],"");

console.log(cell)

