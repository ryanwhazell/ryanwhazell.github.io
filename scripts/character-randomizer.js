var raceArray = ['Human', 'Elf', 'Half-Elf', 'Aquatic Elf', 'Halfling', 'Dwarf', 'Orc', 'Half-Orc', 'Gnome', 'Tiefling', 'Aasimar', 'Troll', 'Minotaur', 'Gnoll', 'Half-Giant', 'Centaur', 'Azer', 'Bugbear', 'Kobold', 'Goblin', 'Lizardfolk'];

var classArray = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Psion', 'Ranger', 'Rogue', 'Sorcerer', 'Soulknife', 'Wilder', 'Wizard'];

var alignmentArray = ['LG', 'NG', 'CG', 'LN', 'N', 'CN', 'LE', 'NE', 'CE'];

var lgGods = ['Bahamut', 'Torm', 'Tyr', 'Ilmater', 'Amaunator', 'Moradin'];
var ngGods = ['Lathander', 'Ilmater', 'Chauntea', 'Eldath', 'Mielikki', 'Mystra', 'Deneir', 'Milil'];
var cgGods = ['Selune', 'Eilistraee', 'Corellon', 'Tymora', 'Sune', 'Sehanine', 'Valkur', 'Lliira'];

var lnGods = ['Kelemvor', 'Helm', 'Amaunator', 'Mystra', 'Jergal', 'Azuth', 'Hoar', 'Baron Barrelbottem'];
var nGods = ['Silvanus', 'Gond', 'Oghma', 'Kossuth', 'Asgorath', 'Waukeen', 'Akadi'];
var cnGods = ['Tempus', 'Leira', 'Uthgar', 'Garagos', 'Hlal', 'Shaundakul'];

var leGods = ['Tiamat', 'Asmodeus', 'Bane', 'Bhaal', 'Loviatar', 'Jergal', 'Hoar', 'Null', 'Buhrias'];
var neGods = ['Shar', 'Auril', 'Myrkul', 'Mask', 'Abbathor', 'Velsharoon', 'Luthic', 'Ilneval'];
var ceGods = ['Lolth', 'Cyric', 'Talos', 'Demogorgon', 'Umberlee', 'Malar', 'Baphomet', 'Beshaba'];

var genderArray = ['Male', 'Female'];

var firstTraitArray = ['Outgoing', 'Depressed', 'Sleepy', 'Determined', 'Chatterbox', 'Bully', 'Bossy', 'Bookworm', 'Conspiracy Theorist', 'Ditzy', 'Flamboyant', 'Wise', 'Blood Thirsty', 'Always Bored', 'Compulsive Liar', 'Narcissistic', 'Extermely serious at all times', 'Takes nothing seriously', 'Absolutly gorgeous. Just stunning. 10/10 truly.', 'Has airpods and flexes them frequently.', 'Offputting', 'Shy around girls', 'You get hiccups when surprised', 'Laughs like Fran Drescher', 'Thalassophobia - fear of the sea', 'Writes poetry, but bad at rhyming', 'You play the lute'];

var secondTraitArray = ['Often Grumpy', 'Angry Drunk', 'Ruthless', 'Obsessed with ducks', 'Germophobe', 'Snitch', 'Despises Children', 'Loves to Eat', 'Mordayn Vapor Addiction', 'Grog Addiction', 'Hates Spellcasters', 'Owns a copy of the Book of Vile Darkness in-game', 'Carries around a small pouch of infinite lima beans at all times - will cry if separated from them even for a second', 'Is running for office in the nearest city from starting point', 'Illiterate, and very embaressed about it'];

var visualTrait = ['Missing Left Ear', 'Has Perfect Teeth', 'Mohawk', 'Visually Filthy', 'Scar over Left Eye', 'Missing Right Eye', 'Lost left hand to Zaldur', 'Allergic to Gluten', 'Has six fingers on each hand', 'Massive Beard', '3ft Long Prehensile Monkey Tail', 'Comically Buff', 'Face Tattoos', 'Wears an oversized wizard hat', 'Always smoking from a pipe', 'Carries a stuffed animal around', 'Flip a coin each day to see if you put your shirt on right-side-out', 'Curly Moustache'];

var goalsArray = ['To create a popular trading card game', 'To become the ruler of a town of at least 1000 residents', 'To become a vampire', 'To become rich', 'To meet a dragon and live to tell the tale', 'To fall in love and retire on a farm', 'To invent your own language and have it become the most commonly used language in the region', 'To become the captain of a great seafaring vessel', 'To create a flying machine', 'To become a famous writer', 'To become a loremaster', 'To invent a sport', 'To become a master chef who cooks with the rarest of monster meats and exotic ingredients', 'To climb the tallest mountain in Faerun', 'To visit the City of Brass', 'To collect legendary artifacts and open up a museum', 'To create a famed religious institution for your diety', 'To become a master blacksmith', 'To travel to every plane at least once', 'To invest steam power and bring about the industrial revolution in the region'];




