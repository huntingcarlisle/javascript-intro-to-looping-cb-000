function forLoop(arr) {
  for (let i = 0; i < 25; i++) {
    if (i == 1) {
      arr.push("I am 1 strange loop.")
    } else {
      arr.push(`I am ${i} strange loops.`)
    }
  }
  return arr;
}

function whileLoop(num) {
  while(num > 0) {
    console.log(num);
    num--;
  }
  return "done";
}

function doWhileLoop(arr) {
  let count = 0;
  do {
    console.log("I run once regardless.")
    arr.pop()
  } while (incrementVariable(count) <= arr.length)
};

function incrementVariable(i) {
  return i++;
}