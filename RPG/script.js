//player variables:
var playerName;
var playerRace;
var playerClass;
var playerMaxHealth = 20;
var playerCurrentHealth = playerMaxHealth;
var playerMagic = 10;
var currentSpell;
var mainWeapon;
var offWeapon;
var playerEXP = 0;
var playerLevel = 1;
var playerGold = 100;

var playerBaseAttackBonus;
var playerDamageDealt;

var playerMainCombatStat;

var playerStr = 10;
var playerDex = 10;
var playerCon = 10;
var playerInt = 10;
var playerWis = 10;
var playerCha = 10;

var currentEnemy;

//Character Creator:
document.getElementById("mainScreen").style.display = "none";

//Spell:

//Healing:
var healingTouch = {
    name: "Healing Touch",
    spellType: "healing",
    healPower: 10,
    magicCost: 5
}
//Damage:
var fireball = {
    name: "Fireball",
    spellType: "damage",
    spellDamage: 10,
    magicCost: 5
}
var shadowstrike = {
    name: "Shadow Strike",
    spellType: "damage",
    spellDamage: 5,
    magicCost: 3
}

//Weapons:
//Unarmed
var unarmed = {
    name: "Unarmed",
    damageValue: 1,
    damageDie: 1
}
//Swords:
var bronzeSword = {
    name: "Bronze Sword",
    damageValue: 2,
    damageDie: 4
}
var ironSword = {
    name: "Iron Sword",
    damageValue: 3,
    damageDie: 6
}
var steelSword = {
    name: "Steel Sword",
    damageValue: 4,
    damageDie: 8
}
//Shields:
var ironShield = {
    name: "Iron Shield",
    armorValue: 3
}
//Staffs:
var woodStaff = {
    name: "Wooden Staff",
    damageValue: 1,
    spellDamageBonus: 3,
    damageDie: 4
}
//Bows:
var woodBow = {
    name: "Wooden Bow",
    damageValue: 2
}
//Daggers:
var ironDagger = {
    name: "Iron Dagger",
    damageValue: 1,
    damageDie: 4
}

//Exotic:
var lightsaber = {
    name: "Lightsaber",
    damageValue: 50,
    damageDie: 20
}


