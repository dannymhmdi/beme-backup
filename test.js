const computeFactorial = (n) => {
  if (n <= 0) return 1;
  return n * computeFactorial(n - 1);
};

let name = 'Daniel'
let n = name.replace('D','d')

console.log(computeFactorial(5))
console.log('name',name)
