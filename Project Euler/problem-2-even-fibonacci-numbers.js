function fiboEvenSum(n) {
  let fib_0 = 0;
  let fib_1 = 1;
  let fib_n = fib_0 + fib_1;
  const evenFibs = [];
  
  while (fib_n < n) { 
    if (fib_n % 2 === 0) {
      evenFibs.push(fib_n)
    }
    
    fib_0 = fib_1;
    fib_1 = fib_n;
    fib_n = fib_0 + fib_1;    
  }

  const sum = evenFibs.reduce(
    (a,b) => a+b
  )
  return sum;
}

fiboEvenSum(10);
