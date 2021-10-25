const isNumberValid = (num) => {
  // validation to check if input will always produce a result lesser than Number.MAX_SAFE_INTEGER
  const res = (num * (num + 1)) / 2;
  if (res < Number.MAX_SAFE_INTEGER) {
    // check if value lesser than max safe integer
    return true;
  }
  return false;
};
var sum_to_n_a = function (n) {
  if (isNumberValid(n)) {
    const res = (n * (n + 1)) / 2;
    return res;
  }
  return "Not valid, need to add value lesser than max safe integer";
};

var sum_to_n_b = function (n) {
  if (isNumberValid(n)) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  return "Not valid, need to add value lesser than max safe integer";
};

var sum_to_n_c = function (n) {
  if (isNumberValid(n)) {
    const getRes = (num) => {
      if (num === 1) {
        return num;
      } else {
        return num + getRes(num - 1);
      }
    };
    return getRes(n);
  }
  return "Not valid, need to add value lesser than max safe integer";
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));

console.log(sum_to_n_a(600));
console.log(sum_to_n_b(10000000000000));
console.log(sum_to_n_c(555));
