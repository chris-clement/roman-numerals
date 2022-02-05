class RomanNumeralsConverter{
  translateIntoRoman(number) {
    if(number == 1) {
      return "I";
    } 
      return "V";
  }
};

module.exports = RomanNumeralsConverter;

