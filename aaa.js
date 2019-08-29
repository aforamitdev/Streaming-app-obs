function outer() {
  let counter = 0;
  let amit = "amit";
  function increment() {
    counter++;
    console.log(counter);
    console.log(amit);
  }
  return increment;
}

let myNewFun = outer();
console.log(myNewFun());
