function resetForm() {
    document.getElementById("errorOutput").innerHTML =" ";
    document.getElementById("receipt").innerHTML =" ";
    document.getElementById("anotherPayment").style.display = "none";
    document.getElementById("errorStyle").classList.remove('alert-success');
    document.getElementById("errorStyle").classList.remove('alert-danger');
}
function changeCard() {
    var cardNumber = document.getElementById("cardNum").value;
    var firstDigit = cardNumber.charAt(0);

    if (firstDigit == 3) {
        document.getElementById("cardImage").src = "https://www.texvisions.com/design_tool/data/test_logos/amex.png";
    } else if (firstDigit == 4) {
        document.getElementById("cardImage").src = "https://www.texvisions.com/design_tool/data/test_logos/visa.png";
    } else if (firstDigit == 5) {
        document.getElementById("cardImage").src = "https://www.texvisions.com/design_tool/data/test_logos/mastercard.png";
    } else if (firstDigit == 6) {
        document.getElementById("cardImage").src = "https://www.texvisions.com/design_tool/data/test_logos/discover.png";
    } else {
        document.getElementById("cardImage").src = "https://www.texvisions.com/design_tool/data/test_logos/blank_card.png";
    }

}


function validate() {

    var salesOrder1 = document.getElementById("SO1").value;
    var salesOrder2 = document.getElementById("SO2").value;
    var salesOrder3 = document.getElementById("SO3").value;
    var salesOrder = ('000'+(salesOrder1*1).toFixed(0)).slice(-3) + "-" + ('000'+(salesOrder2*1).toFixed(0)).slice(-3) + "-" + salesOrder3;

    var totalAmount = document.getElementById("amount").value;

    var cardNumber = document.getElementById("cardNum").value;

    var cvvNum = document.getElementById("cvv").value;

    var exMonth = document.getElementById("exMonth").value;
    var exYear = document.getElementById("exYear").value;
    today = new Date();
    var d = new Date("20" + exYear, exMonth,0);
    var lastDayMonth = d.getDate();
    someday = new Date();
    someday.setFullYear("20" + exYear, exMonth - 1, lastDayMonth);


    var userName = document.getElementById("name").value;

    var userEmail = document.getElementById("email").value;

    var soValidate = false;
    var amtValidate = false;
    var cardNumValidate = false;
    var cvvValidate = false;
    var dateValidate = false;
    var nameValidate = false;


    /*Sales Order JavaScript validation*/
    if (isNaN(salesOrder1) || isNaN(salesOrder2)) {
        document.getElementById("SOoutput").innerHTML = "Please enter a number in the SO# invoice fields";
    } else if (salesOrder1 < 0 || salesOrder2 < 0) {
        document.getElementById("SOoutput").innerHTML = "Sales order values must be above 0";
    } else if (salesOrder1 > 999 || salesOrder2 > 999) {
        document.getElementById("SOoutput").innerHTML = "Sales order values must not exceed three digits each";
    } else if (salesOrder3 == "blank") {
        document.getElementById("SOoutput").innerHTML = "Please select SO or SI from the sales order number drop down";
    } else {
        document.getElementById("SOoutput").innerHTML = " ";
        soValidate = true;
    }

    /*Amout JavaScript validation*/
    if (isNaN(totalAmount)) {
        document.getElementById("AMToutput").innerHTML = "Please enter a number value for the amount";
    } else if (totalAmount < 0) {
        document.getElementById("AMToutput").innerHTML = "Amount value must be above zero";
    } else if (totalAmount == "") {
        document.getElementById("AMToutput").innerHTML = "Amount value must be above zero";
    } else {
        document.getElementById("AMToutput").innerHTML = " ";
        amtValidate = true;
    }

    /*Card Number JavaScript Validation*/
    if (isNaN(cardNumber)) {
        document.getElementById("CardOutput").innerHTML = "Please enter a 16 digit credit card number";
    } else if (cardNumber.length < 16 || cardNumber.length > 16) {
        document.getElementById("CardOutput").innerHTML = "Please enter a 16 digit credit card number";
    } else if (cardNumber < 1) {
        document.getElementById("CardOutput").innerHTML = "Please enter a 16 digit credit card number";
    } else {
        document.getElementById("CardOutput").innerHTML = " ";
        cardNumValidate = true;
    }


    /*CVV2 JavaScript Validation*/
    if (isNaN(cvvNum)) {
        document.getElementById("cvvOutput").innerHTML = "Please enter a valid CVV2 number";
    } else if (cvvNum < 1 || cvvNum > 999) {
        document.getElementById("cvvOutput").innerHTML = "Please enter a valid CVV2 number";
    } else {
        document.getElementById("cvvOutput").innerHTML = " ";
        cvvValidate = true;
    }

    /*Date JavaScript validation*/
    if (exMonth < 1 || exMonth > 12) {
        document.getElementById("DateOutput").innerHTML = "Please enter a valid date (mm/yy)";
    } else if (exYear < 0 || exYear > 99) {
        document.getElementById("DateOutput").innerHTML = "Please enter a valid date (mm/yy)";
    } else if (someday == "Invalid Date") {
        document.getElementById("DateOutput").innerHTML = "Please enter a valid date";
    } else if (someday < today) {
        document.getElementById("DateOutput").innerHTML = "This card is expired";
    } else {
        document.getElementById("DateOutput").innerHTML = " ";
        dateValidate = true;
    }


    /*Name JavaScript Validation*/
    if (userName == "") {
        document.getElementById("nameOutput").innerHTML = "Please enter your name";
    } else {
        document.getElementById("nameOutput").innerHTML = " ";
        nameValidate = true;
    }

    /*Error Log Generation*/
    if (soValidate == true && amtValidate == true && cardNumValidate == true && cvvValidate == true && dateValidate == true && nameValidate == true) {
        document.getElementById("errorOutput").innerHTML = "<strong>Your payment was submitted successfully. Below is a receipt of this transaction:</strong>";
        document.getElementById("receipt").innerHTML = "The sales order " + salesOrder + " has been processed for $" + totalAmount + " on the card " + cardNumber + " belonging to " + userName + ". This receipt will be e-mailed to " + userEmail + ". Please click 'Make Another Payment' if you would like to pay for another sales order.";

        document.getElementById("anotherPayment").style.display = "block";
        document.getElementById("errorStyle").classList.remove('alert-danger');
        document.getElementById("errorStyle").classList.add('alert-success');
        
    } else {
        document.getElementById("errorOutput").innerHTML = "<strong>There were errors with your submission. See below:</strong>"
        document.getElementById("errorStyle").classList.add('alert-danger');
        document.getElementById("errorStyle").classList.remove('alert-success');
    }

}