//Homework
var array = [1, 2, 3, 4, 56, 232, 45, 12, 4, 6, 8, 8, 8, 1, 1];

// Using control structures (if, for, while), do the following:

//1.display in the console the numbers from 1 to 20
for (var index = 0; index < array.length; index++) {
  if (array[index] < 20) {
    console.log(array[index]);
  }
}

//2.display in the console the odd numbers from 1 to 20
for (var index = 0; index < array.length; index++) {
  if (array[index] % 2 !== 0 && array[index] < 20) {
    console.log(array[index]);
  }
}

//3.compute the sum of the elements of an array and display it in the console
var sum = 0;
for (var index = 0; index < array.length; index++) {
  sum += array[index];
}
console.log(sum);

//4.compute the maximum of the elements of an array and display it in the console
var max = Math.max(...array);
console.log(max);

//5.compute how many times a certain element appears in an array - tips: use object, var element = 2
var occurance = {};
for (var index = 0; index < array.length; index++) {
  if (!occurance[array[index]]) {
    occurance[array[index]] = 0;
  }
  ++occurance[array[index]];
}
console.log(occurance);

/* 6.Using nested control structures (doua for + if) for generate the following pattern
   
      0 1 0 1
   
      1 0 1 0
   
      0 1 0 1
   
      1 0 1 0     */
      var result = "";
      for (var index = 0; index < 4; index++) {
        for (var index2 = 0; index2 < 2; index2++) {
          
          result = result + ' 0 1 '}
        
        result = result + "\n";
      }
      console.log(result);

