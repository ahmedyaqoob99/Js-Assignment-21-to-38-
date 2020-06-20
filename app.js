// Chp 21 to 25

// Assignment # 1
// var firstName = prompt('Enter First Name');
// var lastName = prompt('Enter Last Name');
// var fullName = firstName + " " + lastName;
// alert(fullName);

// Assignment # 2
// var favPhone = prompt('Write Your Favourite Mobile Phone');
// var phoneLength = favPhone.length;
// alert("My Favourite Phone is: " + favPhone + '\n' + "Length of String: " + phoneLength);

// Assignment # 3
// var country = "Pakistani";
// var countryIndex = country.indexOf('n');
// document.write("String: " + country + "<br>" + "Index of 'n': " + countryIndex);

// Assignment # 4
// var str = "Hello World";
// var lastIndex = str.lastIndexOf('l');
// document.write("String: " + str + "<br>" + "Last Index of 'l': " + lastIndex);

// Assignment # 5
// var str = "Pakistani";
// var lastIndex = str.charAt(3);
// document.write("String: " + str + "<br>" + "Char at index 3: " + lastIndex);

// Assignment # 6
// var firstName = prompt('Enter First Name');
// var lastName = prompt('Enter Last Name');
// var fullName = firstName.concat(lastName);
// alert(fullName);

// Assignment # 7
// var city = "Hyderabad";
// var replaceCity = city.replace("Hyder", "Islam");
// document.write("City: " + city + "<br>" + "After Replacement: " + replaceCity);

// Assignment # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaceMessage = message.replace(/and/g, "&");
// document.write("Message: " + message + "<br>" + "After Replacement: " + replaceMessage);

// Assignment # 9
// var value = "472";
// document.write("Value: " + value + "<br>" + "Type: " + typeof(value));
// value = parseInt(value);
// document.write("<br>Value: " + value + "<br>" + "Type: " + typeof(value));

// Assignment # 10
// var str = prompt("Type Some Text:");
// var convertUpper = str.toUpperCase();
// document.write("Input Type: " + str + "<br>Convert into Upper Case: " + convertUpper);

// Assignment # 11
// var str = prompt("Type Some Text:");
// var convertUpper = str.charAt(0).toUpperCase() + str.slice(1);
// document.write("Input Type: " + str + "<br>Convert into Title Case: " + convertUpper);

// Assignment # 12
// var num = (35.36).toString();
// var result = num.replace(".", "");
// document.write("Number: " + num + "<br>" + "Result: " + result);

// Assignment # 13
// var username = prompt("Enter Your Username('Donot use any special character')");

// for (var i = 0; i < username.length; i++) {
//     if (username.charAt(i) === "!" || username.charAt(i) === "@" || username.charAt(i) === "," || username.charAt(i) === ".") {
//         alert("Please Enter a Valid Username");
//         break;
//     }
// }

// Assignment # 14
// var ArrayItem = ["cake", "apple pie", "cookie", "chips", "patties"];

// var user = (prompt("Welcome To My Bakery, What u Want Sir/Ma'am")).toLowerCase();

// for (var i = 0; i < ArrayItem.length; i++) {
//     if (ArrayItem[i] === user) {
//         alert(user + " is availaible in Index " + i);
//         break;
//     }
// }

// Assignment # 15
// var pass = prompt('Enter Password', 'Atleast 6 Character long And Not Use Any number in begining');

// var firstChar = pass.charAt(0);
// if (firstChar <= '9' && firstChar >= '0') {
//     document.write("Password cannot begin with a number <br>Please Enter a valid Password");
// } else {
//     document.write("Correct Password");
// }

// Assignment # 16
// var university = "University Of Karachi";

// for (let index = 0; index < university.split('').length; index++) {
//     const element = university.split('')[index];
//     document.write(element + "<br>");
// }

// Assignment # 17
// var userInput = prompt("Type Some Text");
// var n = userInput.charAt(userInput.length - 1);

// document.write("User Input: " + userInput + "<br>Last Character of Input: " + n);

// Assignment # 18
// Idon't know

// Chp # 26 to 30

// Assignment # 1
// var number = 3.45214;
// var roundOff = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("number: " + number + "<br>round off value: " + roundOff + "<br>floor value: " + floor + "<br>ceil value: " + ceil);

