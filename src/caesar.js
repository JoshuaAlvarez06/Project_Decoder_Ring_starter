const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const newInput = input.toLowerCase().split("");
    const result = [];
    if (!shift || shift < -25 || shift > 25) return false;
    
    newInput.forEach((character, index) => {
      if (alphabet.includes(character)) {
        alphabet.forEach((letter, index) => {
          if (character === letter) {
            let shiftedIndex;
            if(encode) {
              shiftedIndex = index + shift;
            } else {
              shiftedIndex = index - shift;
            }
            if (shiftedIndex >= 26) {
              shiftedIndex = shiftedIndex - 26;
            } else if (shiftedIndex < 0) {
              shiftedIndex = shiftedIndex + 26;
            }
            const shiftedChar = alphabet[shiftedIndex];
            result.push(shiftedChar);
          }
        })
      } else {
        result.push(character);
      }
    })
    return result.join("");
}

  
  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