function characterSubmit() {
    
    document.getElementById("mainScreen").style.display = "block";
    document.getElementById("charCreator").style.display = "none";
    
    playerName = charNameBox.value;
    playerRace = raceSelect.value;
    playerClass = classSelect.value;
    
    document.getElementById("playerNameBox").innerHTML = playerName;
    document.getElementById("playerRaceBox").innerHTML = playerRace;
    document.getElementById("playerClassBox").innerHTML = playerClass;
    document.getElementById("playerHealthBox").innerHTML = playerCurrentHealth + "/" + playerMaxHealth;
    
    document.getElementById("levelBox").innerHTML = playerLevel;
    document.getElementById("expBox").innerHTML = playerEXP;
    document.getElementById("goldBox").innerHTML = playerGold;
    
    document.getElementById("strBox").innerHTML = playerStr;
    document.getElementById("dexBox").innerHTML = playerDex;
    document.getElementById("conBox").innerHTML = playerCon;
    document.getElementById("intBox").innerHTML = playerInt;
    document.getElementById("wisBox").innerHTML = playerWis;
    document.getElementById("chaBox").innerHTML = playerCha;
    
    //!!!!!!!!!!!!!!!!! PlAYER RACES !!!!!!!!!!!!!!!!!!!!!
    
    if (playerRace == "Human") {
        //code goes here
    } else if (playerRace == "Elf") {
        //Code for Elf Stats:
        playerCha = playerCha + 1;
        playerStr = playerStr - 2;
        playerDex = playerDex + 2;
        playerWis = playerWis + 1;
        playerCon = playerCon - 1;
        playerMaxHealth = playerMaxHealth - 2;
        playerCurrentHealth = playerMaxHealth;
        document.getElementById("playerHealthBox").innerHTML = playerCurrentHealth + "/" + playerMaxHealth;
        document.getElementById("strBox").innerHTML = playerStr;
        document.getElementById("dexBox").innerHTML = playerDex;
        document.getElementById("conBox").innerHTML = playerCon;
        document.getElementById("intBox").innerHTML = playerInt;
        document.getElementById("wisBox").innerHTML = playerWis;
        document.getElementById("chaBox").innerHTML = playerCha;
    } else if (playerRace == "Halfling") {
        //code goes here
    } else if (playerRace == "Dwarf") {
        //Code for Dwarf Stats
        playerCha = playerCha - 1;
        playerStr = playerStr + 2;
        playerCon = playerCon - 2;
        playerMaxHealth = playerMaxHealth + 5;
        playerCurrentHealth = playerMaxHealth;
        document.getElementById("playerHealthBox").innerHTML = playerCurrentHealth + "/" + playerMaxHealth;
        document.getElementById("strBox").innerHTML = playerStr;
        document.getElementById("dexBox").innerHTML = playerDex;
        document.getElementById("conBox").innerHTML = playerCon;
        document.getElementById("intBox").innerHTML = playerInt;
        document.getElementById("wisBox").innerHTML = playerWis;
        document.getElementById("chaBox").innerHTML = playerCha;
    }
    //!!!!!!!!!!!!!!!!! PlAYER CLASSES !!!!!!!!!!!!!!!!!!!!!
    
    if (playerClass == "Fighter") {
        //code goes here
        playerStr = playerStr + 2;
        playerDex = playerDex - 2;
        playerCon = playerCon + 1;
        playerInt = playerInt - 1;
        playerCha = playerCha - 1;
        playerBaseAttackBonus = 3;
        mainWeapon = steelSword;
        offWeapon = unarmed;
        document.getElementById("mainWeaponBox").innerHTML = mainWeapon.name;
        document.getElementById("offWeaponBox").innerHTML = offWeapon.name;
        playerMaxHealth = playerMaxHealth + 3;
        playerCurrentHealth = playerMaxHealth;
        document.getElementById("playerHealthBox").innerHTML = playerCurrentHealth + "/" + playerMaxHealth;
        document.getElementById("strBox").innerHTML = playerStr;
        document.getElementById("dexBox").innerHTML = playerDex;
        document.getElementById("conBox").innerHTML = playerCon;
        document.getElementById("intBox").innerHTML = playerInt;
        document.getElementById("wisBox").innerHTML = playerWis;
        document.getElementById("chaBox").innerHTML = playerCha;
        playerMainCombatStat = playerStr;
        
    } else if (playerClass == "Paladin") {
        //Stats:
        playerStr = playerStr + 2;
        playerDex = playerDex - 1;
        playerCon = playerCon + 2;
        playerInt = playerInt - 2;
        playerWis = playerWis - 1;
        playerCha = playerCha + 2;
        //Base Attack Bonus:
        playerBaseAttackBonus = 3;
        //Weapons:
        mainWeapon = ironSword;
        offWeapon = ironShield;
        document.getElementById("mainWeaponBox").innerHTML = mainWeapon.name;
        document.getElementById("offWeaponBox").innerHTML = offWeapon.name;
        //Magic
        currentSpell = healingTouch;
        document.getElementById("currentSpellBox").innerHTML = currentSpell.name;
        document.getElementById("playerMagicBox").innerHTML = playerMagic;
        //Health and Placing Stats:
        playerMaxHealth = playerMaxHealth + 2;
        playerCurrentHealth = playerMaxHealth;
        document.getElementById("playerHealthBox").innerHTML = playerCurrentHealth + "/" + playerMaxHealth;
        document.getElementById("strBox").innerHTML = playerStr;
        document.getElementById("dexBox").innerHTML = playerDex;
        document.getElementById("conBox").innerHTML = playerCon;
        document.getElementById("intBox").innerHTML = playerInt;
        document.getElementById("wisBox").innerHTML = playerWis;
        document.getElementById("chaBox").innerHTML = playerCha;
        playerMainCombatStat = playerStr;
        
    } else if (playerClass == "Rogue") {
        //code goes here
        playerStr = playerStr - 2;
        playerDex = playerDex + 3;
        playerCon = playerCon - 1;
        playerInt = playerInt + 2;
        playerWis = playerWis - 1;
        playerCha = playerCha + 2;
        //Base Attack Bonus
        playerBaseAttackBonus = 1;
        //Weapos
        mainWeapon = ironDagger;
        offWeapon = unarmed;
        document.getElementById("mainWeaponBox").innerHTML = mainWeapon.name;
        document.getElementById("offWeaponBox").innerHTML = offWeapon.name;
        //Magic
        currentSpell = shadowstrike;
        document.getElementById("currentSpellBox").innerHTML = currentSpell.name;
        document.getElementById("playerMagicBox").innerHTML = playerMagic;
        //Health and placing stats
        playerMaxHealth = playerMaxHealth - 2;
        playerCurrentHealth = playerMaxHealth;
        document.getElementById("playerHealthBox").innerHTML = playerCurrentHealth + "/" + playerMaxHealth;
        document.getElementById("strBox").innerHTML = playerStr;
        document.getElementById("dexBox").innerHTML = playerDex;
        document.getElementById("conBox").innerHTML = playerCon;
        document.getElementById("intBox").innerHTML = playerInt;
        document.getElementById("wisBox").innerHTML = playerWis;
        document.getElementById("chaBox").innerHTML = playerCha;
        playerMainCombatStat = playerDex;
        
    } else if (playerClass == "Wizard") {
        //code goes here
        playerStr = playerStr - 2;
        playerDex = playerDex - 1;
        playerCon = playerCon - 1;
        playerInt = playerInt + 3;
        playerWis = playerWis + 2;
        playerCha = playerCha + 1;
        playerBaseAttackBonus = 1;
        //Weapons, spells
        mainWeapon = woodStaff;
        offWeapon = unarmed;
        currentSpell = fireball;
        document.getElementById("mainWeaponBox").innerHTML = mainWeapon.name;
        document.getElementById("offWeaponBox").innerHTML = offWeapon.name;
        document.getElementById("currentSpellBox").innerHTML = currentSpell.name;
        document.getElementById("playerMagicBox").innerHTML = playerMagic;
        //Health, stats
        playerMaxHealth = playerMaxHealth - 1;
        playerCurrentHealth = playerMaxHealth;
        document.getElementById("playerHealthBox").innerHTML = playerCurrentHealth + "/" + playerMaxHealth;
        document.getElementById("strBox").innerHTML = playerStr;
        document.getElementById("dexBox").innerHTML = playerDex;
        document.getElementById("conBox").innerHTML = playerCon;
        document.getElementById("intBox").innerHTML = playerInt;
        document.getElementById("wisBox").innerHTML = playerWis;
        document.getElementById("chaBox").innerHTML = playerCha;
        playerMainCombatStat = playerInt;
    } 
}