// Assignment # 2
// var number = -3.45214;
// var roundOff = Math.round(number);
// var floor = Math.floor(number);
// var ceil = Math.ceil(number);
// document.write("number: " + number + "<br>round off value: " + roundOff + "<br>floor value: " + floor + "<br>ceil value: " + ceil);

// Assignment # 3
// var absoluteNo = -3;
// var n = Math.abs(absoluteNo);
// document.write("The Absolute Value is " + absoluteNo + " is " + n);

// Assignment # 4
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 6) + 1;
// var numberOfStars = Math.floor(improvedNum);

// document.write("Random Dice Value is: " + numberOfStars);

// Assignment # 5
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 2) + 1;
// var numberOfStars = Math.floor(improvedNum);

// if (numberOfStars === 2) {
//     document.write("Random Coin Value is: Heads");
// } else {
//     document.write("Random Coin Value is: Tails");
// }

// Assignment # 6
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 100) + 1;
// var numberOfStars = Math.floor(improvedNum);

// document.write("Random No Between 1 and 100: " + numberOfStars);

// Assignment # 7
// var user = prompt("Enter Your Weight in Kilograms");
// var n = user.replace(/[^\d.-]/g, '');
// document.write("The Weight of User is: " + n + " Kilograms");

// Assignment # 8
// var bigDecimal = Math.random();
// var improvedNum = (bigDecimal * 10) + 1;
// var numberOfStars = Math.floor(improvedNum);

// var userInput = +prompt("Enter a Number Between 1 to 10")
// if (numberOfStars == userInput) {
//     alert("Congrats");
// } else {
//     alert("You had Type Incorrect Number,Secret Number is: " + numberOfStars);
// }

// Chp # 31 to 34

// Assignment # 1
// var d = new Date();
// document.write(d);

// Assignment # 2
// var month = new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December";

// var d = new Date();
// var n = month[d.getMonth()];
// document.write(n);

// Assignment # 3
// var d = new Date();
// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";

// var n = weekday[d.getDay()];
// document.write(n); // First Three Character

// Assignment # 4
// var d = new Date();
// var day = d.getDay();
// if (day == 6 || day == 7) {
//     document.write("It's Fun Day, Day is " + day);
// } else {
//     document.write("Day is " + day);
// }

// Assignment # 5
// var d = new Date();
// var day = d.getDate();

// if (day < 16) {
//     document.write("First Fifteen Day Of The Month");
// } else {
//     document.write("Last days of the month ");
// }

// Assignment # 6
// I don't Know

// Assignment # 7
// var d = new Date();
// var hour = d.getHours();
// if (hour <= 12) {
//     document.write("It's AM" + hour);
// } else {
//     document.write("It's PM" + hour);
// }

// Assignment # 8
// var date = new Date(),
//     y = date.getFullYear(),
//     m = date.getMonth();
// var lastDay = new Date(y + 1, 0, 0);
// document.write(lastDay);

// Assignment # 9
// var today = new Date();
// var RamzanDay = new Date("June 18, 2015");

// var msToday = today.getTime();
// var msRamzanDay = RamzanDay.getTime();

// var msDiff = msToday - msRamzanDay;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);

// dDiff = Math.floor(dDiff);
// document.write(dDiff + " days have passed since 1st Ramadan, 2015");

// Assignment # 10
// var today = new Date();
// var RamzanDay = new Date("June 18, 2015");

// var msToday = today.getTime();
// var msRamzanDay = RamzanDay.getTime();

// var dDiff = msToday - msRamzanDay;

// dDiff = Math.floor(dDiff);
// document.write("On Reference Date " + RamzanDay + "<br>" + dDiff + " Seconds had passed since beginning of 2015");

// Assignment # 11
// var date = new Date(),
//     y = date.getFullYear(),
//     m = date.getMonth(),
//     h = date.getHours();
// var datee = new Date();
// var lastDay = new Date(y, m + 1, 0, h - 1);
// document.write("Current Date: " + datee + "<br>1 Hour Ago, it was " + lastDay);

// Assignment # 12
// var date = new Date(),
//     y = date.getFullYear(),
//     m = date.getMonth();
// var datee = new Date();
// var lastDay = new Date(y - 100, m + 1, 0);
// alert("Current Date: " + datee + "\n100 Year Back, it was " + lastDay);

