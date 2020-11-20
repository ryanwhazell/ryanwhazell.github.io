//Stat Roller:
var statOne;
var statTwo;
var statThree;
var statFour;
var statFive;
var statSix;


//First Stat
var StatOneRollOne = Math.floor(Math.random() * 6) + 1;
var StatOneRollTwo = Math.floor(Math.random() * 6) + 1;
var StatOneRollThree = Math.floor(Math.random() * 6) + 1;
var StatOneRollFour = Math.floor(Math.random() * 6) + 1;

var StatOneRolls = [StatOneRollOne, StatOneRollTwo, StatOneRollThree, StatOneRollFour];
StatOneRolls.sort(function (a, b) {return b - a; });

var FinalStatOne = StatOneRolls[0] + StatOneRolls[1] + StatOneRolls[2];
var statOneMod = Math.floor((FinalStatOne - 10) / 2);

//Second Stat
var StatTwoRollOne = Math.floor(Math.random() * 6) + 1;
var StatTwoRollTwo = Math.floor(Math.random() * 6) + 1;
var StatTwoRollThree = Math.floor(Math.random() * 6) + 1;
var StatTwoRollFour = Math.floor(Math.random() * 6) + 1;

var StatTwoRolls = [StatTwoRollOne, StatTwoRollTwo, StatTwoRollThree, StatTwoRollFour];
StatTwoRolls.sort(function (a, b) {return b - a;} );

var FinalStatTwo = StatTwoRolls[0] + StatTwoRolls[1] + StatTwoRolls[2];
var statTwoMod = Math.floor((FinalStatTwo - 10) / 2);

//Third Stat
var StatThreeRollOne = Math.floor(Math.random() * 6) + 1;
var StatThreeRollTwo = Math.floor(Math.random() * 6) + 1;
var StatThreeRollThree = Math.floor(Math.random() * 6) + 1;
var StatThreeRollFour = Math.floor(Math.random() * 6) + 1;

var StatThreeRolls = [StatThreeRollOne, StatThreeRollTwo, StatThreeRollThree, StatThreeRollFour];
StatThreeRolls.sort(function (a, b) {return b - a;} );

var FinalStatThree = StatThreeRolls[0] + StatThreeRolls[1] + StatThreeRolls[2];
var statThreeMod = Math.floor((FinalStatThree - 10) / 2);

//Fourth Stat
var StatFourRollOne = Math.floor(Math.random() * 6) + 1;
var StatFourRollTwo = Math.floor(Math.random() * 6) + 1;
var StatFourRollThree = Math.floor(Math.random() * 6) + 1;
var StatFourRollFour = Math.floor(Math.random() * 6) + 1;

var StatFourRolls = [StatFourRollOne, StatFourRollTwo, StatFourRollThree, StatFourRollFour];
StatFourRolls.sort(function (a, b) {return b - a;} );

var FinalStatFour = StatFourRolls[0] + StatFourRolls[1] + StatFourRolls[2];
var statFourMod = Math.floor((FinalStatFour - 10) / 2);

//Fifth Stat
var StatFiveRollOne = Math.floor(Math.random() * 6) + 1;
var StatFiveRollTwo = Math.floor(Math.random() * 6) + 1;
var StatFiveRollThree = Math.floor(Math.random() * 6) + 1;
var StatFiveRollFour = Math.floor(Math.random() * 6) + 1;

var StatFiveRolls = [StatFiveRollOne, StatFiveRollTwo, StatFiveRollThree, StatFiveRollFour];
StatFiveRolls.sort(function (a, b) {return b - a;} );

var FinalStatFive = StatFiveRolls[0] + StatFiveRolls[1] + StatFiveRolls[2];
var statFiveMod = Math.floor((FinalStatFive - 10) / 2);

//Sixth Stat
var StatSixRollOne = Math.floor(Math.random() * 6) + 1;
var StatSixRollTwo = Math.floor(Math.random() * 6) + 1;
var StatSixRollThree = Math.floor(Math.random() * 6) + 1;
var StatSixRollFour = Math.floor(Math.random() * 6) + 1;

var StatSixRolls = [StatSixRollOne, StatSixRollTwo, StatSixRollThree, StatSixRollFour];
StatSixRolls.sort(function (a, b) {return b - a;} );

var FinalStatSix = StatSixRolls[0] + StatSixRolls[1] + StatSixRolls[2];
var statSixMod = Math.floor((FinalStatSix - 10) / 2);

//PLAYER RACE / Class
var pRaces = ["Human", "Elf", "Halfling", "Dwarf", "Drow", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc"];
var pClasses = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Psion", "Ranger", "Sorcerer", "Wizard"];
var pAlignment = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "True Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];

var playerRace = pRaces[Math.floor(Math.random() * pRaces.length)];
var playerClass = pClasses[Math.floor(Math.random() * pClasses.length)];
var playerAligment = pAlignment[Math.floor(Math.random() * pAlignment.length)];


//DO THE THING
function GenerateCharacter() {
    //Display Stats
    document.getElementById("strStat").innerHTML = "STR: " + FinalStatOne;
    document.getElementById("strMod").innerHTML = statOneMod;

    document.getElementById("dexStat").innerHTML = "DEX: " + FinalStatTwo;
    document.getElementById("dexMod").innerHTML = statTwoMod;

    document.getElementById("conStat").innerHTML = "CON: " + FinalStatThree;
    document.getElementById("conMod").innerHTML = statThreeMod;

    document.getElementById("wisStat").innerHTML = "WIS: " + FinalStatFour;
    document.getElementById("wisMod").innerHTML = statFourMod;

    document.getElementById("chaStat").innerHTML = "CHA: " + FinalStatFive;
    document.getElementById("chaMod").innerHTML = statFiveMod;

    document.getElementById("intStat").innerHTML = "INT: " + FinalStatSix;
    document.getElementById("intMod").innerHTML = statSixMod;
    
    //Display Race and Class
    document.getElementById("playerRace").innerHTML = "Race: " + playerRace;
    document.getElementById("playerClass").innerHTML = "Class: " + playerClass;
    document.getElementById("playerAlignment").innerHTML = "Alignment: " + playerAligment;
}


