//Enemies:
var rat = {
    name: "Rat",
    damageRange: 1,
    health: 5,
    armorClass: 10,
    goldValue: 25,
    expValue: 50
}
var goblin = {
    name: "Goblin",
    damageRange: 3,
    health: 10,
    armorClass: 15,
    goldValue: 50,
    expValue: 100
}
var superJeffie = {
    name: "Super Jeffie",
    damageRange: 500,
    health: 500,
    armorClass: 500,
    goldValue: 15000,
    expValue: 15000
}

var redDragon = {
    //Stats in progress, check 3.5e manual
    name: "Red Dragon",
    damageRange: 50,
    health: 250,
    armorClass: 29,
    goldValue: 3000,
    expValue: 4000
}

function goblinEncounter() {
    currentEnemy = goblin;
    document.getElementById("enemyName").innerHTML = currentEnemy.name;
    document.getElementById("enemyHealth").innerHTML = "Remaining Health: " + currentEnemy.health;
    document.getElementById("combatFeed").innerHTML = "You roam around the plains until you see a " + currentEnemy.name + ". As you notice him, he notices you, and he lunges forward to attack you but misses. You stand before him, weapon in hand. What do you do?"
}

function ratEncounter() {
    currentEnemy = rat;
    document.getElementById("enemyName").innerHTML = currentEnemy.name;
    document.getElementById("enemyHealth").innerHTML = "Remaining Health: " + currentEnemy.health;
    document.getElementById("combatFeed").innerHTML = "Ah fuck, a rat! What do??"
}

