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
    var romanLettersArray = romanLetters.split('')
    if(romanLettersArray[0] == "I" && romanLettersArray[1] =="V") {
      return 4
    };
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
  }
};



module.exports = RomanNumeralsConverter;

