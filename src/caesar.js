// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function aLetter(char) {
    const regEx = (/[a-z]/)
    return regEx.test(char);
  }

  function caesar(input, shift = 0, encode = true) {
    if (shift < -25 || shift > 25 || shift === 0) return false;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    input = input.toLowerCase();
    shift *= encode ? 1: -1;
    inputArr = input.split("");
    return inputArr.map((char) => {
      if (!aLetter(char)) return char;

      const newIndex = (alphabet.indexOf(char) + shift) % 26;

      return newIndex >= 0 ? alphabet[newIndex] : alphabet[alphabet.length + newIndex]
    })
    .join("");
    
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