function attackRoll() {
    //For testing puroses, consider the player is a level 1 paladin. 
    //The paladin has a base attack of 3, and the starting weapon is an iron sword with an attack bonus of 3. As such, the following is a d20 roll + 3 + 3 under those condtions.
    var d20Roll = Math.floor(Math.random() * 20) + 1;
    var attackRoll = d20Roll + playerBaseAttackBonus + mainWeapon.damageValue;
    
    if (attackRoll >= currentEnemy.armorClass){
        //HIT:
        document.getElementById("demo").innerHTML = "Rolled: " + attackRoll + ". Success!"
        playerHit();
    } else if (attackRoll < currentEnemy.armorClass) {
        //MISS:
        document.getElementById("demo").innerHTML = "You missed. Roll: " + attackRoll;
        playerMiss();
    }
    
}

function playerHit() {
    //Die rolls
    var d4Roll = Math.floor(Math.random() * 4) + 1;
    var d6Roll = Math.floor(Math.random() * 6) + 1;
    var d8Roll = Math.floor(Math.random() * 8) + 1;
    var d10Roll = Math.floor(Math.random() * 10) + 1;
    var d12Roll = Math.floor(Math.random() * 12) + 1;
    var d20Roll = Math.floor(Math.random() * 20) + 1;
    
    var damageDone;
    
    
    //Equating those rolls to the damage die of each weapon
    if (mainWeapon.damageDie == 4) {
        damageDone = d4Roll + mainWeapon.damageValue;
        currentEnemy.health = currentEnemy.health - damageDone;
        document.getElementById("enemyHealth").innerHTML = "Remaining Health: " + currentEnemy.health;
        document.getElementById("combatFeed").innerHTML = "You did " + damageDone + " damage!";
    } else if (mainWeapon.damageDie == 6) {
        //Demo code block:
        damageDone = d6Roll + mainWeapon.damageValue;
        currentEnemy.health = currentEnemy.health - damageDone;
        document.getElementById("enemyHealth").innerHTML = "Remaining Health: " + currentEnemy.health;
        document.getElementById("combatFeed").innerHTML = "You did " + damageDone + " damage!";
    } else if (mainWeapon.damageDie == 8) {
        damageDone = d8Roll + mainWeapon.damageValue;
        currentEnemy.health = currentEnemy.health - damageDone;
        document.getElementById("enemyHealth").innerHTML = "Remaining Health: " + currentEnemy.health;
        document.getElementById("combatFeed").innerHTML = "You did " + damageDone + " damage!";
    } else if (mainWeapon.damageDie == 10) {
        document.getElementById("demo2").innerHTML = "Damage done: " + d10Roll;
    } else if (mainWeapon.damageDie == 12) {
        document.getElementById("demo2").innerHTML = "Damage done: " + d12Roll;
    } else if (mainWeapon.damageDie == 20) {
        damageDone = d20Roll + mainWeapon.damageValue;
        currentEnemy.health = currentEnemy.health - damageDone;
        document.getElementById("enemyHealth").innerHTML = "Remaining Health: " + currentEnemy.health;
        document.getElementById("combatFeed").innerHTML = "You did " + damageDone + " damage!";
    }
    
    if (currentEnemy.health < 1) {
        currentEnemy.health = 0;
        document.getElementById("enemyHealth").innerHTML = currentEnemy.health;
        
        enemyDead();
    } else if (currentEnemy.health >= 1) {
        enemyTurn();
    }
}

function playerMiss() {
    document.getElementById("combatFeed").innerHTML = "You missed!";
    enemyTurn();
}

function enemyTurn() {
    var enemyDamage = Math.floor(Math.random() * currentEnemy.damageRange) + 1;
    document.getElementById("combatFeed2").innerHTML = "The " + currentEnemy.name + " returns an attack, dealing " + enemyDamage + " damage! What do you do?"
    
    playerCurrentHealth = playerCurrentHealth - enemyDamage;
    document.getElementById("playerHealthBox").innerHTML = playerCurrentHealth + "/" + playerMaxHealth;
}

function enemyDead() {
    //This function should: remove enemy and combat variables, adjust windows as needed, and award gold and experience. There should also be an EXP check for leveling up?
    
    //Victory text:
    document.getElementById("combatFeed").innerHTML = "Enemy has been defeated!";
    //Rewards:
    document.getElementById("combatFeed2").innerHTML = "Gold Received: " + currentEnemy.goldValue + "<br>" + "EXP Received: " + currentEnemy.expValue;
    
    //Applying and updating rewards:
    playerEXP = playerEXP + currentEnemy.expValue;
    playerGold = playerGold + currentEnemy.goldValue;
    
    document.getElementById("levelBox").innerHTML = playerLevel;
    document.getElementById("expBox").innerHTML = playerEXP;
    document.getElementById("goldBox").innerHTML = playerGold;
}

