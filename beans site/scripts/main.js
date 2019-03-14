var jeffLevel = Math.floor(Math.random() * 10) + 1;

function analyzeJeff() {
    document.getElementById("result").innerHTML = "Jeff's bitch level: " + jeffLevel;
    
    if (jeffLevel == 1) {
        document.getElementById("comment").innerHTML = "This is the minimum jeff-bitch-level. Perhaps it is YOU who are the bitch";
    } else if (jeffLevel == 2) {
        document.getElementById("comment").innerHTML = "Quite a low bitch level";
    } else if (jeffLevel == 3) {
        document.getElementById("comment").innerHTML = "Jeff's bitch levels are lower than average right now.";
    } else if (jeffLevel == 4) {
        document.getElementById("comment").innerHTML = "Jeff's bitch level is JUST below his average.";
    } else if (jeffLevel == 5) {
        document.getElementById("comment").innerHTML = "Jeff's bitch level is on average. He could be more of a bitch right now, but he could also be less of one.";
    } else if (jeffLevel == 6) {
        document.getElementById("comment").innerHTML = "Jeff's bitch level is a tad bit above normal. This is where he is generally at while playing league.";
    } else if (jeffLevel == 7) {
        document.getElementById("comment").innerHTML = "Jeff's bitch level is somewhat high, I can only assume he is arguing about something right now, and probably is not correct.";
    } else if (jeffLevel == 8) {
        document.getElementById("comment").innerHTML = 'At this time Jeff is passing the bitch threshold, and one would undoubtably say that he is "definitively being a bitch".';
    } else if (jeffLevel == 9) {
        document.getElementById("comment").innerHTML = 'The only way Jeff could be more of a bitch right now is if he said something idiotic like, "Reesees Peesees", or "Ironman is not a super hero".';
    } else if (jeffLevel == 10) {
        document.getElementById("comment").innerHTML = "Jeff is being as much of a bitch as he can possibly be right now. Stop being a bitch Jeff, you're ruining everyone's good time.";
    }
    
}
