/*1. https://edabit.com/challenge/3LpBLgNRyaHMvNb4j
Create a function that takes two numbers as arguments and return their sum.*/
var a = 1;
var b = 57;

function sum(a, b) {
  var sumUp = a + b;
  return sumUp;
}
console.log(sum(a, b));

/*2. https://edabit.com/challenge/8q54MKnRrm89pSLmW
Write a function that takes an integer minutes and converts it to seconds.*/

var minutes = 10;

function convert(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
console.log(convert(minutes));

/*3. https://edabit.com/challenge/NAQhEoxbofPidLxm9
Create a function that takes a number as an argument, increments the number by +1 and returns the result.*/
var num = 10;
function addition(num) {
  var increment = ++num;
  return increment;
}
console.log(addition(num));

/*4. https://edabit.com/challenge/QaApgtePE6QrCZ64o
Create a function that takes an array containing only numbers and return the first element.*/
var arr = [24, 543, 21, 532, 765, 3, 1, 0, 14];
function getFirstValue(arr) {
  var firstValue = arr[0];
  return firstValue;
}
console.log(getFirstValue(arr));

/*5. https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.*/

var x = -9;
var y = 45;
function remainder(x, y) {
  var remain = x % y;
  return remain;
}
console.log(remainder(x, y));

/*6. https://edabit.com/challenge/8Qg78sf5SNDEANKti
In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.*/
var chickens = 3;
var cows = 4;
var pigs = 6;
function animals(chickens, cows, pigs) {
  var feet = chickens * 2 + cows * 4 + pigs * 4;
  return feet;
}
console.log(animals(chickens, cows, pigs));

/*7. https://edabit.com/challenge/iBQYbSHZGhpktLRdn
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.*/

var n = 15;
function divisibleByFive(n) {
  var final = "";
  if (n % 5 === 0) {
    final = true;
  } else {
    final = false;
  }
  return final;
}
console.log(divisibleByFive(n));

/*8. https://edabit.com/challenge/yHGowWucg3k2kJdZ4

Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.*/
var str1 = "luci";
var str2 = "dina";
function comp(str1, str2) {
  var comparison = "";
  if (str1.length === str2.length) {
    comparison = true;
  } else {
    comparison = false;
  }
  return comparison;
}
console.log(comp(str1, str2));

/*9. https://edabit.com/challenge/kLa2w7m4h849k8rmW
Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.*/
var name = "Lucian";
var num = 1;
function sayHelloBye(name, num) {
  var salute = "";
  if (num === 1) {
    salute = "Hello" + " " + name.charAt(0).toUpperCase() + name.slice(1);
  } else {
    salute = "Bye" + " " + name.charAt(0).toUpperCase() + name.slice(1);
  }
  return salute;
}
console.log(sayHelloBye(name, num));
