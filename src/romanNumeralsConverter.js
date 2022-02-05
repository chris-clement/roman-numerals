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
    } else if(romanLetters == "V") {
      return 5;
    } else if(romanLetters == "X") {
      return 10; 
    } else if(romanLetters == "L") {
      return 50; 
    } return 100;
  };
};

module.exports = RomanNumeralsConverter;

