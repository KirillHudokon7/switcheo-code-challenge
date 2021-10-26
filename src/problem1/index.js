const showResultWithCheck = (num) =>  {
  return num < Number.MAX_SAFE_INTEGER 
  ? num 
  : "Not valid, need to add value lesser than max safe integer";
};

var sum_to_n_a = function (n) {
  return showResultWithCheck((n * (n + 1)) / 2);
};

var sum_to_n_b = function (n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return showResultWithCheck(sum);
};

var sum_to_n_c = function (n) {
  const getRes = (num) => {
    if (num === 1) {
      return num;
    } else {
      return num + getRes(num - 1);
    }
  };
  return showResultWithCheck(getRes(n));
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));

console.log(sum_to_n_a(600));
console.log(sum_to_n_b(100000));
console.log(sum_to_n_c(555));