function generateCharacter() {
    
    var yourFirstTrait = firstTraitArray[Math.floor(Math.random() * firstTraitArray.length)];
    var yourSecondTrait = secondTraitArray[Math.floor(Math.random() * secondTraitArray.length)];
    var yourThirdTrait = visualTrait[Math.floor(Math.random() * visualTrait.length)];
    
    var yourHand = Math.floor(Math.random() * 100);
    if (yourHand > 90) {
        document.getElementById("handDisplay").innerHTML = "You are left handed";
    } else {
        document.getElementById("handDisplay").innerHTML = "You are right handed";
    }
    
    document.getElementById("traitOne").innerHTML = "First Trait: " + yourFirstTrait;
    document.getElementById("traitTwo").innerHTML = "Second Trait: " + yourSecondTrait;
    document.getElementById("traitThree").innerHTML = "Third Trait: " + yourThirdTrait;
    
    var yourRace = raceArray[Math.floor(Math.random() * raceArray.length)];
    document.getElementById("raceDisplay").innerHTML = yourRace;
    
    var yourClass = classArray[Math.floor(Math.random() * classArray.length)];
    document.getElementById("classDisplay").innerHTML = yourClass;
    
    var yourAlignment = alignmentArray[Math.floor(Math.random() * alignmentArray.length)];
    document.getElementById("alignmentDisplay").innerHTML = yourAlignment;
    
    var yourGender = genderArray[Math.floor(Math.random() * genderArray.length)];
    document.getElementById("genderDisplay").innerHTML = yourGender;
    
    //CONDITIONALS BASED ON ALIGNMENT
    //This is where deities will be determined, and perhaps personality traits
    if (yourAlignment == 'LG') {
        var yourDiety = lgGods[Math.floor(Math.random() * lgGods.length)];
        document.getElementById("deityDisplay").innerHTML = yourDiety;
    } 
    else if (yourAlignment == 'NG') {
        var yourDiety = ngGods[Math.floor(Math.random() * ngGods.length)];
        document.getElementById("deityDisplay").innerHTML = yourDiety;
    } 
    else if (yourAlignment == 'CG') {
        var yourDiety = cgGods[Math.floor(Math.random() * cgGods.length)];
        document.getElementById("deityDisplay").innerHTML = yourDiety;
    } 
    else if (yourAlignment == 'LN') {
        var yourDiety = lnGods[Math.floor(Math.random() * lnGods.length)];
        document.getElementById("deityDisplay").innerHTML = yourDiety;
    } 
    else if (yourAlignment == 'N') {
        var yourDiety = nGods[Math.floor(Math.random() * nGods.length)];
        document.getElementById("deityDisplay").innerHTML = yourDiety;
    } 
    else if (yourAlignment == 'CN') {
        var yourDiety = cnGods[Math.floor(Math.random() * cnGods.length)];
        document.getElementById("deityDisplay").innerHTML = yourDiety;
    } 
    else if (yourAlignment == 'LE') {
        var yourDiety = leGods[Math.floor(Math.random() * leGods.length)];
        document.getElementById("deityDisplay").innerHTML = yourDiety;
    } 
    else if (yourAlignment == 'NE') {
        var yourDiety = neGods[Math.floor(Math.random() * neGods.length)];
        document.getElementById("deityDisplay").innerHTML = yourDiety;
    } 
    else if (yourAlignment == 'CE') {
        var yourDiety = ceGods[Math.floor(Math.random() * ceGods.length)];
        document.getElementById("deityDisplay").innerHTML = yourDiety;
    }
    
    //CONDITIONALS BASED ON RACE
    //This is where math.random's will be used to generate weight, height, and age based on a range. This is also where special qualities will be added under the "Special Qualities" display and any stat bonuses
    if (yourRace == 'Human') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = "You get four extra skill points at Level 1, and 1 extra skill point each level. You also get an extra feat at Level 1. You move at 30 feet.";
    }
    else if (yourRace == 'Elf') {
        var strBoost = 0;
        var dexBoost = 2;
        var conBoost = -2;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = "You have low-light vision, immunity to sleep effects, and proficiency with longswords, rapiers, longbows, and shortbows. You move at 30 feet.";
    }
    else if (yourRace == 'Half-Elf') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = "You have low-light vision, immunity to sleep effects, and proficiency with longswords, rapiers, longbows, and shortbows. You have Elven as a bonus language. You move at 30 feet.";
    }
    else if (yourRace == 'Aquatic Elf') {
        var strBoost = 0;
        var dexBoost = 2;
        var conBoost = 0;
        var intBoost = -2;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = "You are immune to sleep effects and have superior low-light vision. You can survive 1 hour per Constitution point out of water before suffocating, and can breathe underwater indefinitely. Elven is a bonus language. You move at 30 feet and swim at 40 feet.";
    }
    else if (yourRace == 'Halfling') {
        var strBoost = -2;
        var dexBoost = 2;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = "As a 'small' creature, you gain +1 to AC and a +1 size bonus on attack rolls, and a +4 to your hide checks but you must use 'small' weapons. You have a +1 to all saving throws, a +2 against fear effects, a +1 with slings and thrown weapons, and get Halfling as an automatic language. Your base movment speed is 20 feet.";
    }
    else if (yourRace == 'Dwarf') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 2;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = -2;
        
        document.getElementById("specialDisplayRace").innerHTML = "You have darkvision, a +2 to perception to notice unusual stone work (such as hidden or sliding doors/walls), and are proficient with dwarven war axes and dwarven urgroshes. You gain a +2 against saving throws for spells, poisons, and a +2 bonus to craft and appraise checks relating to stone or metal. You have a +4 AC dodge bonus against giant-types. Dwarven is an automatic language. Your base movement speed is 20 feet.";
    }
    else if (yourRace == 'Orc') {
        var strBoost = 4;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = -2;
        var wisBoost = -2;
        var chaBoost = -2;
        
        document.getElementById("specialDisplayRace").innerHTML = "You have Dark Vision 60feet and are dazzled in bright sunlight. Orc is an automatic language. You move at a base speed of 30 feet. Orcs have more strength than a half-orc, but less wisdom.";
    }
    else if (yourRace == 'Half-Orc') {
        var strBoost = 2;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = -2;
        var wisBoost = 0;
        var chaBoost = -2;
        
        document.getElementById("specialDisplayRace").innerHTML = "You have Dark Vision 60feet. Orc is an automatic language. You move at a base speed of 30 feet. Half-orcs have more wisdom than a full orc and are not dazzled in the sunlight, but have a lower strenght bonus.";
    }
    else if (yourRace == 'Gnome') {
        var strBoost = -2;
        var dexBoost = 0;
        var conBoost = 2;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = "As a small creature you gain +1 AC, +1 to attack rolls, +4 to hide checks, but use smaller weapons. YOu have low light vision, proficiency with gnome hooked hammers, and have a +2 to all illusions related saving throws. You have a +4 AC against giant types, and a +2 on craft(alchemy) and perception checks. Gnomes have a 1/day spell-like ability 'Speak with Animals' for burrowing mammals only, lasts one minute. Gnomes also get a few 1/day spell-like abilities if they have at least 10 Charisma: Dancing Lights, Ghost Sound, and presidigitation. Movement speed is 20feet.";
    }
    else if (yourRace == 'Tiefling') {
        var strBoost = 0;
        var dexBoost = 2;
        var conBoost = 0;
        var intBoost = 2;
        var wisBoost = 0;
        var chaBoost = -2;
        
        document.getElementById("specialDisplayRace").innerHTML = "Tielfings are outsiders, and range widly in appearence. You have Darkvision 60 feet, and are proficient with all simple and martial weapons, light armor, and sheilds. Resistence: 5 Cold, 5 Electricity, and 5 Fire. You have a 1/day spell-like ability: Darkness. +2 to bluff and hide checks. 'Infernal' is an automatic language. You move at 30feet.";
    }
    else if (yourRace == 'Aasimar') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 2;
        var chaBoost = 2;
        
        document.getElementById("specialDisplayRace").innerHTML = "Aasimar are outsiders, and vary greatly in appearence. You have Darkvision 60 feet. Resistences: 5 Acid, 5 Cold, 5 Electricity. You are proficient with all simple and martial weapnry, light and medium armor, and shields. You have a 1/day spell-like ability: Daylight. Celestial is an automatic language. You move at 30 feet.";
    }
    else if (yourRace == 'Troll') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = " ";
    }
    else if (yourRace == 'Minotaur') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = " ";
    }
    else if (yourRace == 'Gnoll') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = " ";
    }
    else if (yourRace == 'Half-Giant') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = " ";
    }
    else if (yourRace == 'Centaur') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = " ";
    }
    else if (yourRace == 'Azer') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = " ";
    }
    else if (yourRace == 'Bugbear') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = " ";
    }
    else if (yourRace == 'Kobold') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = " ";
    }
    else if (yourRace == 'Goblin') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = " ";
    }
    else if (yourRace == 'Lizardfolk') {
        var strBoost = 0;
        var dexBoost = 0;
        var conBoost = 0;
        var intBoost = 0;
        var wisBoost = 0;
        var chaBoost = 0;
        
        document.getElementById("specialDisplayRace").innerHTML = " ";
    }
    
    
    //CONDITIONALS BASED ON CLASS
    //Special qualities, mostly.
    if (yourClass == 'Barbarian') {
        //some code.
    }
    
    rollStatOne();
    rollStatTwo();
    rollStatThree();
    rollStatFour();
    rollStatFive();
    rollStatSix();
    
    //Stat Generation
    function rollStatOne() {
        var rollOne = Math.floor(Math.random()*6) + 1;
        var rollTwo = Math.floor(Math.random()*6) + 1;
        var rollThree = Math.floor(Math.random()*6) + 1;
        var rollFour = Math.floor(Math.random()*6) + 1;

        var rolls = [rollOne, rollTwo, rollThree, rollFour];

        rolls.sort(function(a, b){return b-a});

        var finalStat = rolls[0] + rolls[1] + rolls[2];
        
        var finalStat = finalStat + strBoost;
        
        document.getElementById("statOne").innerHTML = finalStat;
        document.getElementById("modOne").innerHTML = Math.floor((finalStat - 10) / 2);
    }

    function rollStatTwo() {
        var rollOne = Math.floor(Math.random()*6) + 1;
        var rollTwo = Math.floor(Math.random()*6) + 1;
        var rollThree = Math.floor(Math.random()*6) + 1;
        var rollFour = Math.floor(Math.random()*6) + 1;

        var rolls = [rollOne, rollTwo, rollThree, rollFour];

        rolls.sort(function(a, b){return b-a});

        var finalStat = rolls[0] + rolls[1] + rolls[2];
        
        var finalStat = finalStat + dexBoost;

        document.getElementById("statTwo").innerHTML = finalStat;
        document.getElementById("modTwo").innerHTML = Math.floor((finalStat - 10) / 2);
    }

    function rollStatThree() {
        var rollOne = Math.floor(Math.random()*6) + 1;
        var rollTwo = Math.floor(Math.random()*6) + 1;
        var rollThree = Math.floor(Math.random()*6) + 1;
        var rollFour = Math.floor(Math.random()*6) + 1;

        var rolls = [rollOne, rollTwo, rollThree, rollFour];

        rolls.sort(function(a, b){return b-a});

        var finalStat = rolls[0] + rolls[1] + rolls[2];
        
        var finalStat = finalStat + conBoost;

        document.getElementById("statThree").innerHTML = finalStat;
        document.getElementById("modThree").innerHTML = Math.floor((finalStat - 10) / 2);
    }

    function rollStatFour() {
        var rollOne = Math.floor(Math.random()*6) + 1;
        var rollTwo = Math.floor(Math.random()*6) + 1;
        var rollThree = Math.floor(Math.random()*6) + 1;
        var rollFour = Math.floor(Math.random()*6) + 1;

        var rolls = [rollOne, rollTwo, rollThree, rollFour];

        rolls.sort(function(a, b){return b-a});

        var finalStat = rolls[0] + rolls[1] + rolls[2];
        
        var finalStat = finalStat + intBoost;

        document.getElementById("statFour").innerHTML = finalStat;
        document.getElementById("modFour").innerHTML = Math.floor((finalStat - 10) / 2);
    }

    function rollStatFive() {
        var rollOne = Math.floor(Math.random()*6) + 1;
        var rollTwo = Math.floor(Math.random()*6) + 1;
        var rollThree = Math.floor(Math.random()*6) + 1;
        var rollFour = Math.floor(Math.random()*6) + 1;

        var rolls = [rollOne, rollTwo, rollThree, rollFour];

        rolls.sort(function(a, b){return b-a});

        var finalStat = rolls[0] + rolls[1] + rolls[2];
        
        var finalStat = finalStat + wisBoost;

        document.getElementById("statFive").innerHTML = finalStat;
        document.getElementById("modFive").innerHTML = Math.floor((finalStat - 10) / 2);
    }

    function rollStatSix() {
        var rollOne = Math.floor(Math.random()*6) + 1;
        var rollTwo = Math.floor(Math.random()*6) + 1;
        var rollThree = Math.floor(Math.random()*6) + 1;
        var rollFour = Math.floor(Math.random()*6) + 1;

        var rolls = [rollOne, rollTwo, rollThree, rollFour];

        rolls.sort(function(a, b){return b-a});

        var finalStat = rolls[0] + rolls[1] + rolls[2];
        
        var finalStat = finalStat + chaBoost;

        document.getElementById("statSix").innerHTML = finalStat;
        document.getElementById("modSix").innerHTML = Math.floor((finalStat - 10) / 2);
    }
}