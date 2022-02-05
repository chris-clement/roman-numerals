class RomanNumeralsConverter{
  constructor() {
    this.score = 0;
  }
  translateIntoRoman(number) {
    if(number == 1) {
      return "I";
    } 
      return "V";
  };
  translateIntoModern(romanLetters) {
    if(this.checkForIX(romanLetters)) {
      var romanLetters = romanLetters.replace("IX", "")
      this.score += 9
    } else if(this.checkForIV(romanLetters)) {
      var romanLetters = romanLetters.replace("IV", "")
      this.score += 4
    };
    var romanLettersArray = romanLetters.split('')
    romanLettersArray.forEach((romanLetter) => {
      this.translateRomanLetterIntoModern(romanLetter);
    });
    return this.score;
  };
  translateRomanLetterIntoModern(single_letter) {
    if(single_letter == "I") {
      this.score += 1;
    } else if(single_letter == "V") {
      this.score += 5;
    } else if(single_letter == "X") {
      this.score += 10; 
    } else if(single_letter == "L") {
      this.score += 50; 
    } else if(single_letter == "C") {
      this.score += 100;
    } else if(single_letter == "D") {
      this.score += 500;
    } else if(single_letter == "M") {
      this.score += 1000;
    };
    return this.score;
  };
  checkForIX(romanLetters) {
    return romanLetters.slice(-2) == "IX";
  };
  checkForIV(romanLetters) {
    return romanLetters.slice(-2) == "IV";
  };
};



module.exports = RomanNumeralsConverter;