// Assignment # 13
// var age = prompt("Enter Your Age");
// var date = new Date(),
//     y = date.getFullYear(),
//     m = date.getMonth();
// var datee = new Date();
// var lastDay = new Date(y - age, m + 1, 0);
// alert("Your Age is : " + age + "\nYour Birth Year is: " + lastDay);

// Assignment # 14
// var customerName = prompt("Enter Customer Name");
// var date = new Date();
// var currentMonth = date.getMonth();
// var units = +prompt("Enter Units");
// var perUnits = +prompt("Enter Per Units Charges");
// var inDueDate = Math.floor(units * perUnits);
// var latePayment = 350;
// var grossAmount = inDueDate + latePayment;

// document.write("Customer Name: " + customerName + "<br>Month: " + currentMonth + "<br>Number of Units: " + units + "<br>Charges Per Unit: " + perUnits + "<br><br>Net Amount Payable (within Due Date): " + inDueDate + "<br>Late payment surcharge: " + latePayment + "<br>Gross Amount Payable (after Due Date): " + grossAmount);

// Chp 35 to 38

// Assignment # 1
// function currentDate() {
//     var date = new Date();
//     document.write(date);
// }
// currentDate();

// Assignment # 2
// function fullName(first = "Ahmed", last = "Yaqoob") {
//     document.write(first + " " + last);
// }
// fullName();

// Assignment # 3
// function add(num1, num2) {
//     return num1 + num2;
// }
// document.write(add(2, 5));

// Assignment # 4
// function add(num1, num2, operator) {
//     if (operator == "+") {
//         return num1 + num2;
//     } else if (operator == "-") {
//         return num1 - num2;
//     } else if (operator == "/") {
//         return num1 / num2;
//     } else if (operator == "*") {
//         return num1 * num2;
//     }
// }
// document.write(add(35, 5, "."));

// Assignment # 5
// function square(num) {
//     return Math.pow(num, 2);
// }
// document.write(square(5));

// Assignment # 6
// function factorial(factorial) {
//     var result = 1;
//     for (var i = factorial; i > 0; i--) {
//         result *= i;
//     }
//     document.write(result);
// }
// factorial(4);

// Assignment # 7
// function startEnd(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// startEnd(1, 100);

// Assignment # 8
// function calHyp(base, perpen) {
//     function calSq(sq) {
//         return sq * sq;
//     }
//     return Math.sqrt(calSq(base) + calSq(perpen));
// }
// document.write(calHyp(3, 3));

// Assignment # 9
// function areaOfRect(width, height) {
//     return width * height;
// }
// document.write(areaOfRect(5, 10));

// Assignment # 10
// function palindrome(string) {
//     for (var i = 0, j = string.length - 1; i < j; i++, j--) {
//         if (string.charAt(i) != string.charAt(j)) {
//             return false;
//         }
//     }
//     return true;
// }
// if (palindrome("madam")) {
//     document.write("Its Palindrome");
// } else {
//     document.write("Its not Palindrome");
// }

// Assignment # 11
// function firstCharacter(lowerCase = "") {
//     var get = lowerCase.split(' ');
//     var string = "";
//     get.forEach(element => {
//         var cap = element.charAt(0).toUpperCase();
//         string += cap + element.slice(1, element.length) + " ";
//     });
//     return string;
// }
// document.write(firstCharacter("the new code"));

// Assignment # 12
// function longestName(string) {
//     var index = 0;
//     var length = 0;
//     var array = string.split(' ');
//     for (var i = 0; i < array.length; i++) {
//         if (array[i].length > length) {
//             length = array[i].length;
//             index = i;
//         }
//     }
//     return array[index];
// }
// document.write(longestName("Web Development Program"));

// Assignment # 13
// function countChar(string, char) {
//     var count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string.charAt(i) == char) {
//             count++;
//         }
//     }
//     return count;
// }
// document.write(countChar("ahmed raza", "a"));

// Assignment # 14 
function calCircumference(radius) {
    document.write("The Cicumference is " + (Math.PI * radius * 2));
    document.write("<br>");
}

function calArea(radius) {
    document.write("The Area is " + (Math.PI * (radius * radius)));
}

calCircumference(3.5);
calArea(3.5);