const polybiusModule = (function () {

  function polybius(input, encode = true) {
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const poly = [11, 21, 31, 41, 51, 12, 22, 32, 42, 42, 52, 13, 23, 33, 43, 53, 14, 24, 34, 44, 54, 15, 25, 35, 45, 55]
  const result = [];
    
  if(encode) {
    input = input.toLowerCase().split("");
    input.forEach(character => {
      if (alphabet.includes(character)) {
          alphabet.forEach((letter, index) => {
            if (character === letter) {
              result.push(poly[index]);
            }
          }) 
     } else {
       result.push(character);
     }
    })
    return result.join("")
  } else {
      input = input.split(" ");
      if (input.join("").length %2 === 1) return false;
      input.forEach(pair => {
        //split into pairs
        pair = pair.match(/.{1,2}/g);
        let word = [];
        //go through each pair
        pair.forEach(num => {
          if (parseInt(num) === 42) {
            word.push("i/j");
          } else {
            poly.forEach((number, index) => {
              if(number === parseInt(num)) {
                word.push(alphabet[index]);
              } 
            })
          }
        })
        result.push(word.join(""));
      })
    return result.join(" ");
    }
  }

  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };
