
function toString(num) {

    //count of digits

    var fullNum = num;
    for(var i = 0; fullNum > 1; i++) {
        fullNum /= 10;
    }
    var countDigits = i;

    //separate digits

    var num10 = Math.floor(num / 1000000000);
    var num9 = Math.floor(num / 100000000 % 10);
    var num8 = Math.floor(num / 10000000 % 10); 
    var num7 = Math.floor(num / 1000000 % 10);
    var num6 = Math.floor(num / 100000 % 10);
    var num5 = Math.floor(num / 10000 % 10);
    var num4 = Math.floor(num / 1000 % 10);
    var num3 = Math.floor(num / 100 % 10);
    var num2 = Math.floor(num / 10 % 10);
    var num1 = Math.floor(num % 10);
    var x = (num.toString().includes(".")) ? (num.toString().split(".").pop()) : ("");
    var num01 = Math.floor(x / 10);
    var num02 = Math.floor(x % 10);

    //key words
    
    var numArr = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var dozen = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    var fromTen = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var billions = "";
    var millions = "";
    var thousand = "";
    var hundred = "";
    var dollars = "";
    var cents = "";

    //billions

    if (num10 === 1) {
        billions = numArr[num10] + " billion ";
    }
    else if (num10 > 1) {
        billions = numArr[num10] +  " billions ";
    }

    //millions

    if (num9 === 0 && num8 === 0 && num7 === 0) {
        millions = "";
    }
    else {
        if (num9 !== 0) {
            millions = numArr[num9] + " hundred";
        }
        if (num8 === 1) {
            millions += " " + fromTen[num7];
        }
        else if (num8 > 1) {
            millions += " " + dozen[num8] + "-" + numArr[num7];
        }
        else {
            millions += numArr[num7];
        }
        if (num7 = 1) {
            millions += " million ";
        }
        else if (num7 > 1) {
            millions += " millions ";
        }
    }

    //thousand

    if (num6 === 0 && num5 === 0 && num4 === 0) {
        thousand = "";
    }
    else {
        if (num6 !== 0) {
            thousand = numArr[num6] + " hundred";
        }
        if (num5 === 1) {
            thousand += " " + fromTen[num4] + " thousand ";
        }
        else if (num5 > 1) {
            thousand += " " + dozen[num5] + "-" + numArr[num4] + " thousand ";
        }
        else {
            thousand += numArr[num4] + " thousand ";
        }
    }

    //hundred

    if (num3 === 0 && num2 === 0 && num1 === 0) {
        hundred = "";
    }
    else {
        if (num3 !== 0) {
            hundred = numArr[num3] + " hundred";
        }
        if (num2 === 1) {
            hundred += " " + fromTen[num1] + " ";
        }
        else if (num2 > 1) {
            hundred += " " + dozen[num2] + "-" + numArr[num1];
        }
        else {
            hundred += numArr[num1];
        }
    }

    //dollars

    if (num1 === 1) {
        dollars = " dollar ";
    }
    else {
        dollars = " dollars ";
    }

    //cents
    if (num01 === 0 && num02 === 0) {
        cents = "";
    }
    else {
        if (num01 === 1) {
            cents = fromTen[num01];
        }
        else if (num01 > 1) {
            cents = dozen[num01] + "-" + numArr[num02];
        }
        else {
            cents = numArr[num02];
        }
        if (num02 === 1) {
            cents += " cent";
        }
        else {
            cents += " cents";
        }
    }

    //output 

    if (countDigits >= 10) {
        return billions + millions + thousand + hundred + dollars + cents;
    }
    else if (countDigits >= 7) {
        return millions + thousand + hundred + dollars + cents;
    }
    else if (countDigits >= 4) {
        return thousand + hundred + dollars + cents;
    }
    else if (countDigits >= 0) {
        return hundred + dollars + cents;
    }
}


let num = prompt("Enter your number");
alert(toString(num));
