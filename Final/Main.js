function main(){
    addToDialogBox("welcome to our text game for rgu Hack 2020");
    addToDialogBox("This is a text based adventure where you are tasked with fighting your way out of the Evil King's castle, from the depths of the dungeon to the throne room. Be warned, the Evil King is a dangerous and ruthless ruler who will stop at nothing to see you fail. <br>Good Luck!!<br>");
    var won = false;
    turn();
    init();
}

function getInfo(){
    var out = "";
    out += "you are in a " + map1[Hero1.Y][Hero1.X].name + "<br>";
    out += map1[Hero1.Y][Hero1.X].description + "<br>";
    out += "To your north is a " + map1[Hero1.Y - 1][Hero1.X].name + "<br>";
    out += "To your east is a " + map1[Hero1.Y][Hero1.X + 1].name + "<br>";
    out += "To your south is a " + map1[Hero1.Y + 1][Hero1.X].name + "<br>";
    out += "To your west is a " + map1[Hero1.Y][Hero1.X - 1].name + "<br>";
    return out;
}
var turnCount = 0;
function turn(){
    addToDialogBox(("Turn count " + turnCount++).fontcolor("red").fontsize(15))
    Hero1.played = false;
    addToDialogBox(getInfo());
    addToDialogBox("What would you like to do");
}

function getAction(action){
    var regex = /pick up \d\s\d/;
    if ( action.match(regex))
    {
        Hero1.pickUpIn(action.charAt(action.length - 1), action.charAt(action.length - 3))
    }

   else{
        switch(action){
            case "view stats":
                addToDialogBox(Hero1.viewStats());
                break;
                case "heal":
                    Hero1.heal();
                break;
            case "view inventory":
                addToDialogBox(Hero1.viewInventory());
                break;
            case "move south":
                Hero1.move("south");
                break;
            case "move east":
                Hero1.move("east");
                break;
            case "move north":
                Hero1.move("north");
                break;
            
            case "move west":
                Hero1.move("west");
                break;
            case "drop 0":
            case "drop 1":
            case "drop 2":
            case "drop 3":
            case "drop 4":
            case "drop 5":
            case "drop 6":
                Hero1.drop(action.charAt(action.length - 1))
                break;

            case "view room items":
                addToDialogBox(Hero1.viewRoomItems());
                break;
            case "pick up 0":
            case "pick up 1":
            case "pick up 2":
            case "pick up 3":
            case "pick up 4":
            case "pick up 5":
            case "pick up 6":
            case "pick up 7":
                Hero1.pickUpOut(action.charAt(action.length - 1))
                break;
  
            //case "pick up [0-7] [0-7]":
            // case "pick up 1 1":
            // case "pick up 2 2":
            // case "pick up 3 3":
            // case "pick up 4 4":
            // case "pick up 5 5":
            // case "pick up 6 6":
            // case "pick up 7 7":
                // Hero1.pickUp(action.charAt(action.length - 1), action.charAt(action.length - 3))
                //break;

            default:        
                addToDialogBox("you enter a invilide command");
        }
        }

        if(Hero1.played){
            if (Hero1.health > 0){
                turn();
            }
            else{
                addToDialogBox("game over you have been slain")
            }
        }
    }


var actions = ["move south","move east","move north", "move west","view stats","heal","view inventory","view room items", "drop index"]