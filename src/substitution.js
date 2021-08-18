const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    const abcs = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    input = input.toLowerCase().split("");
    const result = [];

    if (!alphabet) return false;
    const sub = alphabet.split("");
    if (sub.length !== 26) return false;
    //check for uniqueness
    for (let i = 0; i < sub.length; i++) {
      let count = 0;
      for (let j = 0; j < sub.length; j++) {
        if (sub[i] === sub[j]) {
          count++;
        }
      }
      if (count > 1) return false;
    }

    if (encode) {
      input.forEach((character) => {
        if (abcs.includes(character)) {
          abcs.forEach((letter, index) => {
            if (character === letter) result.push(sub[index]);
          });
        } else {
          result.push(character);
        }
      });
    } else {
      input.forEach((character) => {
        if (sub.includes(character)) {
          sub.forEach((letter, index) => {
            if (character === letter) result.push(abcs[index]);
          });
        } else {
          result.push(character);
        }
      });
    }

    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
