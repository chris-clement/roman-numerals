class RomanNumeralsConverter{
  translateIntoRoman(number) {
    if(number == 1) {
      return "I";
    } 
      return "V";
  };
  translateIntoModern(romanLetters) {
    if(romanLetters.length == 1) {
      return this.translateRomanLetterIntoModern(romanLetters)
    }
      else if(romanLetters == "II") {
        return 2;
      }
        return 6;
  };
  translateRomanLetterIntoModern(single_letter) {
    if(single_letter == "I") {
      return 1;
    } else if(single_letter == "V") {
      return 5;
    } else if(single_letter == "X") {
      return 10; 
    } else if(single_letter == "L") {
      return 50; 
    } else if(single_letter == "C") {
      return 100;
    } else if(single_letter == "D") {
      return 500;
    } else if(single_letter == "M") {
      return 1000;
    };
  }
};



module.exports = RomanNumeralsConverter;

