class RomanNumeralsConverter{
  constructor() {
    this.score = 0;
    this.numerals = [
      {value: 1000, numeral: "M"},
      {value: 900, numeral: "CM"},
      {value: 500, numeral: "D"},
      {value: 400, numeral: "CD"},
      {value: 100, numeral: "C"},
      {value: 90, numeral: "XC"},
      {value: 50, numeral: "L"},
      {value: 40, numeral: "XL"},
      {value: 10, numeral: "X"},
      {value: 9, numeral: "IX"},
      {value: 5, numeral: "V"},
      {value: 4, numeral: "IV"}, 
      {value: 1, numeral: "I"}
    ];
    this.specialCase = [
      {value: 900, numeral: "CM"},
      {value: 400, numeral: "CD"},
      {value: 90, numeral: "XC"},
      {value: 40, numeral: "XL"},
      {value: 9, numeral: "IX"},
      {value: 4, numeral: "IV"}
    ]
  };
  translateIntoRoman(number) {
    var result = "";
    this.numerals.forEach((translation) => {
      while(number >= translation['value']) {
        number -= translation['value'];
        result += translation['numeral'];
      };
    });
    return result;
  };

  translateIntoModern(romanLetters) {
    let result = 0;
    for(let i = 0; i<romanLetters.length; i++) {
      if (this.findSpecialCase(romanLetters, i) != null) {
        result += this.findSpecialCase(romanLetters, i).value
        i ++;
      }
      else {
        this.numerals.forEach((translation) => {
          if(translation['numeral'] == romanLetters[i]) {
            result += translation['value'];
          };
        });
      };
    };
    return result;
  };

  findSpecialCase(givenRomanLetters, index) {
    return this.specialCase.find(element => element.numeral == givenRomanLetters[index] + givenRomanLetters[index + 1])
  };
};



module.exports = RomanNumeralsConverter;

