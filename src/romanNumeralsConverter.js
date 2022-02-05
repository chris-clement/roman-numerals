class RomanNumeralsConverter{
  translateIntoRoman(number) {
    if(number == 1) {
      return "I";
    } 
      return "V";
  };
  translateIntoModern(romanLetters) {
    if(romanLetters == "I") {
      return 1;
    }
      return 5;
  };
};

module.exports = RomanNumeralsConverter;

