
//1. No Answer 
function mindGame(n) {
  // const add = n * 3;
  // const add2 = add + 10;
  // const add3 = add2 / 2;
  // const add4 = add3 - 5;
  const result = (5 * 3 + 10) / 2 - 5;
  return result;
}
const result = mindGame(33);
console.log(result);

//2 No Answer

function evenOrOdd(n) {
  if (typeof n == "string") {
    console.log("N is string");
    // count the length of n
    let lenOfString = n.length;
    if (lenOfString % 2 == 0) {
      console.log("EVEN");
    } else {
      console.log("ODD");
    }
  } else {
    console.log("not a string");
  }
}

evenOrOdd("sumon2");

//3 No Answer

function isLGSeven(n) {
  // check n is string or not

  if (n !== "sting") {
    // process substruction
    if (n < 7) {
      let result = n - 7;
      console.log(result);
    } else {
      let doubleOfN = n * 2;
      console.log(doubleOfN);
    }
  } else {
    // show  n is string message
    console.log("n is a string");
  }
}

isLGSeven(15);



//5 No answer


function gemsToDiamond(a, b, c) {
  // calculate gems power for individuals
  let first = a * 21;
  let second = b * 32;
  let third = c * 43;

  let totalDimond = first + second + third;

  // check if total dimond is greater than 2000 or not
  if (totalDimond > 2000) {
    let expectedDiamond = totalDimond - 2000;
    console.log(expectedDiamond);
  } else {
    // return error for less than 2000 diamond
    console.log("Sorry, you can not get any diamond");
  }
}

gemsToDiamond(12, 13, 44);
gemsToDiamond(100, 4, 480);
gemsToDiamond(10, 20, -30);

var input = [2, -5, 0, -7];

function findingBadData(array) {
  var badData = [];

  for (var i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      BadData.push(array[i]);
    }
  }
  return badData.length;
}
console.log(findingBadData(input));
