// Hidden DM content
var dm_validation = document.getElementById('dm-validation');
var dm_submit_btn = document.getElementById('dm-submit-btn');
var dm_eyes_only = document.getElementById('dm-eyes-only');

dm_submit_btn.addEventListener('click', function(){
    if (dm_validation.value == "beans") {
        dm_eyes_only.classList.remove('hidden');
    }
});

//Make sure 'clear' resets values AND replaces inner HTML content on cells
var d4result;
var d4total = 0;
var d6result;
var d6total = 0;
var d8result;
var d8total = 0;
var d10result;
var d10total = 0;
var d12result;
var d12total = 0;
var d20result;
var d20total = 0;
var d100result;
var d100total = 0;

var total;


function rolld4() {
    var d4result = Math.floor((Math.random() * 4) + 1);
    document.getElementById("d4result").innerHTML = d4result;
    
    
    d4total = d4total + d4result;
    document.getElementById("d4total").innerHTML = d4total;
    
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function cleard4() {
    d4total = 0;
    d4result = 0;
    document.getElementById("d4result").innerHTML = "-";
    document.getElementById("d4total").innerHTML = "-";
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function rolld6() {
    var d6result = Math.floor((Math.random() * 6) + 1);
    document.getElementById("d6result").innerHTML = d6result;
    
    
    d6total = d6total + d6result;
    document.getElementById("d6total").innerHTML = d6total;
    
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function cleard6() {
    d6total = 0;
    d6result = 0;
    document.getElementById("d6result").innerHTML = "-";
    document.getElementById("d6total").innerHTML = "-";
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function rolld8() {
    var d8result = Math.floor((Math.random() * 8) + 1);
    document.getElementById("d8result").innerHTML = d8result;
    
    
    d8total = d8total + d8result;
    document.getElementById("d8total").innerHTML = d8total;
    
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function cleard8() {
    d8total = 0;
    d8result = 0;
    document.getElementById("d8result").innerHTML = "-";
    document.getElementById("d8total").innerHTML = "-";
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function rolld10() {
    var d10result = Math.floor((Math.random() * 10) + 1);
    document.getElementById("d10result").innerHTML = d10result;
    
    
    d10total = d10total + d10result;
    document.getElementById("d10total").innerHTML = d10total;
    
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function cleard10() {
    d10total = 0;
    d10result = 0;
    document.getElementById("d10result").innerHTML = "-";
    document.getElementById("d10total").innerHTML = "-";
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function rolld12() {
    var d12result = Math.floor((Math.random() * 12) + 1);
    document.getElementById("d12result").innerHTML = d12result;
    
    
    d12total = d12total + d12result;
    document.getElementById("d12total").innerHTML = d12total;
    
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function cleard12() {
    d12total = 0;
    d12result = 0;
    document.getElementById("d12result").innerHTML = "-";
    document.getElementById("d12total").innerHTML = "-";
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function rolld20() {
    var d20result = Math.floor((Math.random() * 20) + 1);
    document.getElementById("d20result").innerHTML = d20result;
    
    
    d20total = d20total + d20result;
    document.getElementById("d20total").innerHTML = d20total;
    
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function cleard20() {
    d20total = 0;
    d20result = 0;
    document.getElementById("d20result").innerHTML = "-";
    document.getElementById("d20total").innerHTML = "-";
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function rolld100() {
    var d100result = Math.floor((Math.random() * 100) + 1);
    document.getElementById("d100result").innerHTML = d100result;
    
    
    d100total = d100total + d100result;
    document.getElementById("d100total").innerHTML = d100total;
    
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function cleard100() {
    d100total = 0;
    d100result = 0;
    document.getElementById("d100result").innerHTML = "-";
    document.getElementById("d100total").innerHTML = "-";
    total = d4total + d6total + d8total + d10total + d12total + d20total + d100total;
    document.getElementById("total").innerHTML = total;
}

function clearAll() {
    d4result = 0;
    d4total = 0;
    d6result = 0;
    d6total = 0;
    d8result = 0;
    d8total = 0;
    d10result = 0;
    d10total = 0;
    d12result = 0;
    d12total = 0;
    d20result = 0;
    d20total = 0;
    d100result = 0;
    d100total = 0;
    total = 0;
    document.getElementById("d4result").innerHTML = "-";
    document.getElementById("d4total").innerHTML = "-";
    document.getElementById("d6result").innerHTML = "-";
    document.getElementById("d6total").innerHTML = "-";
    document.getElementById("d8result").innerHTML = "-";
    document.getElementById("d8total").innerHTML = "-";
    document.getElementById("d10result").innerHTML = "-";
    document.getElementById("d10total").innerHTML = "-";
    document.getElementById("d12result").innerHTML = "-";
    document.getElementById("d12total").innerHTML = "-";
    document.getElementById("d20result").innerHTML = "-";
    document.getElementById("d20total").innerHTML = "-";
    document.getElementById("d100result").innerHTML = "-";
    document.getElementById("d100total").innerHTML = "-";
    document.getElementById("total").innerHTML = "-";
}
