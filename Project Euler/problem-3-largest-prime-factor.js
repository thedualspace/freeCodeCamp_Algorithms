//This may be a very ineffiecient method for sifting primes. Maybe because of large .splice() call rate.
// O(n^2) I think.
function listPrimes(n) {
    const primes = [...Array(n).keys()];
    const testArray = []
    primes.shift()
    primes.shift()
  
    for (let i = 0; i < primes.length; i++) {
      for (let j = i+1; j < primes.length; j++) {
        if ( primes[j] % primes[i] === 0) {
          primes.splice(j, 1)
        }
      }
    }
  
    return primes
  }
  
  
  //idea was to generate a list of primes to cycle through and halt the algorithm when the highest prime factor is found. 
  //Note: no primeFactors array need be made. simply divide out the current prime factor and keep increasing the prime until 
  //the factor itself is equal to the current prime factor.
  function largestPrimeFactor(number) {
    let factor = number;
    let p = 2;
    const primeFactors = [];
    
    if (factor % p === 0) {
      primeFactors.push(p)
      while (factor % p === 0) {
        factor /= p ;
      }
    };
     
  
    return Math.max(...primeFactors)
  }
  
  //largestPrimeFactor(3);
  console.log(Array(5))
  