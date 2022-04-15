/*1.https://edabit.com/challenge/4gzDuDkompAqujpRi

Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.*/

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function adUp(num) {
  var sum = 0;
  for (var i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
console.log(adUp(num));

/*2.https://edabit.com/challenge/Q3n42rEWanZSTmsJm

Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.*/

var numbers = [1, 25, 654, 23, 688, 59076, 123, 534];

function minMax(numbers) {
  var min = Math.min(...numbers);
  var max = Math.max(...numbers);
  var final =[min, max]
  return final;
}
console.log(minMax(numbers));


/*3.https://edabit.com/challenge/Mc6Xi4PRw7fDzeMDB

Create a function that takes a string and returns a string in which each character is repeated once.

var str = ['salut']

function doubleChar(str){
  var chars = str.split('');
  var repeat = str.repeat(2)
 
   
} console.log(doubleChar(str))*/

/*4. https://edabit.com/challenge/Mo6Coy4PpTbZgtDKd
A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.*/

var arr = [3,3,5,7,8,5,7,8,9,3,9,0];
function set(arr){
  var set= new Set(arr)
  Array.from(set);
  return set
}console.log(set(arr))

/*. https://edabit.com/challenge/hscAGyt4iNZ3PKy3g
Write a function that returns the number of users in a chatroom based on the following rules:If there is no one, return "no one online".
If there is 1 person, return "user1 online".
If there are 2 people, return "user1 and user2 online".
If there are n>2 people, return the first two names and add "and n-2 more online".*/

var users = ["user1", "user2", "user3", "user4", "user5", "user6"];

function chatroomStatus(users) {
  var finalOutput = "";
  var usersLength = users.length;

  if (usersLength === 1) {
    finalOutput = users[0] + " is online ";
  } else if (usersLength === 2) {
    finalOutput = users[0] + " " + users[1] + " " + "are online";
  } else if (usersLength >= 3) {
    finalOutput =
      users[0] +
      " " +
      users[1] +
      " and " +
      (users.length - 2) + ' ' +
      "more are online";
  } else {
    finalOutput = "no one online";
  }
  return finalOutput;
}

console.log(chatroomStatus(users));
