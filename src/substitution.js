// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //need to take the input and match it with the alphabet given.

  function substitution(input, alphabet="", encode = true) {
    // your solution code here
    const regularAlpha = ("abcdefghijklmnopqrstuvwxyz").split("");
    const alphabetSplit = alphabet.split("");
    let realMessage;
    let encoded = [];
    let message = input.toLowerCase();
    splitMessage = message.split("");
  
    if (alphabet.length !== 26 || alphabet === undefined || alphabet === 0) {
      return false;
    } 

    for (let i = 0; i < alphabet.length; i++) {
      if (alphabetSplit[i] === regularAlpha[i]) {
        return false;
      }
    }

    if (!encode) {
      for (j = 0; j < message.length; j++) {
        switch (splitMessage[j]){
          case alphabetSplit[0]: 
            results = "a";
            encoded.push(results)
            break;
          case alphabetSplit[1]: 
            results = "b";
            encoded.push(results)
            break;
          case alphabetSplit[2]: 
            results = "c";
            encoded.push(results)
            break;
          case alphabetSplit[3]:
            results = "d"; 
            encoded.push(results)
            break;
          case alphabetSplit[4]: 
            results = "e";
            encoded.push(results)
            break;
          case alphabetSplit[5]: 
            results = "f";
            encoded.push(results)
            break;
          case alphabetSplit[6]: 
            results = "g";
            encoded.push(results)
            break;
          case alphabetSplit[7]: 
            results = "h";
            encoded.push(results)
            break;
          case alphabetSplit[8]: 
            results = "i";
            encoded.push(results)
            break;
          case alphabetSplit[9]: 
            results = "j";
            encoded.push(results)
            break;
          case alphabetSplit[10]: 
            results = "k";
            encoded.push(results)
            break;
          case alphabetSplit[11]: 
            results = "l";
            encoded.push(results)
            break;
          case alphabetSplit[12]: 
            results = "m";
            encoded.push(results)
            break;
          case alphabetSplit[13]: 
            results = "n";
            encoded.push(results)
            break;
          case alphabetSplit[14]: 
            results = "o";
            encoded.push(results)
            break;
          case alphabetSplit[15]: 
            results = "p";
            encoded.push(results)
            break;
          case alphabetSplit[16]: 
            results = "q";
            encoded.push(results)
            break;
          case alphabetSplit[17]: 
            results = "r";
            encoded.push(results)
            break;
          case alphabetSplit[18]: 
            results = "s";
            encoded.push(results)
            break;
          case alphabetSplit[19]: 
            results = "t";
            encoded.push(results)
            break;
          case alphabetSplit[20]: 
            results = "u";
            encoded.push(results)
            break;
          case alphabetSplit[21]: 
            results= "v";
            encoded.push(results)
            break;
          case alphabetSplit[22]: 
            results = "w";
            encoded.push(results)
            break;
          case alphabetSplit[23]: 
            results = "x";
            encoded.push(results)
            break;
          case alphabetSplit[24]: 
            results = "y";
            encoded.push(results)
            break;
          case alphabetSplit[25]: 
            results = "z";
            encoded.push(results)
            break;
          default: 
            encoded.push(splitMessage[j])
        }
      }
    }

    if (encode) {
      for (let a = 0; a < message.length; a++) {
        switch (splitMessage[a]){
          case "a": 
            // console.log("Prints a")
            results = alphabetSplit[0];
            encoded.push(results)
            break;
          case "b": 
            results = alphabetSplit[1];
            encoded.push(results)
            break;
          case "c": 
            results = alphabetSplit[2];
            encoded.push(results)
            break;
          case "d":
            results = alphabetSplit[3]; 
            encoded.push(results)
            break;
          case "e": 
            results = alphabetSplit[4];
            encoded.push(results)
            break;
          case "f": 
            results = alphabetSplit[5];
            encoded.push(results)
            break;
          case "g": 
            results = alphabetSplit[6];
            encoded.push(results)
            break;
          case "h": 
            results = alphabetSplit[7];
            encoded.push(results)
            break;
          case "i": 
            results = alphabetSplit[8];
            encoded.push(results)
            break;
          case "j": 
            results = alphabetSplit[9];
            encoded.push(results)
            break;
          case "k": 
            results = alphabetSplit[10];
            encoded.push(results)
            break;
          case "l": 
            results = alphabetSplit[11];
            encoded.push(results)
            break;
          case "m": 
            results = alphabetSplit[12];
            encoded.push(results)
            break;
          case "n": 
            results = alphabetSplit[13];
            encoded.push(results)
            break;
          case "o": 
            results = alphabetSplit[14];
            encoded.push(results)
            break;
          case "p": 
            results = alphabetSplit[15];
            encoded.push(results)
            break;
          case "q": 
            results = alphabetSplit[16];
            encoded.push(results)
            break;
          case "r": 
            results = alphabetSplit[17];
            encoded.push(results)
            break;
          case "s": 
            results = alphabetSplit[18];
            encoded.push(results)
            break;
          case "t": 
            results = alphabetSplit[19];
            encoded.push(results)
            break;
          case "u": 
            results = alphabetSplit[20];
            encoded.push(results)
            break;
          case "v": 
            results = alphabetSplit[21];
            encoded.push(results)
            break;
          case "w": 
            results = alphabetSplit[22];
            encoded.push(results)
            break;
          case "x": 
            results = alphabetSplit[23];
            encoded.push(results)
            break;
          case "y": 
            results = alphabetSplit[24];
            encoded.push(results)
            break;
          case "z": 
            results = alphabetSplit[25];
            encoded.push(results)
            break;
          default: 
          encoded.push(splitMessage[a])
            break;
        }
      }
    }
    
 
    realMessage = encoded.join('')
    return realMessage
  }
 


  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
