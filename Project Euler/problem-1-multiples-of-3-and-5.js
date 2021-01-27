function multiplesOf3and5(number) {
  const multiples = [];
  for (let i = 3; i < number; i++)
    if ( i % 3 === 0 || i % 5 === 0) {
      multiples.push(i)
  }
  const sum = multiples.reduce(
    (a,b) => a+b
  )
  return sum
};

console.log(multiplesOf3and5(1000));
