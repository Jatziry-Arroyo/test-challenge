function factorial(nNumber) {
    return nNumber ? nNumber * factorial(n - 1) : 1;
  }
  
  alert( factorial(5) ); // 120

  module.exports = factorial;