function attemptCast() {
    if (playerMagic > 0) {
        castSpell();
    } else if (playerMagic <= 0) {
        failedCast();
    }
}

function failedCast() {
    document.getElementById("combatFeed").innerHTML = "You don't have enough magic!";
}

function castSpell() {
    //document.getElementById("demo").innerHTML = "You cast: " + currentSpell.name;
    
    if (currentSpell.spellType == "damage") {
        //Code for damage spells:
        document.getElementById("combatFeed").innerHTML = "You cast " + currentSpell.name + " and dealt " + currentSpell.spellDamage + " points of damage, and it cost you " + currentSpell.magicCost + " points of magic.";
        
        //Do damage, spend magic:
        currentEnemy.health = currentEnemy.health - currentSpell.spellDamage;
        if (currentEnemy.health <= 0) {
            currentEnemy.health = 0;
            enemyDead();
        } else if (currentEnemy.health > 0) {
            enemyTurn();
        }
        
        playerMagic = playerMagic - currentSpell.magicCost;
        
        if (playerMagic < 0) {
            playerMagic = 0;
        }
        
        //update boxes:
        document.getElementById("enemyHealth").innerHTML = "Remaining Health: " + currentEnemy.health;
        document.getElementById("playerMagicBox").innerHTML = playerMagic;
        
        
    } else if (currentSpell.spellType == "healing") {
        //Code for healing spells:
        document.getElementById("combatFeed").innerHTML = "You cast " + currentSpell.name + " and healed yourself for " + currentSpell.healPower + " points of health, and it cost you " + currentSpell.magicCost + " points of magic.";
        
        //Heal player, spend magic
        playerCurrentHealth = playerCurrentHealth + currentSpell.healPower;
        playerMagic = playerMagic - currentSpell.magicCost;
        //If over max, set to max; vice versa for magic
        if (playerCurrentHealth > playerMaxHealth) {
            playerCurrentHealth = playerMaxHealth;
            document.getElementById("playerHealthBox").innerHTML = playerCurrentHealth + "/" + playerMaxHealth;
        }
        if (playerMagic < 0) {
            playerMagic = 0;
        }
        
        //update boxes
        document.getElementById("playerMagicBox").innerHTML = playerMagic;
        document.getElementById("playerHealthBox").innerHTML = playerCurrentHealth + "/" + playerMaxHealth;
        enemyTurn();
    }
}

if (playerCurrentHealth > playerMaxHealth) {
    playerCurrentHealth = playerMaxHealth;
    document.getElementById("playerHealthBox").innerHTML = playerCurrentHealth + "/" + playerMaxHealth;
}
//!!!! END OF COMBAT CODE !!!!

function camp() {
    //refill health and magic:
    playerCurrentHealth = playerMaxHealth;
    playerMagic = 10;
    //update boxes:
    document.getElementById("playerHealthBox").innerHTML = playerCurrentHealth + "/" + playerMaxHealth;
    document.getElementById("playerMagicBox").innerHTML = playerMagic;
}

//Click on an item to see its details:
function mainWeaponDetails() {
    window.alert("Item name: " + mainWeapon.name + "\nAccuracy Rating: " + mainWeapon.damageValue + "\nDamage Range: 1 - " + mainWeapon.damageDie);
}

function offWeaponDetails() {
    window.alert("Item name: " + offWeapon.name + "\nAccuracy Rating: " + offWeapon.damageValue + "\nDamage Range: 1 - " + offWeapon.damageDie);
}

function currentSpellDetails() {
    //Might have to use an if statement to split this up between damage and healing
    window.alert("Spell name: " + currentSpell.name + "\nSpell Type: " + currentSpell.spellType + "\nDamage: " + currentSpell.spellDamage + "\nMagic Cost: " + currentSpell.magicCost);
}


//Everything below this line is for testing functions only, and will probably be deleted eventually:
function equipLightsaber() {
    mainWeapon = lightsaber;
    document.getElementById("mainWeaponBox").innerHTML = mainWeapon.name;
}













