class RomanNumeralsConverter{
  translateIntoRoman(number) {
    if(number == 1) {
      return "I";
    } 
      return "V";
  };
  translateIntoModern(romanLetters) {
    if(romanLetters.length == 1) {
      if(romanLetters == "I") {
        return 1;
      } else if(romanLetters == "V") {
        return 5;
      } else if(romanLetters == "X") {
        return 10; 
      } else if(romanLetters == "L") {
        return 50; 
      } else if(romanLetters == "C") {
        return 100;
      } else if(romanLetters == "D") {
        return 500;
      } else if(romanLetters == "M") {
        return 1000;
      };
    };
      return 2
  };
};

module.exports = RomanNumeralsConverter;

